export default class Router {
    private basePath: string = "";

    public prefix(basePath: string): Router {
        this.basePath = basePath;

        return this;
    }

    public group(routes: Record<string, any>): Record<string, any> {
        const newRoutes: Record<string, any> = {};

        for (const path in routes) {
            const fullPath = this.joinPaths(this.basePath, path);
            newRoutes[fullPath] = routes[path];
        }

        return newRoutes;
    }

    private joinPaths(base: string, path: string) {
        base = base.replace(/\/+$/, "");
        path = path.replace(/^\/+/, "");

        return "/" + [base, path].filter(Boolean).join("/");
    }
}
