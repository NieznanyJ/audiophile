import xx59ProductImgMobile from "../../assets/product-xx59-headphones/mobile/image-product.jpg";
import xx59ProductImgTablet from "../../assets/product-xx59-headphones/tablet/image-product.jpg";
import xx59ProductImgDesktop from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import xx99M1ProductImgMobile from "../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import xx99M1ProductImgTablet from "../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import xx99M1ProductImgDesktop from "../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xx99M2ProductImgMobile from "../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import xx99M2ProductImgTablet from "../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import xx99M2ProductImgDesktop from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import zx7ProductImgMobile from "../../assets/product-zx7-speaker/mobile/image-product.jpg";
import zx7ProductImgTablet from "../../assets/product-zx7-speaker/tablet/image-product.jpg";
import zx7ProductImgDesktop from "../../assets/product-zx7-speaker/desktop/image-product.jpg";
import zx9ProductImgMobile from "../../assets/product-zx9-speaker/mobile/image-product.jpg";
import zx9ProductImgTablet from "../../assets/product-zx9-speaker/tablet/image-product.jpg";
import zx9ProductImgDesktop from "../../assets/product-zx9-speaker/desktop/image-product.jpg";

const OTHER_PRODUCTS = {
    xx59: {
        name: "XX59 HEADPHONES",
        category: "HEADPHONES",
        others: [
            {
                name: "XX99 Mark II",
                image: {
                    mobile: xx99M2ProductImgMobile,
                    tablet: xx99M2ProductImgTablet,
                    desktop: xx99M2ProductImgDesktop,
                },
                category: "headphones",
            },
            {
                name: "XX99 Mark I",
                image: {
                    mobile: xx99M1ProductImgMobile,
                    tablet: xx99M1ProductImgTablet,
                    desktop: xx99M1ProductImgDesktop,
                },
                category: "headphones",
            },
            {
                name: "ZX9 Speaker",
                image: {
                    mobile: zx9ProductImgMobile,
                    tablet: zx9ProductImgTablet,
                    desktop: zx9ProductImgDesktop,
                },
                category: "speakers",
            },
        ],
    },
    xx99M1: {
        name: "XX99 MARK I HEADPHONES",
        category: "HEADPHONES",
        others: [
            {
                name: "XX99 Mark II",
                image: {
                    mobile: xx99M2ProductImgMobile,
                    tablet: xx99M2ProductImgTablet,
                    desktop: xx99M2ProductImgDesktop,
                },
                category: "headphones",
            },
            {
                name: "XX59",
                image: {
                    mobile: xx59ProductImgMobile,
                    tablet: xx59ProductImgTablet,
                    desktop: xx59ProductImgDesktop,
                },
                category: "headphones",
            },
            {
                name: "ZX9 Speaker",
                image: {
                    mobile: zx9ProductImgMobile,
                    tablet: zx9ProductImgTablet,
                    desktop: zx9ProductImgDesktop,
                },
                category: "speakers",
            },
        ],
    },
    xx99m2: {
        name: "XX99 MARK II HEADPHONES",
        category: "HEADPHONES",
        others: [
            {
                name: "XX99 Mark I",
                image: {
                    mobile: xx99M1ProductImgMobile,
                    tablet: xx99M1ProductImgTablet,
                    desktop: xx99M1ProductImgDesktop,
                },
                category: "headphones",
            },
            {
                name: "XX59",
                image: {
                    mobile: xx59ProductImgMobile,
                    tablet: xx59ProductImgTablet,
                    desktop: xx59ProductImgDesktop,
                },
                category: "headphones",
            },
            {
                name: "ZX9 Speaker",
                image: {
                    mobile: zx9ProductImgMobile,
                    tablet: zx9ProductImgTablet,
                    desktop: zx9ProductImgDesktop,
                },
                category: "speakers",
            },
        ],
    },
    yx1: {
        name: "YX1 EARPHONES",
        category: "EARPHONES",
        others: [
            {
                name: "ZX9 Speaker",
                image: {
                    mobile: zx9ProductImgMobile,
                    tablet: zx9ProductImgTablet,
                    desktop: zx9ProductImgDesktop,
                },
                category: "speakers",
            },
            {
                name: "XX99 Mark I",
                image: {
                    mobile: xx99M1ProductImgMobile,
                    tablet: xx99M1ProductImgTablet,
                    desktop: xx99M1ProductImgDesktop,
                },
                category: "headphones",
            },
            {
                name: "XX59",
                image: {
                    mobile: xx59ProductImgMobile,
                    tablet: xx59ProductImgTablet,
                    desktop: xx59ProductImgDesktop,
                },
                category: "headphones",
            },
        ],
    },
    zx7: {
        name: "ZX7 SPEAKER",
        category: "SPEAKER",
        others: [
            {
                name: "XX99 Mark I",
                image: {
                    mobile: xx99M1ProductImgMobile,
                    tablet: xx99M1ProductImgTablet,
                    desktop: xx99M1ProductImgDesktop,
                },
                category: "headphones",
            },
            {
                name: "XX59",
                image: {
                    mobile: xx59ProductImgMobile,
                    tablet: xx59ProductImgTablet,
                    desktop: xx59ProductImgDesktop,
                },
                category: "headphones",
            },
            {
                name: "ZX9 Speaker",
                image: {
                    mobile: zx9ProductImgMobile,
                    tablet: zx9ProductImgTablet,
                    desktop: zx9ProductImgDesktop,
                },
                category: "speakers",
            },
        ],
    },
    zx9: {
        name: "ZX9 SPEAKER",
        category: "SPEAKER",
        others: [
            {
                name: "ZX7 Speaker",
                image: {
                    mobile: zx7ProductImgMobile,
                    tablet: zx7ProductImgTablet,
                    desktop: zx7ProductImgDesktop,
                },
                category: "speakers",
            },
            {
                name: "XX99 Mark I",
                image: {
                    mobile: xx99M1ProductImgMobile,
                    tablet: xx99M1ProductImgTablet,
                    desktop: xx99M1ProductImgDesktop,
                },
                category: "headphones",
            },
            {
                name: "XX59",
                image: {
                    mobile: xx59ProductImgMobile,
                    tablet: xx59ProductImgTablet,
                    desktop: xx59ProductImgDesktop,
                },
                category: "headphones",
            },
        ],
    },
};

export function getOther(product) {
    if (!product || !product.name) {
        console.error("Invalid product object passed to loadImages");
        return;
    }

    if (product.name.includes("XX99 Mark I ")) {
        return OTHER_PRODUCTS["xx99M1"].others;
    } else if (product.name.includes("XX99 Mark II")) {
        return OTHER_PRODUCTS["xx99m2"].others;
    } else if (product.name.includes("XX59")) {
        return OTHER_PRODUCTS["xx59"].others;
    } else if (product.name.includes("ZX9 ")) {
        return OTHER_PRODUCTS["zx9"].others;
    } else if (product.name.includes("ZX7 ")) {
        return OTHER_PRODUCTS["zx7"].others;
    } else if (product.name.includes("YX1 ")) {
        return OTHER_PRODUCTS["yx1"].others;
    }
}
