import { transport, sender, SKIP_EMAIL_IN_DEV } from './mailtrap.config.js';
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from './emailTemplates.js';

export const sendVerificationEmail = async (email, verifyToken) => {
  const recipient = [email];

  // Skip in development mode
  if (SKIP_EMAIL_IN_DEV) {
    console.log(`[DEV MODE] Verification email would be sent to: ${email}`);
    console.log(`[DEV MODE] Verification code: ${verifyToken}`);
    return { success: true, message: 'Dev mode: Email skipped' };
  }

  try {
    const response = await transport.sendMail({
      from: sender,
      to: recipient,
      subject: 'Verify your email',
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        '{verificationCode}',
        verifyToken
      ),
      category: 'Email Verification',
    });

    console.log('Email sent successfully', response);
  } catch (error) {
    console.log('Error sending verification', error);
    throw new Error(`Error sending verification email ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [email];

  // Skip in development mode
  if (SKIP_EMAIL_IN_DEV) {
    console.log(`[DEV MODE] Welcome email would be sent to: ${email}`);
    return { success: true, message: 'Dev mode: Email skipped' };
  }

  try {
    const response = await transport.sendMail({
      from: sender,
      to: recipient,
      subject: 'Welcome to Estateo',
      html: WELCOME_EMAIL_TEMPLATE.replace('{{user_name}}', name),
    });

    console.log('Email sent successfully', response);
  } catch (error) {
    console.error('Error sending welcome email', error);
    throw new Error(`Error sending welcome email ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [email];

  // Skip in development mode
  if (SKIP_EMAIL_IN_DEV) {
    console.log(`[DEV MODE] Password reset email would be sent to: ${email}`);
    console.log(`[DEV MODE] Reset URL: ${resetURL}`);
    return { success: true, message: 'Dev mode: Email skipped' };
  }

  try {
    const response = await transport.sendMail({
      from: sender,
      to: recipient,
      subject: 'Reset your password',
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetURL),
      category: 'Password Reset',
    });
    console.log('Password reset email sent successfully', response);
  } catch (error) {
    console.error('Error sending password reset email', error);
    throw new Error(`Error sending password reset email ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [email];

  // Skip in development mode
  if (SKIP_EMAIL_IN_DEV) {
    console.log(
      `[DEV MODE] Password reset success email would be sent to: ${email}`
    );
    return { success: true, message: 'Dev mode: Email skipped' };
  }

  console.log(email);
  try {
    const response = await transport.sendMail({
      from: sender,
      to: recipient,
      subject: 'Password reset successful',
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: 'Password Reset',
    });
    console.log('Password reset success email sent successfully', response);
  } catch (error) {
    console.error('Error sending password reset email', error);

    throw new Error(`Error sending password reset success email: ${error}`);
  }
};
