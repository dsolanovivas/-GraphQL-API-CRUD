const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const { connectDb } = require("./db");

const app = express();
connectDb();

app.get("/", (req, res) => res.send("Bienvenido al API"));

module.exports = app;

async function start() {
  const apolloserver = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloserver.start();

  apolloserver.applyMiddleware({ app, path: "/api" });

  app.use((req, res, next) => {
    res.status(404).send("not found");
  });

  app.listen(4000, () => {
    console.log("Server on port ", 4000);
  });
}

start();
