type YandexGPT = 'yandexgpt' | 'yandexgpt-lite' | 'summarization';

export type Model = {
    id: YandexGPT;
    stream?: boolean;
    temperature?: number;
    maxTokens?: number;
};
