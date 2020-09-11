import { Router } from 'express';

import chatRoutes from './chat.routes';

const routes = Router();

routes.use('/chat', chatRoutes);

export default routes;
