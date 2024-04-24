import api from '..';
import { Chat, ChatTemplate } from '../../shared/types';

import { createChatsRoute, createMessagesRoute } from './utils';

export const getChats = () => api.get<Chat[]>(createChatsRoute());

export const getChat = (id: string) => api.get<Chat>(createChatsRoute(id));

export const createChat = (template: ChatTemplate) => api.post<Chat>(createChatsRoute(), template);

export const createMessage = ({ id, text }: { id: string, text: string }) =>
    api.post<{ text: string }>(createMessagesRoute(id), { text });

export const deleteChat = (id: string) => api.delete(createChatsRoute(id));

export const clearChat = (id: string) => api.delete(createMessagesRoute(id));
