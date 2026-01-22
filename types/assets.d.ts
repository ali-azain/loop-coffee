declare module "*.png" {
    const value: string;
    export default value;
}

interface ImportMetaEnv {
    readonly BASE_URL: string;
    readonly GEMINI_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
