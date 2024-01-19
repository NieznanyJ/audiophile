import {DataType} from "../components/dataType";
import ShopItem from "../components/ShopItem";
import "../components/styles/innerPage.css";
import CategoryListTest from "../components/CategoryListTest";
import Category from "../components/Category";
import headphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useMatch } from "react-router-dom";
import { useEffect, useState } from "react";

function InnerPage({ data, category }: { data: DataType[]; category: string }) {
    const matchHeadphones = useMatch("/headphones");
    const matchSpeakers = useMatch("/speakers");
    const matchEarphones = useMatch("/earphones");

    const title = matchHeadphones
        ? "headphones"
        : matchSpeakers
        ? "speakers"
        : matchEarphones
        ? "earphones"
        : null;

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

    return (
        <>
            <h2 className="inner-page-title">{title}</h2>
            <main className="inner-page">
                {data &&
                    data.map((item: DataType, index: number) => {
                        return item.slug.includes(category) ? (
                            <ShopItem
                                key={index}
                                img={
                                    screenWidth < 768 && screenWidth < 1440
                                        ? item.image.mobile
                                        : screenWidth >= 768 &&
                                          screenWidth < 1440
                                        ? item.image.tablet
                                        : item.image.desktop
                                }
                                name={item.name}
                                description={item.description}
                            />
                        ) : null;
                    })}
                <CategoryListTest mobile={false}>
                    <Category
                        categoryImg={headphonesThumbnail}
                        categoryLink="/headphones"
                        categoryTitle="headphones"
                    ></Category>
                    <Category
                        categoryImg={speakersThumbnail}
                        categoryLink="/speakers"
                        categoryTitle="speakers"
                    ></Category>
                    <Category
                        categoryImg={earphonesThumbnail}
                        categoryLink="/earphones"
                        categoryTitle="earphones"
                    ></Category>
                </CategoryListTest>
            </main>
        </>
    );
}

export default InnerPage;
