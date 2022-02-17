const { prompt } = require('inquirer');
const { authenticator } = require('otplib');
const config = require('./config');

const choices = Object.keys(config);

async function main() {
  const { default: clipboard } = await import('clipboardy');
  const { default: chalk } = await import('chalk');
  const { env } = await prompt([
    {
      type: 'list',
      name: 'env',
      message: 'Please select env:',
      choices,
    },
  ]);
  const secret = config[env];

  const code = authenticator.generate(secret);
  console.log(`Generate ga code for ${env}: `);
  console.log(chalk.bgGreen(` ${chalk.black(code)} `));
  clipboard.write(code).then(() => {
    console.log(chalk.gray('Auto copy ga code to clipboard success.'));
  });
}

main();
