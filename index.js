const jsonServer = require("json-server"); //importar el json server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3002; // se puede usar cualquier port

server.use(middlewares);
server.use(router);
server.use(port);