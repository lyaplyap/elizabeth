import { Role, Message } from '../types';

export const createPrompt = (text: string, role: Role): Message => ({ text, role });

type Options = {
    instructionPrompt?: string;
    context: Message[];
    lastPrompt: string;
};

export const createPrompts = ({ instructionPrompt, context, lastPrompt }: Options) => {
    const result: Message[] = [];

    if (instructionPrompt) {
        result.push(createPrompt(instructionPrompt, 'system'));
    }

    result.push(...context);

    const lastMessage = createPrompt(lastPrompt, 'user');

    result.push(lastMessage);

    return result;
};
