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
    .option('-t, --template <template>', 'specify only prisma or plain')
    .option('-p, --prisma', 'define template prisma');

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);

if (program.args.length !== 1) {
    throw Error('Wrong number of arguments!');
}

let template = 'plain'

if (options.prisma) {
    template = 'prisma';
} else if (options.template) {
    if (options.template === 'prisma' || options.template === 'plain') {
        template = options.template;
    } else {
        throw Error('Wrong template!');
    }
}

// Creating new project started
console.log('Setting up new Express with typescript support app...');

// Creating new project finished
generateApp(program.args[0], template).then(() => {
    console.log(`Application has been created with ${template} template!`);
});