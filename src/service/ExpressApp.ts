import express, { Application, Request } from "express";
import bodyParser from "body-parser";
import path from "path";
import { UserRoute } from "../router";
import { error } from "../middleware/error";
const cors = require("cors");

export default async (app: Application) => {
  app.use(bodyParser.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/users", UserRoute);
  app.use(error);

  return app;
};
