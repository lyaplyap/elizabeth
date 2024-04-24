import { Item } from '../types';

export type ItemProps = Omit<Item, 'id'> & {
    action: () => void;
    selected?: boolean;
};
