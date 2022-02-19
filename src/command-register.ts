import { program } from 'commander';
import { readdirSync } from 'fs';
import { join } from 'path';
import { loadDynamicModule } from './utils';

export interface Options {
  cmdDir: string;
}

const defaultOptions = {
  cmdDir: join(process.cwd(), 'commands'),
};

export class Register {
  command: typeof program;
  options: Options;
  commands: { name: string; path: string }[];

  constructor(command: typeof program, options: Options = defaultOptions) {
    this.command = command || program;

    this.options = options;
    this.commands = [];
  }

  getCommands() {
    const { cmdDir } = this.options;
    const files = readdirSync(cmdDir);
    for (const file of files) {
      if (/\.(t|j)s$/g.test(file) && !/\.d\.(m)?(t|j)s$/g.test(file)) {
        const [commandName] = file.split('.');
        const cmdPath = join(cmdDir, file);
        this.commands.push({
          name: commandName,
          path: cmdPath,
        });
      }
    }
  }

  async run() {
    this.getCommands();

    for (const { path: cmdPath } of this.commands) {
      const cmd = await loadDynamicModule(cmdPath);
      this.command.addCommand(cmd);
    }
  }
}
