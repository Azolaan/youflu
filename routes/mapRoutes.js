const express = require('express');
const path = require('path');
const userModel = require('../models/user');
const app = express();

app.get('/map', async (req, res) => {
  const users = await userModel.find({});
  try {
    coords = [];
    users.forEach((user) => {
      coords.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: user["location"],
        },
        properties: {
          diseases: user["diseases"],
        },
      });
    });
    res.json(coords);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app;
