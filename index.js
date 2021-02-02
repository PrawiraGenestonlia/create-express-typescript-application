#!/usr/bin/env node

/**
 * Copyright (c) 2020-present, Prawira Genestonlia.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { Command } = require('commander');
const generateApp = require('./helper');

const program = new Command();
program.version('2.1.1');

program
    .option('-d, --debug', 'output extra debugging')
    .option('-t, --type <type>', 'specify only prisma or plain')
    .option('-p, --prisma', 'define type prisma');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);

if (program.args.length !== 1) {
    throw Error('Wrong number of arguments!');
}

let type = 'plain'

if (options.prisma) {
    type = 'prisma';
} else if (options.type) {
    if (options.type === 'prisma' || options.type === 'plain') {
        type = options.type;
    } else {
        throw Error('Wrong type!');
    }
}

// Creating new project started
console.log('Setting up new Express with typescript support app...');

// Creating new project finished
generateApp(program.args[0], type).then(() => {
    console.log(`Application has been created with ${type} template!`);
});