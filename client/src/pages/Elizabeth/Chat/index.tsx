import React from 'react';

import { Block } from '../../../shared/components/Block';
import { Button } from '../../../shared/components/Button';
import { RestartIcon, YandexGPTIcon } from '../../../shared/icons';

import { Examples } from './Examples';
import { Footer } from './Footer';
import { Messages } from './Messages';
import { ChatProps } from './types';

import styles from './index.module.css';

export const Chat: React.FC<ChatProps> = ({ chat }) => {
    const { title, description, messages } = chat;
    const hasMessages = Boolean(messages?.length);

    return (
        <Block className={styles.chat}>
            <header className={styles.header}>
                <div className={styles.left}>
                    <span className={styles.icon}><YandexGPTIcon /></span>
                    <span className={styles.title}>{title}</span>
                    {Boolean(description) && (
                        <span className={styles.description}>
                            {description}
                        </span>
                    )}
                </div>
                <div className={styles.right}>
                    <Button
                        icon={<RestartIcon />}
                        view="clear"
                    >
                        Clear chat
                    </Button>
                </div>
            </header>
            <main className={styles.main}>
                {hasMessages ? <Messages messages={messages} /> : <Examples />}
            </main>
            <Footer />
        </Block>
    );
};
