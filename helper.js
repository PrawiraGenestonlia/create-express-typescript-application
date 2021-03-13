/**
 * Copyright (c) 2020-present, Prawira Genestonlia.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const path = require('path');
const fs = require('fs-extra');
const editJsonFile = require('edit-json-file');
const childProcess = require('child_process');
const execSync = require('child_process').execSync;
const ncp = require('ncp').ncp;

const handleExit = () => {
    console.log('Exiting without error.');
    process.exit();
};

const handleError = e => {
    console.error('ERROR! An error was encountered while executing');
    console.error(e);
    console.log('Exiting with error.');
    process.exit(1);
};

process.on('SIGINT', handleExit);
process.on('uncaughtException', handleError);

/**
 * Copy project files
 * 
 * @param folderDestination 
 */
const copyProjectFiles = (folderDestination, type) => {
    let originalFolder = '';

    if (type === 'prisma') {
        originalFolder = './create-express-typescript-application-prisma-sample';
    } else if (type === 'plain') {
        originalFolder = './create-express-typescript-application-sample';
    } else if (type === 'typeorm') {
        originalFolder = './create-express-typescript-application-typeorm-sample';
    }

    const source = path.join(__dirname, originalFolder);
    return new Promise((resolve, reject) => {
        ncp.limit = 16;
        ncp(source, folderDestination, function (err) {
            if (err) {
                reject(err);
            }
            resolve();
        });
    })
}

/**
 * Set project name in package.json
 * @param projectName 
 */
const updatePackageJson = (projectName) => {
    let file = editJsonFile(projectName + '/package.json', {
        autosave: true
    });
    file.set('name', path.basename(projectName));
    file.set('description', path.basename(projectName) + " initialised with create-express-typescript-application.");

}

/**
 * Get all the dependencies
 */
const getDepStrings = () => {
    const dependencies = 'cors express fs helmet morgan env-cmd';
    const devDependencies = '@types/cors @types/express @types/morgan @types/node @typescript-eslint/parser ' +
        '@typescript-eslint/eslint-plugin eslint nodemon ts-node typescript'
    return { dependencies, devDependencies };
}

/**
 * Download the dependencies.
 * @param folderPath 
 * @param d
 */
const downloadNodeModules = (folderPath, d) => {
    const options = { cwd: folderPath };
    childProcess.execSync('npm i -s ' + d.dependencies, options);
    childProcess.execSync('npm i -D ' + d.devDependencies, options);
    childProcess.execSync('npm i', options);

}

const checkGitIgnore = (appPath) => {
    const gitignoreExists = fs.existsSync(path.join(appPath, '.gitignore'));
    if (gitignoreExists) {
        // Append if there's already a `.gitignore` file there
        const data = fs.readFileSync(path.join(appPath, 'gitignore'));
        fs.appendFileSync(path.join(appPath, '.gitignore'), data);
        fs.unlinkSync(path.join(appPath, 'gitignore'));
    } else {
        // Rename gitignore after the fact to prevent npm from renaming it to .npmignore
        // See: https://github.com/npm/npm/issues/1862
        fs.moveSync(
            path.join(appPath, 'gitignore'),
            path.join(appPath, '.gitignore'),
            []
        );
    }
}



const isInGitRepository = (folderPath) => {
    try {
        const options = { cwd: folderPath, stdio: 'ignore' };
        execSync('git rev-parse --is-inside-work-tree', options);
        return true;
    } catch (e) {
        return false;
    }
}

const tryGitInit = (folderPath) => {
    try {
        const options = { cwd: folderPath, stdio: 'ignore' };
        execSync('git --version', options);
        if (isInGitRepository(folderPath)) {
            return false;
        }

        execSync('git init', options);
        return true;
    } catch (e) {
        console.warn('Git repo not initialized', e);
        return false;
    }
}

const tryGitCommit = (folderPath) => {
    try {
        const options = { cwd: folderPath, stdio: 'ignore' };
        execSync('git add .', options);
        execSync('git commit -m "Initialize project using create-express-typescript-application"', options);
        return true;
    } catch (e) {
        // We couldn't commit in already initialized git repo,
        // maybe the commit author config is not set.
        // In the future, we might supply our own committer
        // like Ember CLI does, but for now, let's just
        // remove the Git files to avoid a half-done state.
        console.warn('Git commit not created', e);
        console.warn('Removing .git directory...');
        try {
            // unlinkSync() doesn't work on directories.
            fs.removeSync(path.join(appPath, '.git'));
        } catch (removeErr) {
            // Ignore.
        }
        return false;
    }
}

/**
 * Entry point
 * @param folderName 
 */
const generateApp = async (folderName, type = 'plain') => {
    try {
        await copyProjectFiles(folderName, type);
        updatePackageJson(folderName);
        downloadNodeModules(folderName, getDepStrings());
        checkGitIgnore(folderName);
        tryGitInit(folderName);
        tryGitCommit(folderName);
    } catch (err) {
        console.error(err);
    }
}

// Export entry point
module.exports = generateApp;
