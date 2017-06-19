import * as path from "path";
import { RoutePath } from "./route-path";

const KEY_VALUE = "key:";

type RoutePathsObject<Keys> = {
    [P in keyof Keys]: RoutePath;
};

/**
 * Copy route path value from current object by specified name.
 *
 * @param {string} name - Name of target value from current object.
 */
export function CopyRoutePathFromName(name: string): string {
    return KEY_VALUE + name;
}

/**
 * Build object with routes paths.
 *
 * @param {string} prefix - Path prefix (basePath).
 * @param {[key: string]: string} paths - Dictionary list of paths.
 */
export function BuildRoutesPaths<TObject extends { [key: string]: string }>(
    paths: TObject,
    prefix: string = "/"
): RoutePathsObject<TObject> & RoutePath {

    const newPaths = new RoutePath(prefix) as RoutePathsObject<TObject> & RoutePath;
    Object.keys(paths).forEach(key => {
        let value = paths[key];
        const keyValuePrefixIndex = value.indexOf(KEY_VALUE);
        if (keyValuePrefixIndex !== -1) {
            const resolvedKey = value.substr(KEY_VALUE.length);
            value = paths[resolvedKey];
            if (value == null) {
                throw new Error(`BuildRoutePaths: Cannot find item with specified key "${resolvedKey}" for name "${key}". ` +
                    `Check 'CopyRoutePathFromName("${resolvedKey}")' method argument value.`);
            }
        }
        newPaths[key] = new RoutePath(path.join(prefix, value));
    });
    return newPaths;
}
