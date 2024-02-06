import {createSong }from "../controller/song.controller"
import  express  from "express"
const router = express.Router()
router.post("/createsong", createSong)
export default router;