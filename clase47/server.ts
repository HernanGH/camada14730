import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

// this code works with std@0.100.0
// const s = serve({ port: 8080 });

// for await (const req of s ) {
//     req.respond({ body: 'hello deno serve'});
// }

// this code works with std@0.120.0
serve(() => new Response("Hello World\n"));

console.log("http://localhost:8000/");