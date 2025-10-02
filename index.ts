import index from "@/public/index.html";
import api from "@/routes/api";

const server = Bun.serve({
    port: process.env.APP_PORT,

    routes: {
        "/": index,

        ...api
    },

    development: process.env.NODE_ENV !== "production" && {
        // Enable browser hot reloading in development
        hmr: true,

        // Echo console logs from the browser to the server
        console: true
    }
});

console.log(`🚀 Server running at ${server.url}`);
