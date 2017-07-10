export interface IFrontendService {
    getFrontend(): Function;
    transformRoute(routeConfig: any): any;
    initialize(): void;
}
