export default class ResponseHelper {
    protected data: any;
    protected message: string;
    protected status: number;

    public constructor() {
        this.data = null;
        this.message = "Success";
        this.status = 200;
    }

    public setData(data: any): ResponseHelper {
        this.data = data;

        return this;
    }

    public setMessage(message: string): ResponseHelper {
        this.message = message;

        return this;
    }

    public setStatus(status: number): ResponseHelper {
        this.status = status;

        return this;
    }

    public send(): any {
        return Response.json({
            data: this.data,
            message: this.message,
            status: this.status
        }, {
            status: this.status
        });
    }

    public stream(options: ResponseInit = {}): any {
        return new Response(Bun.file(this.data), {
            ...options,
            status: this.status
        });
    }
}