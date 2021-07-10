const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://Alex:Alex1234@cluster0.o64qy.mongodb.net/songsDB", { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

    
const songSchema = {
    title: String,
    genre: String,
    year: String
}

const song = mongoose.model("Song", songSchema);

app.get('/songs', (req,res) => {
    song.find().then(songs => res.json(songs));
})

app.listen(port,function() {
    console.log("express is running");
})