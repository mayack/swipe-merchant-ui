# Frequently Asked Questions

[How to fix imports from library directory with CDN links?](#how-to-fix-imports-from-library-directory-with-cdn-links)

---

## How to fix imports from library directory with CDN links?
1. Open [`/src/configs/jspm.config.production.js`](/src/configs/jspm.config.production.js) file.
2. Add library name with CDN link in `paths` object.
3. Add import value with library name in `map` object.
    
    Example:
    ```js
    SystemJS.config({
        map: {
            "flux/utils": "npm:flux@3.1.2/utils"
        },
        paths: {
            "npm:flux@3.1.2/utils": "//cdnjs.cloudflare.com/ajax/libs/flux/3.1.2/FluxUtils.min.js"
        }
    );
    ```
