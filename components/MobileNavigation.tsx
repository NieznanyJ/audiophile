import { NavLink } from "react-router-dom";
import "./styles/navbar.css";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import hamburgerOpen from "../assets/shared/tablet/icon-hamburger.svg";
import headphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersThumbnail from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesThumbnail from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { useContext } from "react";
import { CartContext, NavigationContext } from "../App";
import { NavigationContextType } from "../App";
import CategoryListTest from "./CategoryListTest";
import Category from "./Category";

function MobileNavigation() {
    const style = ({
        isActive,
        isTransitioning,
    }: {
        isActive: boolean;
        isTransitioning: boolean;
    }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "var(--main-orange)" : "var(--white)",
            viewTransitionName: isTransitioning ? "slide" : "",
        };
    };

    const { cartItems, showCart, setShowCart } = useContext(CartContext);

    const {showMobileNav, setShowMobileNav} = useContext<NavigationContextType>(NavigationContext);

    function toggleNav() {
        setShowMobileNav(!showMobileNav);
        document
            .querySelector(".mobile-list")
            ?.classList.toggle("mobile-list-active");
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img
                        className="moblie-nav-icon"
                        src={hamburgerOpen}
                        alt="open navigation"
                        onClick={toggleNav}
                    />
                </div>

                <div className="navbar-logo">
                    <NavLink className="nav-link" to="/" end style={style}>
                        <img className="logo" src={logo} alt="logo" />
                    </NavLink>
                </div>

                <div
                    className="navbar-cart"
                    onClick={() => {
                        setShowCart(!showCart);
                    }}
                >
                    {cartItems.length > 0 && (
                        <span className="cart-indicator">
                            {cartItems.length}
                        </span>
                    )}
                    <img className="cart-icon" src={cart} alt="cart" />
                </div>
            </nav>
            {showMobileNav && (
                <>
                    <div
                        className="backdrop"
                        onMouseDown={toggleNav}
                        onTouchStart={toggleNav}
                    ></div>
                </>
            )}
            <CategoryListTest mobile={true}>
                <Category
                    categoryImg={headphonesThumbnail}
                    categoryLink="headphones"
                    categoryTitle="headphones"
                ></Category>
                <Category
                    categoryImg={speakersThumbnail}
                    categoryLink="speakers"
                    categoryTitle="speakers"
                ></Category>
                <Category
                    categoryImg={earphonesThumbnail}
                    categoryLink="earphones"
                    categoryTitle="earphones"
                ></Category>
            </CategoryListTest>
        </>
    );
}

export default MobileNavigation;
