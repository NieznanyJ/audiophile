import Category from "./Category";
import headphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import "./styles/categoryList.css";
import { Dispatch } from "react";

function CategoryList({
    mobile,
    setShotMobileNav = () => {},
}: {
    mobile: boolean;
    setShotMobileNav?: Dispatch<boolean>;
}) {
    return (
        <ul className={mobile ? "category-list mobile-list" : "category-list"}>

            
            <li className="category-item">
                <Category
                    setShowMobileNav={setShotMobileNav}
                    categoryImg={headphonesThumbnail}
                    categoryLink="headphones"
                    categoryTitle="headphones"
                />
            </li>
            <li className="category-item">
                {" "}
                <Category
                    setShowMobileNav={setShotMobileNav}
                    categoryImg={speakersThumbnail}
                    categoryLink="speakers"
                    categoryTitle="speakers"
                />
            </li>
            <li className="category-item">
                {" "}
                <Category
                    setShowMobileNav={setShotMobileNav}
                    categoryImg={earphonesThumbnail}
                    categoryLink="earphones"
                    categoryTitle="earphones"
                />
            </li>
        </ul>
    );
}

export default CategoryList;
