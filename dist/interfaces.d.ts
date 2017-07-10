export interface IFrontendService {
    getFrontend(): Function;
    transformRoute(routeConfig: any): any;
    injectStaticLink(linkTag: {
        type: string;
        href: string;
    }): any;
    initialize(): void;
}
