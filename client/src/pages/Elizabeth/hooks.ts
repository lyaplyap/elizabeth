import { useCallback, useEffect, useMemo, useState } from 'react';

import { Chat } from '../../shared/types';
import { getChat, getChats } from '../../transport/chats';

export const useChats = () => {
    const [chats, setChats] = useState<Chat[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchChats = async () => {
        try {
            const { data } = await getChats();

            setChats(data);
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    const [activeId, setActiveId] = useState<string | null>(null);
    
    const activeChat = useMemo(
        () => chats.find(({ id }) => id === activeId) || null,
        [chats, activeId]
    );
    
    const selectChat = useCallback(
        async (id: string) => {
            const wasFetched = Boolean(chats.find((chat) => chat.id === id)?.messages);

            if (!wasFetched) {
                try {
                    const { data } = await getChat(id);

                    setChats(chats.map((chat) => {
                        if ((chat.id) === id) {
                            return data;
                        }

                        return chat;
                    }));
                } catch (error) {
                    console.log(error);
                }
            }

            setActiveId(id);
        },
        [chats]
    );
    const isActive = useCallback((id: string) => id === activeId, [activeId]);

    useEffect(() => {
        fetchChats();
    }, []);

    return {
        chats,
        isLoading,
        activeChat,
        selectChat,
        isActive
    };
};
