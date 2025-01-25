
import cloudinary from "../../Config/Cloudinary.js";
import fs from "fs";
import Qualityproduct from "../../Model/Quality/Products.js";
export const QualityProducts=async(req, res)=>{
    try{
        const {name, description ,typeofproduct }=req.body;
        const uploaded=await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        if(!uploaded)
        {
            return res.status(401).json({
                message:'Can not upload on cloudinary',
                success:false
            })
        }

        const created=await Qualityproduct.create({
            name:name,
            description: description,
            typeofproduct:typeofproduct,
            image:uploaded.secure_url

        })
        if(created)
        {
            return res.status(201).json({
                message:'Created successfully',
                created,
                success:true
            })
        }

        return res.status(401).json({
            message:' can not Created ',
           
            success:false
        })

    }
    catch(error)
    {

         return res.status(501).json({
            message:'Internal server error',
            success:false
         })
    }
}
export const getallqualityProducts=async(req,res)=>{
    try{
        const getall=await Qualityproduct.find({});
        if(!getall)
        {
            return res.status(401).json({
                message:"Can not get produtcs"
            })

            
        }
        return res.status(201).json(getall);
        

    }catch(error)
    {
        return res.status(501).json({
            message:'Internal server error'
        })
    }
}