export type Role = 'system' | 'assistant' | 'user';

export type Message = {
    role: Role;
    text: string;
};
