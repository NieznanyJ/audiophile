import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {DataType} from "../components/dataType";

function OtherProductsList({ product }: { product: DataType }) {
    console.log(product);

    const navigate = useNavigate();

    type OtherType = {
        name: string;
        slug: string;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        category: string;
    };

    type Other = {
        src: string;
        name: string;
        category: string;
    };

    const [imageSrcs, setImageSrcs] = useState<Other[]>([]);

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

    useEffect(() => {
        const loadImages = async () => {
            const srcs = await Promise.all(
                Object.values(product.others).map(async (item: OtherType) => {
                    try {
                        let module;
                        if (screenWidth < 768 && screenWidth < 1440) {
                            module = await import(`.${item.image.desktop}`);
                        } else if (screenWidth >= 768 && screenWidth < 1440) {
                            module = await import(`.${item.image.tablet}`);
                        } else if (screenWidth >= 1440) {
                            module = await import(`.${item.image.desktop}`);
                        }

                        return {
                            src: module.default,
                            name: item.name,
                            category: item.category,
                        };
                    } catch (error) {
                        console.error("Error loading image:", error);
                        return null;
                    }
                })
            );

            setImageSrcs(srcs.filter((item) => item.src !== null));
        };

        loadImages();
    }, [product, screenWidth]);

    return (
        <>
            <h4>You may also like</h4>
            <ul className="other-list product-list">
                {imageSrcs.map((item, index) => {
                    if (item.src !== null) {
                        return (
                            <li key={index}>
                                <div key={index} className="other">
                                    <img src={item.src} alt={item.name} />
                                    <h5>{item.name}</h5>
                                    <button
                                        className="btn"
                                        onClick={() => {
                                            navigate(
                                                `/${item.category}/${item.name}`
                                            );
                                        }}
                                    >
                                        See Product
                                    </button>
                                </div>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </>
    );
}

export default OtherProductsList;
