import cors from 'cors';
import express from 'express';

import { errorMiddleware } from './middlewares/error';
import chatsRoutes from './routes/chats';
import { createCORSConfig } from './shared/utils';

export const createApp = () => {
    const app = express();

    app.use(express.json());
    app.use(cors(createCORSConfig()));

    app.use('/api/chats', chatsRoutes);
    app.use(errorMiddleware);

    return app;
};
