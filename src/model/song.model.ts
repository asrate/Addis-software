const mongoose = require('mongoose');
const songSchema= new mongoose.Schema
({
     title: String,
    artist: String,
    album: String,
    genre: String
})

   
  const song = mongoose.model('Song', songSchema)
  export default song;