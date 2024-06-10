export interface IProduct {
    id: string,
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;

}

export interface AddProductForm {
    productName: string | null | undefined;
    price: number | null | undefined;
    imageUrl: string | null | undefined;
    releaseDate: string | null | undefined;
    description: string | null | undefined;
    productCode: string | null | undefined;
}