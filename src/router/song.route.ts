import {createSong, allSong, update, deleteSong }from "../controller/song.controller"
import  express  from "express"
const router = express.Router()
router.post("/createsong", createSong)
router.post("/updatesong/:id", update)
router.delete("/deletesong/:id", deleteSong)
router.get("/", allSong)

export default router;