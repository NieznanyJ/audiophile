import { useEffect, useState } from "react";
import { DataType } from "./dataType";

type galleryType = {
    mobile: string;
    tablet: string;
    desktop: string;
};

function ProductImgBoard({ product }: { product: DataType }) {
    const [imageSrcs, setImageSrcs] = useState<string[]>([]);

    useEffect(() => {
        const loadImages = async () => {
            const srcs = await Promise.all(
                Object.values(product.gallery).map(
                    async (item: galleryType) => {
                        try {
                            const module = await import(`.${item.mobile}`);
                            return module.default;
                        } catch (error) {
                            console.error("Error loading image:", error);
                            return null;
                        }
                    }
                )
            );

            setImageSrcs(srcs.filter((src) => src !== null));
        };

        loadImages();
    }, [product]);
    return (
        <div className="product-image-board">
            {imageSrcs.map((src, index) => (
                <img key={index} src={src} alt={product.name} />
            ))}
        </div>
    );
}

export default ProductImgBoard;
