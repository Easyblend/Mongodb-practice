require("dotenv").config();
const express = require("express");
const connect = require("./configurations/db_Connector");
const peopleRoute = require("./routes/peopleRoute");

const app = express();

app.use(express.json());

connect();

app.use("/people", peopleRoute);

app.get("/", (req, res) => {
  res.status(200).send("<h1>Server on my fucking PC</h1>");
});

app.listen(process.env.SERVER_PORT || 4000, (obj) => {
  console.log(`Server running on port ${process.env.SERVER_PORT || 4000}`);
});
