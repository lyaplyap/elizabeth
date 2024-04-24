import Markdown from 'markdown-to-jsx';
import React, { PropsWithChildren, useMemo } from 'react';

import { Text } from '../../../../../shared/components/Text';
import { UserIcon, AssistantIcon } from '../../../../../shared/icons';
import { Role } from '../../../../../shared/types';

import { MessageProps } from './types';

import styles from './index.module.css';

const TextBlock: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Text className={styles.text} weight="light">
            {children}
        </Text>
    );
};

const StrongTag: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Text as="strong" weight="bold">
            {children}
        </Text>
    );
};

export const Message: React.FC<MessageProps> = ({ role, text }) => {
    const iconMaps: Record<Role, JSX.Element | null> = useMemo(
        () => ({
            user: <UserIcon />,
            assistant: <AssistantIcon />,
            system: null
        }),
        []
    );

    return (
        <li className={styles.message}>
            <span className={styles.role}>
                {iconMaps[role]}
            </span>
            <Markdown 
                options={{
                    wrapper: TextBlock,
                    forceWrapper: true,
                    overrides: {
                        strong: StrongTag
                    }
                }}
            >
                {text}
            </Markdown>
        </li>
    );
}; 
