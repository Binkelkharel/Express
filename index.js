import express, { json } from "express";
import bikeRouter from "./src/routes/bikeRouter.js";
import connectToMongoDb from "./src/connectToDb/connectToMongoDb.js";
import studentRouter from "./src/routes/studentRouter.js";
import bookRouter from "./src/routes/bookRouter.js";

let expressApp = express();
expressApp.use(json()); // to make system capable to get json data // always place this code just top level

connectToMongoDb();

expressApp.listen(8000, () => {
  console.log("application is running at port 8000");
});

expressApp.use("/bike", bikeRouter);
expressApp.use("/student",studentRouter)
expressApp.use("/book",bookRouter)
