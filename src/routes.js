import { Router } from 'express';

import SynchronizationController from './app/controllers/SynchronizationController';

const routes = new Router();

routes.post('/sync/pull', SynchronizationController.pullChanges);
routes.post('/sync/push', SynchronizationController.pushChanges);

export default routes;
