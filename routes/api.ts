import Response from "@/utils/Response";
import hello from "@/routes/hello";
import Router from "@/utils/Router";

export default {
    "/*": new Response().setMessage("Not Found").send(),

    ...new Router().prefix("api").group({
        ...hello
    })
};