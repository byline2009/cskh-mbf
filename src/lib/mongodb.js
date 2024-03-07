import mongoose from "mongoose";
export const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://byline2010:8iUWNqthZZpZYHzx@cluster0.ctneqxe.mongodb.net/authapp"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
