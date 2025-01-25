import express from 'express';
import upload from '../Config/multerConfig.js';
import { GetHerosection, HeroSection } from '../Controllers/Homepagedynamic/HeroSection.js';

const HeroRouter=express.Router();
HeroRouter.post('/herovideo', upload.single('video'), HeroSection);
HeroRouter.get('/get',GetHerosection);
export default HeroRouter;