import TestController from "@/app/controllers/TestController";
import Router from "@/utils/Router";

export default new Router().prefix("test").group({
    "get": {
        GET: new TestController().get
    },
    "add": {
        POST: new TestController().add
    }
});