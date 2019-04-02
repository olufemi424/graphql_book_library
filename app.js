const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const graphqlHTTP = require("express-graphql");
const schema = require("./server/schema/schema");

const app = express();

//allow cross-origin requests
app.use(cors());

//connect to mongoDb
mongoose
  .connect(
    "mongodb+srv://olufemi:Mylove123@cluster0-qzgx0.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true, useCreateIndex: true }
  )
  .then(() => console.log("MongoDb Connected")) //promise return
  .catch(err => console.log("Not Connected to Database ERROR! ", err));

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`localhost:${PORT}/graphql`);
});
