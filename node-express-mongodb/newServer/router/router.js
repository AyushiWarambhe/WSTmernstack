import express from "express";
import { home1,anotherHome } from "../controller/controller.js";

let router = express.Router()

router.get("/", home1)
router.get("/home", anotherHome)

export default router