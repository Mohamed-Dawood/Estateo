import Nodemailer from 'nodemailer';
import { MailtrapTransport } from 'mailtrap';

import dotenv from 'dotenv';

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN || '103ee1b76d2951c1a0aa68dca8badd41';

export const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

export const sender = {
  address: 'noreply@estateo.com',
  name: 'Estateo Auth System',
};
export const recipients = ['mohamedbasyonidawood23@gmail.com'];

// Development mode - skip email sending
export const SKIP_EMAIL_IN_DEV = process.env.NODE_ENV === 'development';

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: 'You are awesome!',
//     text: 'Congrats for sending test email with Mailtrap!',
//     category: 'Integration Test',
//   })
//   .then(console.log, console.error);
