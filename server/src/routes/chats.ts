import { Router } from 'express';

import * as controllers from '../controllers/chat';

const router = Router();

router.get('/', controllers.getChats);
router.get('/:id', controllers.getChat);
router.post('/', controllers.createChat);
router.post('/:id/messages', controllers.createMessage);
router.delete('/:id', controllers.deleteChat);
router.delete('/:id/messages', controllers.clearChat);

export default router;
