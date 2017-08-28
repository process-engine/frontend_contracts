export interface IFrontendService {
    getFrontend(): Function;
    transformRoute(routeConfig: any): any;
    start(): void;
    injectStaticLink(linkTag: {
        type: string;
        href: string;
    }): any;
    initialize(): void;
}
