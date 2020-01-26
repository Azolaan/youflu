const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const User = require('../models/user');
const router = express.Router();

const geocode = async (postalCode) => {
  const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
  const query = `?components=postal_code:${postalCode}&key=${process.env.API_KEY}`
  const response = await fetch(baseUrl + query);
  const json = await response.json();
  return json;
};

router.post('/auth/register', async (req, res) => {
  const { userid, password, postalCode } = req.body;
  
  try {
    const response = await geocode(postalCode);
    const { lat, lng } = response['results'][0]['geometry']['location'];
    const location = {
      type: 'Point',
      coordinates: [lng, lat],
    };
    const user = new User({
      userid,
      password,
      location,
    });
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
