import React from 'react';

import { Button } from '../../../../shared/components/Button';
import { Input } from '../../../../shared/components/Input';
import { SendIcon } from '../../../../shared/icons';

import styles from './index.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Input
                placeholder="Let the magic begin, Ask a question"
                iconRight={(
                    <Button
                        size="l"
                        icon={<SendIcon />}
                        view="clear"
                        className={styles.button}
                        aria-label="Send"
                    />
                )}
                className={styles.input}
                size="l"
            />
        </footer>
    );
};
