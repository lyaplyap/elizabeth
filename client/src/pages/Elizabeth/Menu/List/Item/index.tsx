import cn from 'classnames';
import React from 'react';

import { ItemProps } from './types';

import styles from './index.module.css';

export const Item: React.FC<ItemProps> = ({ icon, title, description, action, selected = false }) => {
    return (
        <li
            className={cn(styles.item, { [styles.selected]: selected })}
            onClick={action}
            title={title}
            aria-label={title}
        >
            <button>
                <div className={styles.icon}>{icon}</div>
                <div className={styles.content}>
                    <span className={styles.title}>
                        {title}
                    </span>
                    {Boolean(description) && (
                        <span className={styles.caption}>
                            {description}
                        </span>
                    )}
                </div>
            </button>
        </li>
    );
};
