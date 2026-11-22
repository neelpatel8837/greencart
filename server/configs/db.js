import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    console.log("Connecting to MongoDB...");

    await mongoose.connect(uri); // 
    console.log("Database connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default connectDB;
