import { Logger } from '../logger';
import { StorageEngine } from '../storage';
import { Command } from 'commander';
import { prompt } from 'inquirer';

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Please input platform name:',
  },
  {
    type: 'password',
    mask: '*',
    name: 'key',
    message: 'Please input google authentication key:',
    validate(value: string) {
      if (value) {
        return true;
      }

      return 'Please enter a valid GA Key.';
    },
  },
];

export async function action(): Promise<void> {
  const answers = await prompt(questions);
  const { name, key } = answers;
  const store = new StorageEngine();
  store.set(name, key);
  Logger.success(`Add platform ${name} success.`);
}

const cmd = new Command('add');

cmd.description('Add platform ga key').action(() => {
  action();
});

export default cmd;
