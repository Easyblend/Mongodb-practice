const express = require("express");
const route = express.Router();
const personSchema = require("./models/peopleModel");

route.get("/", async (req, res) => {
  const person = await personSchema.find();
  res.status(200).send(person);
});

module.exports = route;
