import { Student } from "../schema/model.js ";

export let createStudentController= async(req, res, next) => {
    // let data=req.body;

   try {
    let result=await Student.create(req.body)//student created successfully
    res.status(200).json({
      success:true,
      message:"student created successfully",
      result:result,
   })
  }
    catch (error) {
    res.status(200).json({
      success:false,
      message:error.message
    });
  }
}

export const readAllStudentController=async(req,res,next)=>{

try {
    let result = await Student.find({})
    res.status(200).json({
      success:true,
      message:"student read successfully",
      result:result
    });
  
} catch (error) {
  res.status(400).json({
    success:false,
    message:error.message
  })
}  

}

export const readSpecificStudentController=async(req,res,next)=>{
try {
    let result = await Student.findById(req.params.id)
    res.status(200).json({
      success:true,
      message:"student read successfully",
      result:result
    });
  
} catch (error) {
  res.status(400).json({
    success:fasle,
  message:error.message
  });
}

}

export const updateStudentController=async(req,res,next)=>{
try {
    let result= await Student.findByIdAndUpdate(req.params.id,req.body,{
      new:true})
    res.status(200).json({
      success:true,
      message:"student updated successfully",
      result:result
    });
  }catch (error) {
      res.status(400).json({
        success:false,
      message:error.message
      });
    }
}

export const deleteStudentController=async(req,res,next)=>{
try {
    let result=await Student.findByIdAndDelete(req.params.id)
    res.status(200).json({
      success:true,
      message:"student deleted successfully",
      result:result
    });
} catch (error) {
  res.status(400).json({
    success:false,
  message:error.message
  });
  
}}