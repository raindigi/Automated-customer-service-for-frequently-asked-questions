import 'express-async-errors';
import { errors } from 'celebrate';
import express, { Request, Response, NextFunction } from 'express';
import AppError from './errors/AppError';
import routes from './routes';

import './database';

const server = express();
server.use(express.json());
server.use(routes);

server.use(errors());

server.use(
  (err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response
        .status(err.statusCode)
        .json({ status: 'Error', messsage: err.message });
    }

    console.log(err);
    return response.status(500).json({
      status: 'Error',
      message: 'Internal server error',
    });
  },
);

server.listen(3333, () => {
  return console.log(
    'O server iniciou no seguinte endereço: http://localhost:3333',
  );
});
