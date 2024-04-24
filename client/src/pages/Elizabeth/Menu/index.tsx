import React, { useMemo } from 'react';

import { Block } from '../../../shared/components/Block';
import { Button } from '../../../shared/components/Button';
import { Input } from '../../../shared/components/Input';
import { AddIcon, RestartIcon, SearchIcon, YandexGPTIcon } from '../../../shared/icons';

import { List } from './List';
import { Logo } from './Logo';
import { MenuProps } from './types';

import styles from './index.module.css';

export const Menu: React.FC<MenuProps> = ({ chats, selectChat, isActive }) => {
    const items = useMemo(
        () => chats.map((chat) => (
            {
                id: chat.id,
                title: chat.title,
                description: chat.description,
                icon: <YandexGPTIcon />
            }
        )),
        [chats]
    );

    return (
        <header className={styles.menu}>
            <Logo />
            <Block className={styles.libraries}>
                <Input
                    iconLeft={<SearchIcon />}
                    type="search"
                    placeholder="Search..."
                />
                <Button
                    icon={<RestartIcon />}
                    size="l"
                    width="max"
                    align="left"
                >
                    Clear all chats
                </Button>
                <List
                    items={items}
                    selectItem={selectChat}
                    isSelectedItem={isActive}
                />
                <Button icon={<AddIcon />} size="l" />
            </Block>
        </header>
    );
};
