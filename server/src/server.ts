import express, { Request, Response } from 'express';
import { prisma } from './prisma';

const app = express();
const PORT = 3333;

app.use(express.json());

app.post('/feedback/create', async (req: Request, res: Response) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return res.status(201).json({ data: feedback });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
