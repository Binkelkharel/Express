import { Router } from "express";
import { createBookController, deleteBookController, readAllBookController, readSpecificBookController, updatedBookController } from "../controller/BookController.mjs";

let bookRouter=Router()

bookRouter
    .route("/")
    .post(createBookController)
    .get(readAllBookController)
bookRouter
    .route("/:id")
    .get(readSpecificBookController)
    .patch(updatedBookController)
    .delete(deleteBookController);

export default bookRouter