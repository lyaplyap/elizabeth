import { Schema, model } from 'mongoose';

import { YANDEX_GPT } from '../shared/constants';
import { Chat } from '../shared/types';

const schema = new Schema<Chat>({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: String,
    instruction: String,
    model: {
        id: {
            type: String,
            enum: YANDEX_GPT,
            required: true
        },
        stream: Boolean,
        temperature: Number,
        maxTokens: Number
    },
    messages: [{
        text: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['system', 'assistant', 'user'],
            required: true
        }
    }]
});

export default model<Chat>('Chat', schema);
