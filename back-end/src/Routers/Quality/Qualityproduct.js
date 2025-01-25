import express from 'express'
import upload from '../../Config/multerConfig.js';
import { getallqualityProducts, QualityProducts } from '../../Controllers/Quality/QualityProducts.js';
const QualityProductRouter=express.Router();
QualityProductRouter.post('/create', upload.single('image'), QualityProducts);
QualityProductRouter.get('/getall',getallqualityProducts);
export default  QualityProductRouter;