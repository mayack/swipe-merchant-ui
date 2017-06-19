import * as path from "path";
import { LocationDescriptorObject } from "history";

export class RoutePath {
    constructor(private originPath: string) {
        this.name = this.parseNameFromPath(this.originPath);
    }

    private name: string;

    private pathsWithParamsInstance: { [params: string]: RoutePath } = {};

    private parseNameFromPath(pathname: string): string {
        const pathsList = pathname.split(path.sep);
        return pathsList[pathsList.length - 1];
    }

    public get Path(): string {
        return this.originPath;
    }

    public toString = (): string => this.originPath;

    public toLocationObject = (descriptor?: LocationDescriptorObject): LocationDescriptorObject => ({
        ...descriptor,
        pathname: this.originPath
    })

    public getParsedName(): string {
        return this.name;
    }

    public append = (...params: string[]): RoutePath => {
        const paramsString = params.join(path.sep);
        if (this.pathsWithParamsInstance[paramsString] == null) {
            this.pathsWithParamsInstance[paramsString] = new RoutePath(path.join(this.originPath, paramsString));
        }
        return this.pathsWithParamsInstance[paramsString];
    }
}
