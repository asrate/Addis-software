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