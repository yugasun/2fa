import { Logger } from '../logger';
import { StorageEngine } from '../storage';
import { Command } from 'commander';
import { prompt } from 'inquirer';

export async function action(): Promise<void> {
  const engine = new StorageEngine();
  const keys = engine.getKeys();
  if (keys.length < 1) {
    Logger.success(`No platform exist.`);
    return;
  }
  const { name } = await prompt([
    {
      type: 'list',
      name: 'name',
      message: 'Please select platform name to remove:',
      choices: keys,
    },
  ]);
  engine.remove(name);
  Logger.success(`Remove platform '${name}' success.`);
}

const cmd = new Command('remove');

cmd.description('Remove platform ga key').action(() => {
  action();
});

export default cmd;
