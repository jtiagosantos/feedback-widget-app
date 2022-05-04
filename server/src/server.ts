import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();
const PORT = 3333;

app.use(express.json());

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '917764473b7da3',
    pass: '0a2239e5e6dc1c',
  },
});

app.post('/feedback/create', async (req: Request, res: Response) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: 'Equipe feedget <suporte@feedget.com>',
    to: 'Tiago Santos <tiagosan040@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do comentário: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('\n'),
  });

  return res.status(201).json({ data: feedback });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
