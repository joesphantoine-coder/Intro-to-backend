import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config({
  path: "./.env",
});

const startServer = async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.error("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port :${process.env.PORT}`);
    });
  } catch (err) {
    console.log("MongoDB connectionfailed!!", err);
  }
};

startServer();
