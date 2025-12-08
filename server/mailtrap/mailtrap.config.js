import Nodemailer from 'nodemailer';
import { MailtrapTransport } from 'mailtrap';

import dotenv from 'dotenv';

dotenv.config();

const TOKEN = '103ee1b76d2951c1a0aa68dca8badd41';
// const TOKEN = process.env.MAILTRAP_TOKEN;
// console.log(process.env.MAILTRAP_TOKEN);

export const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

export const sender = {
  address: 'hello@demomailtrap.com',
  name: 'Mailtrap Test',
};
export const recipients = ['mohamedbasyonidawood23@gmail.com'];

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: 'You are awesome!',
//     text: 'Congrats for sending test email with Mailtrap!',
//     category: 'Integration Test',
//   })
//   .then(console.log, console.error);
