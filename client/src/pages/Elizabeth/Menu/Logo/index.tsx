import React from 'react';

import { AssistantIcon } from '../../../../shared/icons';

import styles from './index.module.css';

export const Logo: React.FC = () => {
    return (
        <h1 className={styles.logo}>
            <a href='/'>
                <AssistantIcon />
                <span className={styles.title}>
                    Elizabeth.
                </span>    
            </a>
        </h1>
    );
};
