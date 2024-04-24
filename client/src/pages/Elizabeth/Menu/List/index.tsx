import React from 'react';

import { Item } from './Item';
import { ListProps } from './types';

import styles from './index.module.css';

export const List: React.FC<ListProps> = ({ items, selectItem, isSelectedItem }) => {
    return (
        <div className={styles.container}>
            <h3 id="library-list-title" className={styles.title}>
                Chats
            </h3>
            <ul aria-labelledby="library-list-title" className={styles.list}>
                {items.map(({ icon, title, description, id }) => (
                    <Item
                        icon={icon}
                        title={title}
                        description={description}
                        key={id}
                        action={() => selectItem(id)}
                        selected={isSelectedItem(id)}
                    />
                ))}
            </ul>
        </div>
    );
};
