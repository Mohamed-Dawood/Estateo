import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: 'Unauthorized - no token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decoded);

    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: 'Unauthorized - invalid token' });
    }

    console.log('req.userId', req.userId);
    console.log('decoded.userId', decoded.userId);

    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.log('Error in verifyToken', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
