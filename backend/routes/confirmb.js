import express, { application } from "express";
import { createconfirmb, getconfirmb, getUserBookings, getHotelBookings } from "../controllers/confirmb.js";


const router=express.Router();

router.post("/create",createconfirmb);

router.get("/",getconfirmb);

router.get("/getUserBookings/:userId",getUserBookings);
router.get("/getHotelBookings/:hotelId",getHotelBookings);

export default router