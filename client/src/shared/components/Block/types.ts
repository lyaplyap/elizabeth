import { ReactNode } from 'react';

export type BlockProps = {
    children: ReactNode;
    className?: string;
    as?: 'div' | 'main';
};
