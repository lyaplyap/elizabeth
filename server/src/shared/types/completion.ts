import { Message } from './message';

export type CompletionRequest = {
    modelUri: string;
    completionOptions: {
        stream?: boolean;
        temperature?: number;
        maxTokens?: number;
    };
    messages: Message[];
};

type Status =
    | 'ALTERNATIVE_STATUS_UNSPECIFIED'
    | 'ALTERNATIVE_STATUS_PARTIAL'
    | 'ALTERNATIVE_STATUS_TRUNCATED_FINAL'
    | 'ALTERNATIVE_STATUS_FINAL';

export type CompletionResponse = {
    result: {
        alternatives: {
            message: Message;
            status: Status;
        }[];
        usage: {
            inputTextTokens: string;
            completionTokens: string;
            totalTokens: string
        };
        modelVersion: string;
    };
};
