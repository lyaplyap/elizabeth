export type Item = {
    id: string;
    icon: JSX.Element;
    title: string;
    description?: string;
};

export type ListProps = {
    items: Item[];
    selectItem: (id: string) => void;
    isSelectedItem: (id: string) => boolean;
};
