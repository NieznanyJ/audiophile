import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { CartContext } from "../App";
import { useNavigate } from "react-router-dom";
import { CartContextType } from "../App";
import CartItem from "./CartItem";

import "./styles/cart.css";

export type CartItemType = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

function Cart() {
    const { cartItems, setCartItems, showCart, setShowCart } =
        useContext<CartContextType>(CartContext);
    const [, setImageSrcs] = useState<string[]>([]);
    const [formattedPrice, setFormattedPrice] = useState<string>("");
    const cartRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    function removeAll() {
        setCartItems([]);
    }

    useEffect(() => {
        const cartStorage = JSON.parse(
            localStorage.getItem("cartItems") || "[]"
        );
        if (cartStorage.length > 0) {
            setCartItems(cartStorage);
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (
                cartRef.current &&
                !cartRef.current.contains(event.target as Node) &&
                event.target !== document.querySelector(".cart-icon") &&
                event.target !== document.querySelector(".cart-indicator")
            ) {
                setShowCart(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const loadImages = async () => {
            const srcs = await Promise.all(
                Object.values(cartItems).map(async (item: CartItemType) => {
                    try {
                        const module = await import(`.${item.image}`);
                        return module.default;
                    } catch (error) {
                        console.error("Error loading image:", error);
                        return null;
                    }
                })
            );

            setImageSrcs(srcs.filter((src) => src !== null));
        };

        loadImages();
    }, [cartItems]);

    function calculateTotalPrice() {
        return cartItems.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
    }
    useMemo(() => {
        const formattedPrice = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
        }).format(calculateTotalPrice());

        setFormattedPrice(formattedPrice);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems]);

    function goToCheckout() {
        navigate("/checkout");
        setShowCart(false);
    }

    return (
        <div
            className="cart"
            ref={cartRef}
            style={showCart ? { display: "flex" } : { display: "none" }}
        >
            <div>
                <h6>Cart ({cartItems.length})</h6>
                <span className="body" onClick={removeAll}>
                    remove all
                </span>
            </div>
            {cartItems.length > 0 ? (
                <div className="cart-item-wrapper">
                    {cartItems.map((item: CartItemType, index: number) => {
                        return (
                            <CartItem item={item} type="normal" key={index} />
                        );
                    })}
                </div>
            ) : (
                <div className="cart-empty">
                    <p className="body">Cart empty</p>
                </div>
            )}

            <div>
                <div>
                    <h6>total</h6>
                    <h6>{formattedPrice}</h6>
                </div>
                <button
                    className="btn"
                    onClick={() => {
                        cartItems.length > 0 && goToCheckout();
                    }}
                >
                    checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
