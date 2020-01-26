const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const mapRouter = require('./routes/mapRoutes.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

mongoose.connect('mongodb+srv://ahlaw:sw0rdfish@cluster0-k57yj.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(mapRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));
