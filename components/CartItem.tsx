import { useContext, useEffect, useMemo, useState } from "react";
import QuantityChanger from "./QuantityChanger";
import { CartContext } from "../App";
import { CartContextType } from "../App";

export type CartItemType = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

function CartItem({
    item,
    type = "normal",
}: {
    item: CartItemType;
    type: "normal" | "summary";
}) {
    const [imageSrc, setImageSrc] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(item.quantity);
    const [formattedPrice, setFormattedPrice] = useState<string>(formatPrice());
    const { cartItems, setCartItems } = useContext<CartContextType>(CartContext);

    function formatPrice() {
        const formattedPrice = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
        }).format(item.price * item.quantity);

        return formattedPrice;
    }
    formatPrice();

    useEffect(() => {
        const loadImages = async () => {
            try {
                const module = await import(`.${item.image}`);
                setImageSrc(module.default);
            } catch (error) {
                console.error("Error loading image:", error);
                setImageSrc("");
            }
        };

        loadImages();
    }, [item]);

    useMemo(() => {
        setFormattedPrice(formatPrice());
        setQuantity(item.quantity);
        console.log("formattedPrice", formattedPrice);
        console.log("quantity", quantity);
    }, [cartItems]);

    function updateQuantity(itemId, newQuantity) {
        const updatedCart = cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        );
        return updatedCart;
    }

    const handleQuantity = (mode: string) => {
        if (mode === "increment") {
            if (quantity < 99) {
                setQuantity(quantity + 1);
                setCartItems(updateQuantity(item.id, quantity + 1));
            }
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
                setCartItems(updateQuantity(item.id, quantity - 1));
            }
        }
    };

    return (
        <li className="cart-item">
            <img src={imageSrc} alt={item.name} />
            <div className="cart-item-info">
                <p className="body">{item.name}</p>
                <p className="body">{formattedPrice}</p>
            </div>
            {type === "normal" && (
                <div>
                    <QuantityChanger
                        type="cart"
                        handleQuantity={handleQuantity}
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                </div>
            )}
        </li>
    );
}

export default CartItem;
