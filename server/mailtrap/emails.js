import { transport, sender } from './mailtrap.config.js';
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from './emailTemplates.js';

export const sendVerificationEmail = async (email, verifyToken) => {
  const recipient = [email];
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

  try {
    const response = await transport.sendMail({
      from: sender,
      to: recipient,
      subject: 'Welcome to Auth Company',
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
