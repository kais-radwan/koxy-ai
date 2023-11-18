Bun.serve({

    port: 9999,

    fetch (req) {

        console.log(req);
        return new Response("Hello");

    }

})