import { Dispatch } from "react";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import { NavLink } from "react-router-dom";

function Category({
    categoryImg,
    categoryTitle,
    categoryLink,
    setShowMobileNav,
}: {
    categoryImg: string;
    categoryTitle: string;
    categoryLink: string;
    setShowMobileNav?: Dispatch<boolean>;
}) {
    return (
        <NavLink
            onClick={() => setShowMobileNav(false)}
            to={categoryLink}
            className="category-link"
        >
            <div className="category">
                <img
                    className="category-img"
                    src={categoryImg}
                    alt={categoryTitle}
                />
                <h5 className="category-title">{categoryTitle}</h5>
                <h6 className="sub-title show">
                    show{" "}
                    <span>
                        {" "}
                        <img style={{ maxWidth: "10px" }} src={arrow} />{" "}
                    </span>
                </h6>
                <div className="category-shadow"></div>
            </div>
            {/*  */}
        </NavLink>
    );
}

export default Category;
