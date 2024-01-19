import "../components/styles/home.css";
import Hero from "../components/Hero";
import headphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import CategoryListTest from "../components/CategoryListTest";
import Category from "../components/Category";
import PromotionBoard from "../components/PromotionBoard";

function Home() {

    return (
        <section>
            <Hero />
            

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
            <PromotionBoard />
            
        </section>
    );
}

export default Home;
