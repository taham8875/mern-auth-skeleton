import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user.model.ts";

const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token: string | undefined = req.cookies.jwt;
  if (token) {
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);
      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

export { protect };
