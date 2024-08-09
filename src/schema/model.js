//define table name

import { model } from "mongoose";
import studentSchema from "./studentSchema.js";
import bookSchema from "./bookSchema.js";

export let Student=model("Student",studentSchema)
export let Book= model("Book",bookSchema)