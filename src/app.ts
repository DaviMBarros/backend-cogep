import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { handleErrors } from "./middlewares/handleErrors.middlewares";
import { userRouter } from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/users", userRouter);
// app.use("/activities");

app.use(handleErrors)
export default app;