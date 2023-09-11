export type Order = {
    _id: string;
    address: string;
    latitude: number;
    longitude: number;
    moment: string;
    status: string;
    products: Product[];
    totalPrice: number;
}

export type Product = {
    _id: string;
    name: string;
    price: number;
    description: string;
    imageUri: string;
}