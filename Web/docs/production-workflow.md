# Production Workflow

- [Before start](#before-start)
- [Prepare single page application](#prepare-single-page-application)

---

## Before start
1. Configure JSPM for production in  [`/src/configs/jspm.config.production.js`](/src/configs/jspm.config.production.js) file.
    1. Read how it works: [loading libraries from cdn](http://jspm.io/0.17-beta-guide/loading-libraries-from-cdn.html).
    2. Generate initial file:
        ```cmd
        > gulp Jspm.CdnPaths:Production
        ```
    3. Check resolved versions.
    4. Fix imports from library directories. 

        Read how to fix: [faq.md#how-to-fix-imports-from-library-directory-with-cdn-links](./faq.md#how-to-fix-imports-from-library-directory-with-cdn-links)


## Prepare single page application
1. Install npm packages:
    ```cmd
    > npm install
    ```
2. Install jspm pacakges:
    ```cmd
    > jspm install
    ```
3. Build project:
    ```cmd
    > gulp Build:Production
    ```
4. Bundle app files:
    ```cmd
    > gulp Bundle
    ```
