import { Logger } from '../logger';
import { StorageEngine } from '../storage';
import { Command } from 'commander';

export async function action(): Promise<void> {
  const engine = new StorageEngine();
  const keys = engine.getKeys();
  if (keys.length < 1) {
    Logger.success(`No platform exist.`);
    return;
  }
  Logger.info(`All added platform:`);
  console.log(keys.join(', '));
}

const cmd = new Command('list');

cmd.description('List all platform').action(() => {
  action();
});

export default cmd;
