#!/usr/bin/env node

/**
 * Copyright (c) 2020-present, Prawira Genestonlia.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const path = require('path');
const generateApp = require('./helper');

(() => {
    // Get project name
    if (process.argv.length !== 3) {
        throw Error('Wrong number of arguments!');
    }
    let projectName = path.join(process.cwd(), process.argv[2] || 'express-app');

    // Creating new project started
    console.log('Setting up new Express with typescript support app...');

    // Creating new project finished
    generateApp(projectName).then(() => {
        console.log('Application has been created!');
    });
})();
