import { DataType } from "../components/dataType";
import "../components/styles/innerPage.css";
import CategoryListTest from "../components/CategoryListTest";
import Category from "../components/Category";
import headphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
export const ShopItem = lazy(() => import("../components/ShopItem"));

function InnerPage({ data, category }: { data: DataType[]; category: string }) {
    const matchHeadphones = useMatch("/audiophile/headphones");
    const matchSpeakers = useMatch("/audiophile/speakers");
    const matchEarphones = useMatch("/audiophile/earphones");

    const title = matchHeadphones
        ? "headphones"
        : matchSpeakers
        ? "speakers"
        : matchEarphones
        ? "earphones"
        : null;

    const [, setScreenWidth] = useState<number>(window.innerWidth);

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
                            <Suspense fallback={<Loading />}>
                                <ShopItem
                                    key={index}
                                    name={item.name}
                                    description={item.description}
                                />
                            </Suspense>
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
