"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const song_controller_1 = require("../controller/song.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/createsong", song_controller_1.createSong);
router.post("/updatesong/:id", song_controller_1.update);
router.delete("/deletesong/:id", song_controller_1.deleteSong);
router.get("/", song_controller_1.allSong);
exports.default = router;
