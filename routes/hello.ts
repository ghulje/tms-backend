import HelloController from "@/app/controllers/HelloController";

export default {
    "hello": {
        GET: new HelloController().hello,
        PUT: new HelloController().hello
    },

    "hello/:name": {
        GET: new HelloController().helloName
    }
};