import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './db/connectDB.js';
import userRouter from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());
const allowedOrigins = [
  'http://localhost:5173', // your Vite dev server
  'https://estateo-two.vercel.app', // your deployed frontend
  'https://your-app.netlify.app', // optional
  'https://your-app.onrender.com', // optional
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // allow Postman, curl
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS policy: This origin is not allowed'));
      }
    },
    credentials: true, // allow cookies
  })
);
app.use(morgan('dev'));
const PORT = process.env.PORT || 3001;

app.use('/api/auth', userRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World! From Backend' });
});

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`App listening on ${PORT}...`);
    });
  } catch (error) {
    console.log('Failed to start the server:', error.message);
    process.exit(1);
  }
};

start();
