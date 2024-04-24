import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: ReactNode;
    size?: 's' | 'm' | 'l';
    view?: 'action' | 'clear';
    width?: 'auto' | 'max';
    align?: 'left' | 'center' | 'right';
};
