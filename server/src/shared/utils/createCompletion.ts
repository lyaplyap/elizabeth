import { Chat , CompletionRequest } from '../types';

import { clearDocument, createModelUri, createPrompts, deepClone } from '.';

type Options = {
    chat: Chat;
    prompt: string;
};

export const createCompletion = ({ chat, prompt }: Options) => {
    const { instruction, model, messages } = chat; 
    const { id: modelId, ...completionOptions } = model;

    const completion: CompletionRequest = {
        modelUri: createModelUri(modelId),
        completionOptions,
        messages: createPrompts({
            instructionPrompt: instruction,
            context: messages,
            lastPrompt: prompt
        })
    };

    return clearDocument(deepClone(completion));
};
