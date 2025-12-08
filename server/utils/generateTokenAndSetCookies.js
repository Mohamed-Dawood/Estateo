import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookies = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '7d',
  });

  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
  };

  res.cookie('token', token, cookieOptions);

  return token;
};
