import chalk from 'chalk';
import boxen from 'boxen';

console.log(chalk.blue.bgGreen.underline('Hello world!'));

console.log(boxen(chalk.blue.bgGreen.underline('unicorn'), {
    padding: 1,
    margin: 2,
    borderStyle: 'double',
    title: chalk.blue.bgGreen.underline('Hello')
}));