import {BunRequest} from "bun";
import BaseController from "@/app/controllers/BaseController";
import Response from "@/utils/Response";

export default class HelloController extends BaseController {
    public async hello(request: BunRequest) {
        return new Response().setData({
            message: "Hello, world!",
            method: request.method
        }).send();
    }

    public async helloName(request: BunRequest) {
        const body = await super.parse(request);

        return new Response().setData({
            message: `Hello, ${body.get("name")}!`,
        }).send();
    }
}