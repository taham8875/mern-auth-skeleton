import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import { authUser } from "./controller/user.controller.ts";
import userRouter from "./routes/user.route.ts";
import { notFoundHandler, errorHandler } from "./middleware/error.middleware";

const port: String | Number = process.env.PORT || 5000;

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// If the request reaches this point, it means that the request was not handled by any of the routes.
app.use(notFoundHandler);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();
