import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB = process.env.DB_URL.replace('<db_password>', process.env.DB_PASSWORD);

export const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log('DB Connection Success!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};
