import song from "../model/song.model"
import express, { Request, Response } from 'express';
export const createSong = async (req:Request,res: Response)=>{
try {
    const{artist, title, album, gerne}=req.body
    const newSong = new song({artist, title, album, gerne})
    await newSong.save()
    res.status(200).json(newSong)
} catch (error) {
    console.log(error)
}
}
export const allSong = async (req: Request, res: Response)=>{
try {
    const songs = await song.find()
    res.status(200).json(songs)
} catch (error) {
    console.log(error)
}
}
export const update = async(req:Request, res:Response)=>{
    const checkSong = await song.findById(req.params.id);
    if(!checkSong){
        return res.status(404).json("Song not found")
    }
    try {
          const updatesong = await song.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatesong)
    } catch (error) {
        console.log(error)
    }
  

}
export const deleteSong= async (req: Request, res: Response)=>{
 const checkSong = await song.findById(req.params.id);
 if(!checkSong){
    res.status(404).json("Song not found")
 }
 try {
    const delet = await song.findByIdAndDelete(req.params.id);
    res.status(204).json({success:"Song deleted"})
 } catch (error) {
    console.log(error)
 }
}