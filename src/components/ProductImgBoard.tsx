import { useEffect, useState } from "react";
import { DataType } from "./dataType";

function ProductImgBoard({ product }: { product: DataType }) {
    const [imageSrcs, setImageSrcs] = useState<Array<string> | null>(null);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    function loadImages() {
        import("../components/modules/poroductGallery.js").then(
            ({ PRODUCT_GALLERY: imageSrcs }) => {
                if (product.name.includes("XX99 Mark I ")) {
                    screenWidth < 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.xx99M1.mobile.gallery)
                        : screenWidth >= 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.xx99M1.tablet.gallery)
                        : setImageSrcs(imageSrcs.xx99M1.desktop.gallery);
                } else if (product.name.includes("XX99 Mark II")) {
                    screenWidth < 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.xx99m2.mobile.gallery)
                        : screenWidth >= 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.xx99m2.tablet.gallery)
                        : setImageSrcs(imageSrcs.xx99m2.desktop.gallery);
                } else if (product.name.includes("XX59")) {
                    screenWidth < 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.xx59.mobile.gallery)
                        : screenWidth >= 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.xx59.tablet.gallery)
                        : setImageSrcs(imageSrcs.xx59.desktop.gallery);
                } else if (product.name.includes("ZX9")) {
                    screenWidth < 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.zx9.mobile.gallery)
                        : screenWidth >= 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.zx9.tablet.gallery)
                        : setImageSrcs(imageSrcs.zx9.desktop.gallery);
                } else if (product.name.includes("ZX7")) {
                    screenWidth < 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.zx7.mobile.gallery)
                        : screenWidth >= 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.zx7.tablet.gallery)
                        : setImageSrcs(imageSrcs.zx7.desktop.gallery);
                } else if (product.name.includes("YX1")) {
                    screenWidth < 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.yx1.mobile.gallery)
                        : screenWidth >= 768 && screenWidth < 1440
                        ? setImageSrcs(imageSrcs.yx1.tablet.gallery)
                        : setImageSrcs(imageSrcs.yx1.desktop.gallery);
                }
            }
        );
        console.log(imageSrcs);
    }
    loadImages();

    useEffect(() => {
        loadImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [product, screenWidth]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="product-image-board">
            {imageSrcs &&
                imageSrcs.map((src, index) => {
                    return (
                        <img
                            src={src}
                            alt={product.name}
                            key={index}
                            className="product-image"
                        />
                    );
                })}
        </div>
    );
}

export default ProductImgBoard;
