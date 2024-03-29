import { Router } from 'express';

import SynchronizationController from './app/controllers/SynchronizationController';
import LoginController from './app/controllers/LoginController';

const routes = new Router();

routes.post('/sync/pull', SynchronizationController.pullChanges);
routes.post('/sync/push', SynchronizationController.pushChanges);
routes.post('/login', LoginController.login);

export default routes;
