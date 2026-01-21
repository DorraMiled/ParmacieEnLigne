export interface Product {
    _id?: string,
    name: string,
    shortDescription: string,
    description: string,
    Price: Number,
    discount: Number,
    images: { url: string }[],
    categoryId: string,
    brandId: string,
    isFeatured: boolean,
    isNewProduct: boolean,
}
