import { Request, Response } from 'express';

import { createChatDTO } from '../dtos';
import Chat from '../models/Chat';
import { IncompleteData, NotFound } from '../shared/errors';
import { Chat as TChat, ChatTemplate } from '../shared/types';
import {
    askAssistant,
    createCompletion,
    createController,
    createId,
    createModel,
    createPrompt,
} from '../shared/utils';

export const getChats = createController(
    async (_: Request, response: Response) => {
        const chats = await Chat.find({}, { messages: 0 });
        const chatDTOs = chats.map((chat) => createChatDTO(chat));

        response.json(chatDTOs);
    }
);

export const getChat = createController(
    async (request: Request, response: Response) => {
        const { id } = request.params;
        const document = await Chat.findOne({ id });

        if (!document) {
            throw new NotFound('Chat not found');
        }

        const chatDTO = createChatDTO(document);

        response.json(chatDTO);
    }
);

export const createChat = createController(
    async (
        request: Request<unknown, TChat, ChatTemplate>,
        response: Response<TChat>,
    ) => {
        const { title, description, instruction, model } = request.body;
        const id = createId();

        if (!title || !model.id) {
            throw new IncompleteData('Necessary parameters were not passed');
        }

        const chat: TChat = {
            id,
            title,
            description,
            instruction,
            model: createModel(model),
            messages: []
        };
    
        await Chat.create(chat);

        response.json(chat);
    }
);

export const createMessage = createController(
    async (
        request: Request<{ id: string }, { text: string }, { text: string }>,
        response: Response<{ text: string }>
    ) => {
        const { id } = request.params;
        const { text: prompt } = request.body;

        if (!id || !prompt) {
            throw new IncompleteData('Necessary parameters were not passed');
        }

        const chat = await Chat.findOne({ id });

        if (!chat) {
            throw new NotFound('Chat not found');
        }

        const userMessage = createPrompt(prompt, 'user');

        const completion = createCompletion({ chat, prompt });
        const assistantMessage = await askAssistant(completion);

        // Saving the generated messages
        chat.messages.push(userMessage, assistantMessage);
        await chat.save();

        response.json({ text: assistantMessage.text });
    }
);

export const deleteChat = createController(
    async (request: Request, response: Response) => {
        const { id } = request.params;

        const chat = await Chat.findOne({ id });

        if (!chat) {
            throw new NotFound('Chat not found');
        }

        await Chat.findByIdAndDelete(chat._id);

        response.status(204).json();
    }
);

export const clearChat = createController(
    async (request: Request, response: Response) => {
        const { id } = request.params;

        const chat = await Chat.findOne({ id });

        if (!chat) {
            throw new NotFound('Chat not found');
        }

        await Chat.findByIdAndUpdate(chat._id, { messages: [] });

        response.status(204).json();
    }
);
