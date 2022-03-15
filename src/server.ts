import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
// import 'reflect-metadata';
import './database';
import { router } from './routes';

export const app = express();
app.use(express.json());
app.use(router);


// eslint-disable-next-line no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message: 'Internal Server Error',
  });
});





app.listen(3333, () => {
  console.log('Server is running');
});