export interface IFrontendService {
    getFrontend(): Function;
    transformRoute(routeConfig: any): any;
    injectStaticLinkTag(linkTag: {
        type: string;
        href: string;
    }): any;
    initialize(): void;
}
