export {};

declare global {
    const ModelNotFoundException: typeof import("@/app/exceptions/ModelNotFoundException").default;
}