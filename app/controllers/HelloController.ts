import {BunRequest} from "bun";
import Response from "@/utils/Response";

export default class HelloController {
    async hello(request: BunRequest) {
        return new Response().setData({
            message: "Hello, world!",
            method: request.method
        }).send();
    }

    async helloName(request: BunRequest) {
        const name = request.params.name;

        return new Response().setData({
            message: `Hello, ${name}!`,
        }).send();
    }
}