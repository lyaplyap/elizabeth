import config from '../../config';
import { YANDEX_FOUNDATION_MODELS_URL } from '../constants';
import { CompletionRequest, CompletionResponse } from '../types';

import { createIamToken } from '.';

export const askAssistant = async (request: CompletionRequest) => {
    const { iamToken } = await createIamToken();
    const { yandexFolderId } = config;

    const rawResponse = await fetch(YANDEX_FOUNDATION_MODELS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${iamToken}`,
            'x-folder-id': yandexFolderId
        },
        body: JSON.stringify(request)
    });

    const response: CompletionResponse = await rawResponse.json();
    
    if (!rawResponse.ok) {
        throw response;
    }

    const { message } = response.result.alternatives[0];

    return message;
};
