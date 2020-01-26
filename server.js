require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const authRouter = require('./routes/authRoutes.js');
const mapRouter = require('./routes/mapRoutes.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
});

app.use(authRouter);
app.use(mapRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
