import { NavLink } from "react-router-dom";
import "./styles/navbar.css";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import { useContext } from "react";
import { CartContext } from "../App";

function Navbar() {
    const style = ({ isActive, isTransitioning }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "var(--main-orange)" : "var(--white)",
            viewTransitionName: isTransitioning ? "slide" : "",
        };
    };

    const {cartItems, showCart, setShowCart} = useContext(CartContext);


    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink className="nav-link" to="/" end style={style}>
                    <img className="logo" src={logo} alt="logo" />
                </NavLink>
            </div>
            <ul className="navbar-links">
                <li>
                    <NavLink className="nav-link" to="/" end style={style}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="headphones" style={style}>
                        HEADPHONES
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="speakers" style={style}>
                        SPEAKERS
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav-link" to="earphones" style={style}>
                        EARPHONES
                    </NavLink>
                </li>
            </ul>

            <div className="navbar-cart" onClick={() => {setShowCart(!showCart)}}>
                    {cartItems.length > 0 && <span className="cart-indicator" >{cartItems.length}</span>}
                    <img className="cart-icon" src={cart} alt="cart" />
                </div>
        </nav>
    );
}

export default Navbar;
