# Authentication System - Complete Setup Guide

## 🚀 Quick Start

### Prerequisites

- Node.js v18+ installed
- MongoDB connection string in `.env` file (server)
- Two separate terminals

### Step 1: Start Backend Server

```bash
cd server
npm install  # if not already done
npm run dev
```

**Expected output:**

```
App listening on 3000...
```

### Step 2: Start Frontend Client

```bash
cd client
npm install  # if not already done
npm run dev
```

**Expected output:**

```
VITE v7.2.2 ready in XXX ms
Local: http://localhost:5174/
```

### Step 3: Open in Browser

```
http://localhost:5174
```

---

## 📁 Project Structure

```
Estateo/
├── server/
│   ├── controllers/
│   │   └── auth.controller.js     # Authentication logic
│   ├── models/
│   │   └── user.model.js          # User schema
│   ├── routes/
│   │   └── auth.route.js          # Auth endpoints
│   ├── middleware/
│   │   └── verifyToken.js         # JWT verification
│   ├── mailtrap/
│   │   └── emails.js              # Email templates
│   ├── index.js                   # Express server
│   └── .env                       # Environment variables
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── SignUp/
│   │   │   ├── SignIn/
│   │   │   ├── ForgotPassword/
│   │   │   ├── ResetPassword/
│   │   │   └── EmailVerification/
│   │   ├── services/
│   │   │   ├── api.js             # Axios instance
│   │   │   └── authAPI.js         # API methods
│   │   ├── context/
│   │   │   └── AuthContext.jsx    # Global auth state
│   │   ├── utils/
│   │   │   └── validation.js      # Form validation
│   │   └── App.jsx                # Main app with routes
│   └── package.json
│
└── Documentation/
    ├── AUTHENTICATION_SETUP.md    # This file
    ├── API_REFERENCE.md           # API endpoints
    ├── COLOR_PALETTE_REFERENCE.md # Color scheme
    └── COLOR_FIX_SUMMARY.md       # Recent updates
```

---

## 🔗 API Configuration

**Backend Endpoint Base URL:**

```
http://localhost:3000/api/auth
```

**Configuration File:** `client/src/services/api.js`

```javascript
const API_BASE_URL = 'http://localhost:3000/api/auth';
```

### Available Endpoints

| Method | Endpoint                 | Auth Required | Purpose                        |
| ------ | ------------------------ | ------------- | ------------------------------ |
| POST   | `/signup`                | ❌ No         | Register new user              |
| POST   | `/signin`                | ❌ No         | Login user                     |
| POST   | `/logout`                | ✅ Yes        | Logout user                    |
| POST   | `/verify-email`          | ❌ No         | Verify email with code         |
| POST   | `/forgot-password`       | ❌ No         | Request password reset         |
| POST   | `/reset-password/:token` | ❌ No         | Reset password with token      |
| GET    | `/check-auth`            | ✅ Yes        | Check if user is authenticated |
| GET    | `/`                      | ❌ No         | Get all users (admin)          |

---

## 📝 Authentication Pages

### 1. **Sign Up** (`/signup`)

- Register new account
- Real-time password strength indicator
- Email validation
- Password confirmation
- Automatically navigates to home after signup

**Features:**

- ✅ Name validation (2-50 characters)
- ✅ Email validation (standard email format)
- ✅ Password strength meter (5 levels)
- ✅ Password requirements display
- ✅ Confirm password matching
- ✅ Toast notifications for feedback
- ✅ Loading state while submitting

### 2. **Sign In** (`/signin`)

- Login with email and password
- Password visibility toggle
- Remember me option (optional)
- Forgot password link
- Auto-redirect on success

**Features:**

- ✅ Email validation
- ✅ Password validation
- ✅ Show/hide password toggle
- ✅ Error handling
- ✅ Loading state
- ✅ Toast notifications

### 3. **Forgot Password** (`/forgot-password`)

- Request password reset via email
- Email validation before sending
- Confirmation message shown
- Link to sign in page

**Features:**

- ✅ Email input with validation
- ✅ Send reset email to mailbox
- ✅ Success confirmation
- ✅ Option to return to sign in

### 4. **Reset Password** (`/reset-password/:token`)

- Set new password using reset token
- Password strength indicator
- Token validation
- Auto-redirect on success

**Features:**

- ✅ Password strength meter
- ✅ New password validation
- ✅ Confirm password matching
- ✅ Token verification
- ✅ Redirect to sign in after reset

### 5. **Email Verification** (`/verify-email`)

- Verify email with 6-digit code
- Code sent via email
- Resend code option
- Auto-redirect on success

**Features:**

- ✅ 6-digit numeric code input
- ✅ Code validation
- ✅ Resend code button
- ✅ Success confirmation
- ✅ Auto-redirect to home

---

## 🔐 Security Features

### Token Management

- **Type**: JWT (JSON Web Tokens)
- **Storage**: localStorage
- **Expiration**: Set by backend (typically 7 days)
- **Auto-refresh**: Via interceptors
- **Auto-logout**: On 401 response

### Form Validation

- **Client-side**: Before API call
- **Server-side**: Additional validation on backend
- **Real-time feedback**: As user types
- **Error messages**: Specific and helpful

### Password Requirements

- ✅ Minimum 8 characters
- ✅ At least one uppercase letter (A-Z)
- ✅ At least one lowercase letter (a-z)
- ✅ At least one number (0-9)
- ✅ At least one special character (@$!%\*?&)

### Email Security

- ✅ Email verification required after signup
- ✅ Password reset via secure token
- ✅ Token expiration (typically 1 hour)
- ✅ One-time use only

---

## 💾 Local Storage

### Data Stored

```javascript
{
  authToken: 'jwt_token_here',      // JWT token for API calls
  user: {
    _id: 'user_id',
    name: 'User Name',
    email: 'user@example.com',
    isEmailVerified: true,
    createdAt: '2025-12-09T...'
  }
}
```

### Clearing Storage

- On logout: Automatically clears `authToken` and `user`
- On token expiration: Automatically clears both
- Clearing manually: DevTools → Application → localStorage

---

## 🎨 Color Scheme

All authentication pages use the app's primary brand colors:

- **Primary Blue**: `#007bff` - Buttons, links, focus states
- **Dark Blue**: `#0056b3` - Hover states, gradients
- **Gradient**: `linear-gradient(135deg, #007bff 0%, #0056b3 100%)`
- **Error Red**: `#dc3545` - Validation errors
- **Success Green**: `#28a745` - Success messages

---

## 🧪 Testing Authentication

### Test Signup

1. Navigate to `/signup`
2. Enter details:
   - Name: `Test User`
   - Email: `test@example.com`
   - Password: `Password123!`
   - Confirm: `Password123!`
3. Click Sign Up
4. Check email for verification code
5. Navigate to `/verify-email`
6. Enter 6-digit code

### Test Signin

1. Navigate to `/signin`
2. Enter:
   - Email: `test@example.com`
   - Password: `Password123!`
3. Click Sign In
4. Check navbar for user info display

### Test Forgot Password

1. Navigate to `/forgot-password`
2. Enter registered email
3. Check email for reset link
4. Click link or copy token
5. Navigate to `/reset-password/{token}`
6. Enter new password
7. Confirm password
8. Click Reset Password
9. Auto-redirect to signin

### Test Email Verification

1. After signup, navigate to `/verify-email`
2. Check email for 6-digit code
3. Enter code
4. Click Verify
5. Auto-redirect to home

---

## 🛠️ Environment Variables (Server)

**File:** `server/.env`

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DB_URL=mongodb+srv://user:password@cluster.mongodb.net/dbname
DB_PASSWORD=your_password

# Authentication
JWT_SECRET_KEY=your_secret_key
COOKIE_EXPIRES_IN=7

# Email Service (Mailtrap)
MAILTRAP_TOKEN=your_token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/

# Client
CLIENT_URL=http://localhost:3000
```

---

## 🐛 Troubleshooting

### Problem: "Cannot connect to server"

**Solution:**

- Ensure backend is running: `npm run dev` in `/server`
- Check PORT in `.env` is 3000
- Verify no other app is using port 3000
- Command: `netstat -ano | findstr :3000`

### Problem: "CORS error"

**Solution:**

- Backend must have frontend origin in CORS allowlist
- Check `server/index.js` for allowed origins
- Ensure frontend URL matches (e.g., `http://localhost:5174`)

### Problem: "API endpoint not found"

**Solution:**

- Verify API_BASE_URL in `client/src/services/api.js` is correct
- Should be: `http://localhost:3000/api/auth`
- Check backend routes in `server/routes/auth.route.js`

### Problem: "Cannot save JWT token"

**Solution:**

- Check browser localStorage is not disabled
- Try incognito mode to test
- Clear localStorage and try again
- Check browser console for errors

### Problem: "Email not sending"

**Solution:**

- Verify Mailtrap credentials in `.env`
- Check MAILTRAP_TOKEN is correct
- Verify email inbox (check spam folder)
- Test with Postman to verify endpoint

### Problem: "Password reset token invalid"

**Solution:**

- Token expires after 1 hour
- Request new password reset
- Check token format in URL
- Verify token is still valid

---

## 📊 Complete User Flow

```
User Journey:
├── Signup
│   ├── Create account (email, name, password)
│   ├── Email verification (6-digit code)
│   └── Redirect to home
├── SignIn
│   ├── Login (email, password)
│   ├── Token saved to localStorage
│   └── Redirect to home
├── Use App
│   ├── Token included in API calls
│   ├── User info in context
│   └── Navbar shows user name
├── Forgot Password
│   ├── Request reset email
│   ├── Receive reset link
│   ├── Enter new password
│   └── Login with new password
└── Logout
    ├── Clear localStorage
    ├── Clear context
    └── Redirect to home
```

---

## 🚀 Deployment Checklist

### Before Production

- [ ] Update API_BASE_URL to production backend
- [ ] Set NODE_ENV=production in server
- [ ] Verify CORS origins for production domain
- [ ] Update CLIENT_URL in server .env
- [ ] Test all authentication flows
- [ ] Verify email service is working
- [ ] Check JWT token expiration settings
- [ ] Enable HTTPS for production

### Production URLs

- Backend: `https://your-api-domain.com/api/auth`
- Frontend: `https://your-app-domain.com`
- Update in: `client/src/services/api.js`

---

## 📞 Support

For issues or questions:

1. Check the troubleshooting section above
2. Review API_REFERENCE.md for endpoint details
3. Check COLOR_PALETTE_REFERENCE.md for styling info
4. Review COLOR_FIX_SUMMARY.md for recent changes

---

**Last Updated:** December 9, 2025  
**Status:** ✅ Fully Functional  
**Build Status:** ✅ Passing (1804 modules, 0 errors)
