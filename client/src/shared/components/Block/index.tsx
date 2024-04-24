import cn from 'classnames';
import React from 'react';

import { BlockProps } from './types';

import styles from './index.module.css';

export const Block: React.FC<BlockProps> = ({ children, className, as: Tag = 'div' }) => {
    return (
        <Tag className={cn(styles.block, className)}>
            {children}
        </Tag>
    );
};
