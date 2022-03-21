export interface IComment {
    id: string;
    date: number;
    comment?: string,
    name: string,
    email: string,
    website?: string,
    category?: string;
    radio?: string;
    checkboxes?: string[];
};