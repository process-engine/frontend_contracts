export interface IFrontendService {
    getFrontend(): Function;
    initialize(): void;
}
export interface IServerSideRenderService {
    initialize(): void;
    render(frontendProvider?: IFrontendProvider): Function;
}
export interface IFrontendProvider {
    initialize(): void;
}
