import express from 'express'
import upload from '../Config/multerConfig.js'
import { certificate, getallcertificate } from '../Controllers/Homepagedynamic/certificate.js';
const certificateRouter=express.Router();
certificateRouter.post('/post', upload.single('image'), certificate)
certificateRouter.get('/getall',getallcertificate);
export default certificateRouter;