import nodemailer from 'nodemailer';
import { EmailAdapter, SendEmailData } from '../email-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '917764473b7da3',
    pass: '0a2239e5e6dc1c',
  },
});

export class NodemailerEmailAdapter implements EmailAdapter {
  async sendEmail({ subject, body }: SendEmailData) {
    await transport.sendMail({
      from: 'Equipe feedget <suporte@feedget.com>',
      to: 'Tiago Santos <tiagosan040@gmail.com>',
      subject,
      html: body,
    });
  }
}
