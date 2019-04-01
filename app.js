const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./server/schema/schema");

const app = express();

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`localhost:${PORT}/graphql`);
});
