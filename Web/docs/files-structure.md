# Files Structures

- [Source files](#source-files)
- [Application files](#application-files)
- [Action files](#action-files)
- [Component files](#component-files)
- [Module files](#module-files)
- [Store files](#store-files)
- [Route files](#route-files)

---

## Source files
```
 ── src/
    ├── app/
    ├── assets/
    ├── configs/
    ├── index.html
    └── index.production.html
```
- `src/app/` - SPA files folder.
- `src/assets/` - Global SPA assets (favicons, images).
- `src/configs/` - SPA configuration files.
- `src/index.html` - Index file for **development** only.
- `src/index.production.html` - Index file for **production** only.


## Application files
```
 ── app/
    ├── actions/
    ├── components/
    ├── modules/
    ├── routes/
    ├── stores/
    └── utils/
```
- `app/actions/` - Shared actions between all SPA.
- `app/components/` - Shared components between all SPA.
- `app/module/` - Shared modules between all SPA.
- `app/routes/` - SPA routes.
- `app/stores/` - Shared stores between all SPA.
- `app/utils/` - SPA utils.


## Action files

#### Simple actions sample
```
── do-stuff/
   ├── do-stuff-actions.ts
   └── do-stuff-actions-creators.ts
```
- `do-stuff/do-stuff-actions.ts` -  Multiple actions classes in one file.
- `do-stuff/do-stuff-actions-creators.ts` - Exported namespace with multiple methods.

#### Complex actions sample
```
── stuff/
   ├── actions/
       ├── do-stuff-action.ts
       └── do-second-stuff-action.ts
   ├── stuff-actions.ts
   └── stuff-actions-creators.ts
```
- `stuff/actions/do-stuff-action.ts` - Action class.
- `stuff/actions/do-second-stuff-action.ts` - Second action class.
- `stuff/stuff-actions.ts` - Re-exported actions classes.
- `stuff/stuff-actions-creators.ts` - Exported namespace with multiple methods.


## Component files

#### Simple component smaple
```
── component-name/
   ├── component-name-cview.css
   ├── component-name-cview.tsx
   ├── component-name-view.css
   ├── component-name-view.tsx
   └── component-name.ts
```
- `component-name/component-name-cview.css` - Component controller-view styles.
- `component-name/component-name-cview.tsx` - Component controller-view.
- `component-name/component-name-view.css` - Component view styles.
- `component-name/component-name-view.tsx` - Component view.
- `component-name/component-name.ts` - Component entry file.


#### Complex component sample
```
── app-layout/
   ├── header/
       ├── app-layout-header-view.css
       └── app-layout-header-view.tsx
   ├── footer/
       ├── app-layout-footer-view.css
       └── app-layout-footer-view.tsx
   ├── app-layout-cview.css
   ├── app-layout-cview.tsx
   └── app-layout.ts
```
- `app-layout/header/app-lauout-header-view.css` - Header component view styles.
- `app-layout/header/app-lauout-header-view.tsx` - Header component view.
- `app-layout/footer/app-layout-footer-view.css` - Footer component view styles.
- `app-layout/footer/app-layout-footer-view.tsx` - Footer component view.
- `app-layout/app-layout-cview.css` - Main component controller-view styles.
- `app-layout/app-layout-cview.tsx` - Main component controller-view.
- `app-layout/app-layout.ts` - Component entry file.


## Module files

#### Simple module sample
```
 ── small-module-name/
    ├── small-module-name-container.tsx
    ├── small-module-name-cview.tsx
    ├── small-module-name-view.css
    ├── small-module-name-view.tsx
    └── small-module-name.ts
```
- `small-module-name/small-module-name-container.tsx` - Module container.
- `small-module-name/small-module-name-cview.tsx` - Module controller-view.
- `small-module-name/small-module-name-view.css` - Module view styles.
- `small-module-name/small-module-name-view.tsx` - Module view file.
- `small-module-name/small-module-name.ts` - Module entry file.

#### Complex module sample
```
 ── large-module-name/
    ├── actions/
    ├── components/
    ├── stores/
    └── module-name.ts
```
- `large-module-name/actions` - Module actions files.
- `large-module-name/components` - Module components files (views, cviews, containers).
- `large-module-name/stores` - Module stores files.
- `large-module-name/module-name.ts` - Module entry file.


## Store files

#### Simple store sample
```
── stuff/
   └── stuff-store.ts
```
- `stuff/stuff-store.ts` - Stuff store (reduce, map or data store).


#### Complex store sample
```
── stuff/
   ├── stuff-data-store.ts
   ├── stuff-list-store.ts
   └── stuff-store.ts
```
- `stuff/stuff-data-store.ts` - Stuff data store.
- `stuff/stuff-list-store.ts` - Stuff list store (reduce or data).
- `stuff/stuff-store.ts` - Stuff store by id (map store).


## Route files

```
routes/
├── app-routes-paths.tsx
├── app-routes.tsx
└── auth/
    ├── auth-routes.tsx
    └── routes/
        ├── routes/login-route.tsx
        └── routes/logout-route.tsx
```
- `routes/app-routes-paths.tsx` - Constants of application routes paths.
- `routes/app-routes.tsx` - Application routes list.
- `routes/auth/auth-routes.tsx` - Auth routes list (login, logout).
- `routes/auth/routes/login-route.tsx` - Login route class.
- `routes/auth/routes/logout-route.tsx` - Logout route class.
