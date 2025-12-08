import express from 'express';
import {
  getALLUsers,
  signup,
  signin,
  logout,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
} from '../controllers/auth.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/check-auth', verifyToken, checkAuth);
router.get('/', getALLUsers);

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);

router.post('/verify-email', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

export default router;
