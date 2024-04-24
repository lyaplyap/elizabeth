import { CHATS_ROUTE, MESSAGES_ROUTE } from './constants';

export const createChatsRoute = (id?: string) => id ? `${CHATS_ROUTE}/${id}` : CHATS_ROUTE;

export const createMessagesRoute = (id: string) => `${createChatsRoute(id)}/${MESSAGES_ROUTE}`;
