import fastify from "fastify";

const app = fastify();

app.get("/hello", async () => {
  return "Hello World";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("🚀 HTTP server running on port http://localhost:3333");
  });
