const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const authrouter = jsonServer.router("auth.json")
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);
// server.use(authrouter)

server.listen(port);