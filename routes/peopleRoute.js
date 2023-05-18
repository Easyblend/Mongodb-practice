const express = require("express");
const route = express.Router();
const personSchema = require("./models/peopleModel");

route.get("/", async (req, res) => {
  const person = await personSchema.find();
  res.status(200).send(person);
});

route.post("/", async (req, res) => {
  try {
    const { name, age } = req.body;
    const person = await personSchema.create({ name, age });
    person.save();
  } catch (error) {
    res.status(400).send(error);
  }
  res.send("Saved to database");
});

route.post("/", async (req, res) => {
  const person = await personSchema.find();
  res.status(200).send(person);
});

module.exports = route;
