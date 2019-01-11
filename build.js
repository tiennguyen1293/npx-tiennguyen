'use strict';

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
};

// Text + chalk definitions
// prettier-ignore
const data = {
	name:            chalk.white('           Nguyen Minh Tien'),
	handle:          chalk.white('tiennguyen'),
	work:            chalk.white('Front-End Developer'),
	workOther:       chalk.white('Software Engineer'),
	from:            chalk.white('Sai Gon, Vietnam'),
	github:          chalk.gray('https://github.com/') + chalk.green('tiennguyen1293'),
	npx:             chalk.red('npx') + ' ' + chalk.white('tiennguyen'),
	labelWork:       chalk.white.bold('   Title:'),
	labelFrom:       chalk.white.bold('    From:'),
	labelGitHub:     chalk.white.bold('  GitHub:'),
	labelCard:       chalk.white.bold('    Card:'),
};

// Actual strings we're going to output, newlines matter
const output = `${data.name} / ${data.handle}
${data.labelWork}  ${data.work} / ${data.workOther}
${data.labelFrom}  ${data.from}
${data.labelGitHub}  ${data.github}
${data.labelCard}  ${data.npx}
`;

// frame the text
const box = chalk.green(boxen(output, options));

// generate the single js file that need run with npx
fs.writeFileSync(
	path.join(__dirname, 'bin/card.js'),
	`#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool
console.log('${box.split('\n').join('\\n\\\n')}');
`
);