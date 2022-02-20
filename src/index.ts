import { join } from 'path';

import { program } from 'commander';
import { Register } from './command-register';

async function run() {
  process.env.DEBUG = process.env.CI ? 'false' : process.env.DEBUG || 'false';

  const pkg = await import('../package.json');
  program.storeOptionsAsProperties(false);
  program
    .name('2fa')
    .version(
      `Google Authentiction CLI Version: ${pkg.version}`,
      '-v, --version',
      'output the current version',
    );

  const rg = new Register(program, {
    cmdDir: join(__dirname, 'commands'),
  });

  await rg.run();

  program.on('--help', () => {
    console.log('');
    console.log('Example call:');
    console.log('  $ 2fa --help');
  });

  // set default command to generate
  if (!process.argv[2]) {
    process.argv[2] = 'generate';
  }

  program.parse(process.argv);
}

run();
