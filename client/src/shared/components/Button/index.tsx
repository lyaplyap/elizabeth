import cn from 'classnames';
import React from 'react';

import { ButtonProps } from './types';

import styles from './index.module.css';

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    icon,
    size = 'm',
    view = 'action',
    width = 'auto',
    align = 'center',
    ...props
}) => {
    return (
        <button
            className={
                cn(
                    styles.button,
                    styles[`size__${size}`],
                    styles[`view__${view}`],
                    styles[`width__${width}`],
                    styles[`align__${align}`],
                    className
                )}
            {...props}
        >
            {Boolean(icon) && <span className={styles.icon}>{icon}</span>}
            {Boolean(children) && <span className={styles.text}>{children}</span>}
        </button>
    );
};
