import { ReactNode } from 'react';

export type TextProps = {
    children?: ReactNode;
    className?: string;
    font?: 'primary' | 'secondary';
    size?: 'xs' | 's' | 'm' | 'l';
    color?: 'primary' | 'secondary';
    weight?: 'light' | 'regular' | 'medium' | 'bold';
    as?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong'
};
