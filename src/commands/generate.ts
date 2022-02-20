import chalk from 'chalk';
import { Command } from 'commander';
import { prompt } from 'inquirer';
import { authenticator } from 'otplib';
import clipboard from 'clipboardy';
import AddCommand from './add';
import { StorageEngine } from '../storage';

export class TwoFa {
  engine: StorageEngine;

  constructor() {
    this.engine = new StorageEngine();
  }

  async gotoAdd() {
    const { add } = await prompt([
      {
        type: 'confirm',
        name: 'add',
        message: 'No platform exist, do you want to add one?',
      },
    ]);
    if (add) {
      process.argv[2] = 'add';
      AddCommand.parse(process.argv);
    }
  }

  async generate() {
    const keys = this.engine.getKeys();
    if (keys.length < 1) {
      return await this.gotoAdd();
    }
    const { name } = await prompt([
      {
        type: 'list',
        name: 'name',
        message: 'Please select platform name:',
        choices: keys,
      },
    ]);
    const secret = this.engine.get(name) as string;

    const code = authenticator.generate(secret);
    console.log(`Generate 2fa code for plarform '${name}': `);
    console.log(chalk.bgGreen(` ${chalk.black(code)} `));
    clipboard.write(code).then(() => {
      console.log(chalk.gray('Auto copy 2fa code to clipboard success.'));
    });
  }
}

const generate = new Command('generate');
generate.description('Generate 2fa code.').action(async () => {
  const twoFa = new TwoFa();
  twoFa.generate();
});

// sub command need export default
export default generate;
