export interface IFrontendService {
  getFrontend(): Function;
  transformRoute(routeConfig: any);
  initialize(): void;
}
