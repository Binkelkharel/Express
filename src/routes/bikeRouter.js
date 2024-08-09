import { Router } from "express";

let bikeRouter = Router();

bikeRouter
  .route("/") //localhost:8000/bike
  .post(
    (req, res, next) => {
      console.log("i am middleware1");
      let error= new Error("iam own error")
      next(error);
    },
    (err,req, res, next) => {
      console.log("i am middleware2");
      console.log(err.message)
      next();
    },
    (req, res, next) => {
      console.log("i am middleware3");
    }
  )
  .get((req, res, next) => {
    req.name="binkel",
    req.age=23
  },(req, res, next)=>{
    console.log(req.name)
    console.log(req.age)
  }

)
  .patch((req, res, next) => {
    res.json("bike updated successfully");
  })
  .delete((req, res, next) => {
    res.json("bike deleted successfully");
  });

export default bikeRouter;

/* 
middleware
  function  => which has req,res,next access
  next is used to trigger next middleware



*/
