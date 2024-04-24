import config from '../../config';
import { YANDEX_GPT } from '../constants';

export const createModelUri = (id: string) => {
    const { yandexFolderId } = config;
    
    if (YANDEX_GPT.includes(id)) {
        return `gpt://${yandexFolderId}/${id}/latest`;
    }

    return `ds://${id}`;
};
