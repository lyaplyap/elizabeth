import React from 'react';

import { Message } from './Message';
import { MessagesProps } from './types';

import styles from './index.module.css';

export const Messages: React.FC<MessagesProps> = ({ messages }) => {
    return (
        <ul className={styles.messages}>
            {messages.map((message, index) => (
                <Message key={index} {...message} />
            ))}
        </ul>
    );
};
