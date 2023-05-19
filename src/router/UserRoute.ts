import express from "express";
const router = express.Router();

import { UserSignUp } from "../controller";

router.post("/signup", UserSignUp);

export { router as UserRoute };
