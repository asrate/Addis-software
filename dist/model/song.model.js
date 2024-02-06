"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const mongoose = require('mongoose');
const mongoose_1 = __importDefault(require("mongoose"));
const songSchema = new mongoose_1.default.Schema({
    title: String,
    artist: String,
    album: String,
    gerne: String
});
const song = mongoose_1.default.model('Song', songSchema);
exports.default = song;
