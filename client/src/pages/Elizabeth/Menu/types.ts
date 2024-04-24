import { Chat } from '../../../shared/types';

export type MenuProps = {
    chats: Chat[];
    selectChat: (id: string) => void;
    isActive: (id: string) => boolean;
};
