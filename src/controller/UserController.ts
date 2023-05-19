import { Request, Response, NextFunction } from "express";
import { plainToClass } from "class-transformer";
import _ from "lodash";

/*
 * USER SECTION
 */

export const UserSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userInputs = req.body;

  const { tel, password, user_name, user_group } = userInputs;

  return res
    .header("x-auth-token", "signture")
    .header("access-control-expose-headers", "x-auth-token")
    .json({
      signture: "signture",
      otp: "otp",
      verified: userInputs,
      tel: userInputs,
    });
};
