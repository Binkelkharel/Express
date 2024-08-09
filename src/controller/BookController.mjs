import { Book } from "../schema/model.js"

export let createBookController= async(req, res, next) => {
    // let data= req.body
   try {
    let  result = await Book.create(req.body)
    res.status(200).json({
      success:true,
      message:"book is created successfully",
      result:result,
    })
   } catch (error) {
    res.status(400).json({
      success:false,
      message:error.message
    })
   }
}

export let readAllBookController= async(req, res, next) => {
  // let data= req.body
 try {
  let  result = await Book.find({})
  res.status(200).json({
    success:true,
    message:"book is read successfully",
    result:result,
  })
 } catch (error) {
  res.status(400).json({
    success:false,
    message:error.message
  })
 }
}

export let readSpecificBookController= async(req, res, next) => {
  // let data= req.body
 try {
  let  result = await Book.findById(req.params.id)
  res.status(200).json({
    success:true,
    message:"book is read successfully",
    result:result,
  })
 } catch (error) {
  res.status(400).json({
    success:false,
    message:error.message
  })
 }
}

export let updatedBookController= async(req, res, next) => {
  // let data= req.body
 try {
  let  result = await Book.findByIdAndUpdate(req.body,req.params.id,{new:true})
  res.status(200).json({
    success:true,
    message:"book is read successfully",
    result:result,
  })
 } catch (error) {
  res.status(400).json({
    success:false,
    message:error.message
  })
 }
}

export let deleteBookController= async(req, res, next) => {
  // let data= req.body
 try {
  let  result = await Book.findByIdAndDelete(req.params.id)
  res.status(200).json({
    success:true,
    message:"book is deleted successfully",
    result:result,
  })
 } catch (error) {
  res.status(400).json({
    success:false,
    message:error.message
  })
 }
}
