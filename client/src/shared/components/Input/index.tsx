import cn from 'classnames';
import React from 'react';

import { InputProps } from './types';

import styles from './index.module.css';

export const Input: React.FC<InputProps> = ({
    className,
    iconLeft,
    iconRight,
    size = 'm',
    ...props
}) => {
    return (
        <span className={cn(styles.inputContainer, styles[`size__${size}`], className)}>
            {Boolean(iconLeft) && <span className={styles.icon}>{iconLeft}</span>}
            <input className={styles.input} {...props} />
            {Boolean(iconRight) && <span className={styles.icon}>{iconRight}</span>}
        </span>
    );
};
