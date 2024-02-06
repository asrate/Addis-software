"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSong = exports.update = exports.allSong = exports.createSong = void 0;
const song_model_1 = __importDefault(require("../model/song.model"));
const createSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { artist, title, album, gerne } = req.body;
        const newSong = new song_model_1.default({ artist, title, album, gerne });
        yield newSong.save();
        res.status(200).json(newSong);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createSong = createSong;
const allSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const songs = yield song_model_1.default.find();
        res.status(200).json(songs);
    }
    catch (error) {
        console.log(error);
    }
});
exports.allSong = allSong;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const checkSong = yield song_model_1.default.findById(req.params.id);
    if (!checkSong) {
        return res.status(404).json("Song not found");
    }
    try {
        const updatesong = yield song_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatesong);
    }
    catch (error) {
        console.log(error);
    }
});
exports.update = update;
const deleteSong = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const checkSong = yield song_model_1.default.findById(req.params.id);
    if (!checkSong) {
        res.status(404).json("Song not found");
    }
    try {
        const delet = yield song_model_1.default.findByIdAndDelete(req.params.id);
        res.status(204).json({ success: "Song deleted" });
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteSong = deleteSong;
