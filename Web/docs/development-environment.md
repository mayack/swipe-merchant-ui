# Development Environment

- [Requirements](#Requirements)
- [Prepare environment](#prepare-environment)
- [Gulp commands](#gulp-commands)
- [JSPM commands](#jspm-commands)

---

## Requirements
- [NodeJS](https://nodejs.org) >= 6.0.0
- [NPM](https://www.npmjs.com/package/npm) >= 3.8.6
- [JSPM](http://jspm.io) >= 0.17.0-beta.41
- [GulpCli](http://npmjs.com/package/gulp-cli) >= 1.3.0


## Prepare environment
1. Install [NodeJS](https://nodejs.org).
2. Prapare global packages and project:
    ```cmd
    > npm run starter-all
    ```
    Or by steps:
    1. Install global packages:
        ```cmd
        > npm install gulp-cli jspm -g
        // or 
        > npm run starter-global
        ```
    2. Prepare project:
        ```cmd
        > npm install && jspm install
        // or
        > npm run starter
        ```
3. Start server with files watcher:
    ```cmd
    > gulp
    ```


## Gulp commands

- Start server and watch files:
    ```cmd
    > gulp
    ```

- Build project:
    ```cmd
    > gulp Build
    // or 
    > gulp Build:Production
    ```
- Watch files changes:
    ```cmd
    > gulp Watch
    ```

- Other available gulp commands:
    ```cmd
    > gulp --tasks
    ```
Read more about `simplr-gulp` package here:
[https://github.com/QuatroCode/simplr-gulp](https://github.com/QuatroCode/simplr-gulp).

## JSPM commands

 - Installing new package
    ```cmd
    > jspm install registry:pk
    // Example
    > jspm install npm:lodash
    ```

 - Uninstalling package
    ```cmd
    > jspm uninstall package-name
    // Example
    > jspm install lodash
    ```

 - Resolving package version
    ```cmd
    > jspm resolve --only registry:pkg@version
    // Example
    > jspm resolve --only npm:lodash@4.17.4
    ```

 - Other JSPM commands:
    ```cmd
    > jspm -h
    ```
Read more about `jspm` package here:
[http://jspm.io](http://jspm.io).
