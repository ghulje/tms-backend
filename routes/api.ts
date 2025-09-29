import type {BunRequest} from "bun";
import ResponseHelper from "@/app/helpers/ResponseHelper";

export default {
    "/*": async (request: BunRequest) => {
        return new ResponseHelper().setMessage("Not Found").send();
    },

    "/api/hello": {
        GET: async (request: BunRequest) => {
            return new ResponseHelper().setData({
                message: "Hello, world!",
                method: "GET"
            }).send();
        },
        PUT: async (request: BunRequest) => {
            return new ResponseHelper().setData({
                message: "Hello, world!",
                method: "PUT"
            }).send();
        }
    },

    "/api/hello/:name": async (request: BunRequest) => {
        const name = request.params.name;
        return new ResponseHelper().setData({
            message: `Hello, ${name}!`,
        }).send();
    }
};