import { InputHTMLAttributes, ReactNode } from 'react';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    size?: 'm' | 'l';
};
