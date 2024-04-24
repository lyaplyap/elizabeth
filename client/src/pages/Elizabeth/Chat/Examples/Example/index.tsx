import React from 'react';

import { Button } from '../../../../../shared/components/Button';

import { ExampleProps } from './types';

import styles from './index.module.css';

export const Example: React.FC<ExampleProps> = ({ children }) => {
    return (
        <Button className={styles.example} align="left">
            {children}
        </Button>
    );
};
