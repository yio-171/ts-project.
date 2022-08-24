export type Size = 'S'|'M'|'L'|'XL';

export type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Size
};

