const mongoose = require("mongoose");

const User = new mongoose.Schema({
    nome: String,
    cognome: String,
    eta: Number,
    citta: String
});

module.exports = mongoose.model("user", User);