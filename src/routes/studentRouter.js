import { Router } from "express";
import { Student } from "../schema/model.js";
import { createStudentController, deleteStudentController, readAllStudentController, readSpecificStudentController, updateStudentController } from "../controller/studentController.mjs";

let studentRouter=Router()

studentRouter
    .route("/")
    .post(createStudentController)
    .get(readAllStudentController)
studentRouter
    .route("/:id")
    .get(readSpecificStudentController)
    .patch(updateStudentController)
    .delete(deleteStudentController);

    
export default studentRouter