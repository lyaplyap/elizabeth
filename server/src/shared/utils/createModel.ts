import { Model } from '../types';

export const createModel = (template: Model) => {
    const defaultModel: Partial<Model> = {
        stream: false,
        temperature: 0.6,
        maxTokens: 2000
    };

    const model: Model = {
        ...defaultModel,
        ...template
    };

    return model;
};
