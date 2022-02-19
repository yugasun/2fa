import chalk from 'chalk';

export class Logger {
  static info(msg: string) {
    console.log(chalk.bgWhite(chalk.black(` INFO `)), msg);
  }
  static error(msg: string) {
    console.log(chalk.bgRed(chalk.black(' ERROR ')), chalk.red(msg));
    process.exit(1);
  }
  static success(msg: string) {
    console.log(chalk.bgGreen(chalk.black(' SUCCESS ')), chalk.green(msg));
  }
}
