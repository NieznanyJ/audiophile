import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type ImageType = {
    mobile: {
        categoryImg: string;
        gallery: {
            first: string;
            second: string;
            third: string;
        };
        productImg: string;
    };
    tablet: {
        categoryImg: string;
        gallery: {
            first: string;
            second: string;
            third: string;
        };
        productImg: string;
    };
    desktop: {
        categoryImg: string;
        gallery: {
            first: string;
            second: string;
            third: string;
        };
        productImg: string;
    };
};

function ShopItem({
    name,
    description,
}: {
    name: string;
    description: string;
}) {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState<ImageType | null>(null);

    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    function loadImages() {
        import("../components/modules/images.js").then(
            ({ IMAGES: imageSrcs }) => {
                console.log(name);
                if (name.includes("XX99 Mark I ")) {
                    setImageSrc(imageSrcs.xx99M1);
                } else if (name.includes("XX99 Mark II")) {
                    setImageSrc(imageSrcs.xx99m2);
                } else if (name.includes("XX59")) {
                    setImageSrc(imageSrcs.xx59);
                } else if (name.includes("ZX9")) {
                    setImageSrc(imageSrcs.zx9);
                } else if (name.includes("ZX7")) {
                    setImageSrc(imageSrcs.zx7);
                } else if (name.includes("YX1")) {
                    setImageSrc(imageSrcs.yx1);
                }
            }
        );
    }

    useEffect(() => {
        loadImages();

        console.log(imageSrc);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screenWidth]);

    useEffect(() => {
        loadImages();
    }, [name]);

    return (
        <div className="shop-item">
            {imageSrc && (
                <img
                loading="lazy"
                    className="item-img"
                    src={
                        screenWidth < 768 && screenWidth < 1440
                            ? imageSrc.mobile.productImg
                            : screenWidth >= 768 && screenWidth < 1440
                            ? imageSrc.tablet.productImg
                            : imageSrc.desktop.productImg
                    }
                    alt={name}
                />
            )}
            <div>
                <h4>{name}</h4>
                <p className="body">{description}</p>
                <button
                    className="btn"
                    onClick={() => {
                        navigate(name);
                    }}
                >
                    See Product
                </button>
            </div>
        </div>
    );
}

export default ShopItem;
