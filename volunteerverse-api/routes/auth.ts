import express, { Router } from "express";
import { Volunteer } from "../models/volunteer"; 

export const authRoutes: Router = express.Router()

authRoutes.get("/email", async function(request, response, next){
    try{
        const volunteer = await Volunteer.fetchVolunteerByEmail(request.body.email)
        return response.status(200).json({volunteer})
    } catch(error){
        next(error)
        return response.status(200).json({error: "error"})
    }
})

