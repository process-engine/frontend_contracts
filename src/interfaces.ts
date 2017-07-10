export interface IFrontendService {
  getFrontend(): Function;
  transformRoute(routeConfig: any);
  injectStaticLink(linkTag: {
    type: string,
    href: string
  });
  initialize(): void;
}
