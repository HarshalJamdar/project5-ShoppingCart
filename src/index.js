const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
})
.then(() => console.log("MongoDb is connected..."))
.catch(error => console.log(error));

app.use("/", route);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Express app running on port " + PORT);
});
