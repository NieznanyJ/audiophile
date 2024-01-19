type ImageType = {
    mobile: string;
    tablet: string;
    desktop: string;
};

type IncludesType = {
    quantity: number;
    item: string;
};

type GalleryType = {
    first: ImageType;
    second: ImageType;
    third: ImageType;
};

type OthersType = {
    slug: string;
    name: string;
    image: ImageType;
    category: string;
};

export type DataType = {
    id: number;
    slug: string;
    name: string;
    image: ImageType;
    category: string;
    categoryImage: ImageType;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: IncludesType[];
    gallery: GalleryType;
    others: OthersType[];
};
