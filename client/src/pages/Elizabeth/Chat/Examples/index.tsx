import React from 'react';

import { Text } from '../../../../shared/components/Text';

import { Example } from './Example';

import styles from './index.module.css';

const EXAMPLES = [
    'How to connect langchain to search engines with serpapi?',
    'How do I use GPT and wolframAlpha?',
    'How to load and index a pdf',
    'What is AgentExecutor and sequential chain?'
];

export const Examples: React.FC = () => {
    return (
        <div className={styles.examples}>
            <Text size="l" className={styles.title}>Examples</Text>
            <div className={styles.list}>
                {EXAMPLES.map((example, index) => (
                    <Example key={index}>{example}</Example>
                ))}
            </div>
        </div>
    );
};
