import {ErrorLike} from "bun";
import Response from "@/utils/Response";
import {defineValue} from "@/utils/utils";
import {ValidationError} from "objection";

export default class ExceptionHandler {
    public handle(error: ErrorLike): globalThis.Response {
        if (error instanceof ModelNotFoundException) return new Response()
            .setMessage(error.message)
            .setStatus(404)
            .send();

        if (error instanceof ValidationError) return new Response()
            .setMessage(error.message)
            .setStatus(400)
            .send();

        return new Response()
            .setMessage(defineValue(error.message, "Internal server error."))
            .setStatus(500)
            .send();
    }
}