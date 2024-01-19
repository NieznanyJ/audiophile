import { useContext, useEffect, useState } from "react";
import QuantityChanger from "../components/QuantityChanger";
import { CartContext } from "../App";
import { useSearchParams } from "react-router-dom";
import { CartContextType } from "../App";
import { DataType } from "../components/dataType";

export type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

function ProductInfo({ product }: { product: DataType }) {
    const [quantity, setQuantity] = useState<number>(1);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams({ quantity: quantity.toString() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity]);

    useEffect(() => {
        const quantityParam = searchParams.get("quantity");

        if (quantityParam) {
            setQuantity(parseInt(quantityParam));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleQuantity = (mode: string) => {
        if (mode === "increment") {
            if (quantity < 99) {
                setQuantity(quantity + 1);
            }
        } else {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        }
    };

    const { cartItems, setCartItems } = useContext<CartContextType>(CartContext);
    const [imageSrc, setImageSrc] = useState<string>("");

    useEffect(() => {
        const loadImages = async () => {
            try {
                const module = await import(`.${product.image.mobile}`);
                setImageSrc(module.default);
            } catch (error) {
                console.error("Error loading image:", error);
                setImageSrc("");
            }
        };

        loadImages();
    }, [product]);

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    }).format(product.price);

    function addToCart() {
        const itemToAdd: CartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image.mobile,
            quantity: quantity,
        };

        const isItemInCart = cartItems.some(
            (item: CartItem) => item.id === product.id
        );

        if (isItemInCart) {
            setCartItems((prevCartItems) =>
                prevCartItems.map((item: CartItem) => {
                    if (
                        item.id === product.id &&
                        item.quantity + quantity <= 99
                    ) {
                        return {
                            ...item,
                            quantity: item.quantity + quantity,
                            price: item.price * quantity,
                        };
                    } else {
                        return item;
                    }
                })
            );
        } else {
            setCartItems((prevCartItems) => [...prevCartItems, itemToAdd]);
        }
    }

    return (
        <div className="product-info-container">
            {imageSrc && <img src={imageSrc} alt={product.name} />}

            <div className="product-info">
                {product.new && <span className="overline">new product</span>}
                <h4>{product.name}</h4>
                <p className="body">{product.description}</p>
                <h5>{formattedPrice}</h5>
                <div className="add-to-cart-container">
                    <QuantityChanger
                        handleQuantity={handleQuantity}
                        setQuantity={setQuantity}
                        quantity={quantity}
                    />
                    <button className="btn" onClick={addToCart}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;
