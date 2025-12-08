import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { connectDB } from './db/connectDB.js';
import userRouter from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());
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
