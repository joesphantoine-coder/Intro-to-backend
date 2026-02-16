import express from "express";

const app = express();

app.use(express.json());

import useRouter from "./routes/user.route.js";

app.use("/");

export default app;
