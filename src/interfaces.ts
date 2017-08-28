export interface IFrontendService {
  getFrontend(): Function;
  transformRoute(routeConfig: any);
  start(): void;
  injectStaticLink(linkTag: {
    type: string,
    href: string
  });
  initialize(): void;
}
