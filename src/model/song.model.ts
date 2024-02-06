// const mongoose = require('mongoose');
import mongoose from "mongoose";
const songSchema= new mongoose.Schema
({
     title: String,
    artist: String,
    album: String,
    gerne: String
})

   
  const song = mongoose.model('Song', songSchema)
  export default song;