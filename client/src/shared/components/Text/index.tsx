import cn from 'classnames';
import React from 'react';

import { TextProps } from './types';

import styles from './index.module.css';

export const Text: React.FC<TextProps> = ({
    children,
    className,
    font = 'primary',
    size = 'm',
    color = 'primary',
    weight = 'regular',
    as: Tag = 'span'
}) => {
    return (
        <Tag className={cn(
            styles.text,
            styles[`font__${font}`],
            styles[`size__${size}`],
            styles[`color__${color}`],
            styles[`weight__${weight}`],
            className
        )}>
            {children}
        </Tag>
    );
};
