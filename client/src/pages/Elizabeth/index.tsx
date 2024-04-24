import React from 'react';

import { Chat } from './Chat';
import { Menu } from './Menu';
import { useChats } from './hooks';

import styles from './index.module.css';

export const Elizabeth: React.FC = () => {
    const { chats, activeChat, selectChat, isActive } = useChats();

    return (
        <div className={styles.app}>
            <Menu
                chats={chats}
                selectChat={selectChat}
                isActive={isActive}
            />
            {activeChat && <Chat chat={activeChat} />}
        </div>
    );
};
