import { Document, Types } from 'mongoose';

import { Chat } from '../shared/types';
import { clearDocument, deepClone } from '../shared/utils';

type ChatDocument = Document<unknown, unknown, Chat> & Chat & {
    _id: Types.ObjectId;
}

type ChatDTO = Chat;

export const createChatDTO = (document: ChatDocument) => {
    const chatDTO: ChatDTO = clearDocument(deepClone(document));

    return chatDTO;
};
