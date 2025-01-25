import aboutusinhomepage from "../../Model/homepage/About.js";
import cloudinary from "../../Config/Cloudinary.js";
import fs from "fs";

export const Aboutinhome = async (req, res) => {
  try {
    const { header, content } = req.body;
    console.log("header", header);

    // Check if a document already exists
    const existingDocument = await aboutusinhomepage.findOne();
    // Update the existing document
    const uploaded = await cloudinary.uploader.upload(req.file.path);
    fs.unlinkSync(req.file.path);
    if (existingDocument) {
      const updated = await aboutusinhomepage.findByIdAndUpdate(
        existingDocument._id,
        { header, content },
        { image: uploaded.secure_url },
        { new: true } // Return the updated document
      );

      if (updated) {
        return res.status(200).json({
          message: "Updated successfully",
          document: updated,
        });
      }

      return res.status(400).json({
        message: "Could not update the document",
        success: false,
      });
    }

    // Create a new document if none exists
    const created = await aboutusinhomepage.create({
       header :header,
       content:content,
       image: uploaded.secure_url
    });

    if (created) {
      return res.status(201).json({
        message: "Uploaded successfully",
        document: created,
      });
    }

    return res.status(400).json({
      message: "Could not create the document",
      success: false,
    });
  } catch (error) {
    console.error("Error in Aboutinhome:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const GetAboutUs=async(req,res)=>{
  try{
    const getaboutus=await aboutusinhomepage.findOne();
     if(!getaboutus)
     {
      return res.status(404).json({
        message:'Can not get about us',
        success:false
      })
     }
     return res.status(201).json(getaboutus);
  }catch(error)
  {
    return res.status(501).json({
      message:'Internal server error',
      success:false
    })
  }
}