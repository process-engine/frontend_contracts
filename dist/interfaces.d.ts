export interface IFrontendService {
    getFrontend(): Function;
    initialize(): void;
}
export interface IServerSideRenderService {
    initialize(frontendConfig: any): void;
    render(res: any, req: any, next: any): Function;
}
