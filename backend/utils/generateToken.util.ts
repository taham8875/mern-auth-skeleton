import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (res: Response, id: string) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development", // Set to true in production
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
