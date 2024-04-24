import { Message } from './message';
import { Model } from './model';

export type Chat = {
    id: string;
    title: string;
    description?: string;
    instruction?: string;
    model: Model;
    messages: Message[];
};

export type ChatTemplate = Pick<Chat, 'title' | 'description' | 'instruction' | 'model'>;
