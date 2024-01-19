import  { useContext } from "react";
import { CartContext } from "../App";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";

export type CartItemType = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

function Summary() {
    const { cartItems } = useContext(CartContext);
    const shipping = 50;
    const VAT = 0.2;

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    });
    const navigate = useNavigate();

    const total = cartItems.reduce((acc: number, item: CartItemType) => {
        return acc + item.price * item.quantity;
    }, 0);

    function navigateToItem(item: CartItemType): string {
        let path = "";
        if (item.name.includes("Earphones")) {
            path = `/earphones/${item.name}?quantity=${item.quantity}`;
        } else if (item.name.includes("Headphones")) {
            path = `/headphones/${item.name}?quantity=${item.quantity}`;
        } else if (item.name.includes("Speaker")) {
            path = `/speakers/${item.name}?quantity=${item.quantity}`;
        }
        navigate(path);
        return path;
    }

    return (
        <div>
            <h6>Summary</h6>

            <div>
                <ul className="summary-list">
                    {cartItems.map((item: CartItemType, index: number) => {
                        return (
                            <div
                                key={index}
                                onClick={() => navigateToItem(item)}
                                className="summary-item"
                            >
                                <Link to={navigateToItem(item)}>
                                    <CartItem item={item} type="summary" />
                                </Link>
                                <span>x{item.quantity}</span>
                            </div>
                        );
                    })}
                </ul>
            </div>
            <div className="summary-total">
                <div>
                    <h6>total</h6>
                    <p className="body">{formattedPrice.format(total)}</p>
                </div>
                <div>
                    <h6>shipping</h6>
                    <p className="body">{formattedPrice.format(shipping)}</p>
                </div>
                <div>
                    <h6>vat (included)</h6>
                    <p className="body">{formattedPrice.format(total * VAT)}</p>
                </div>
                <div>
                    <h6>GRAND TOTAL</h6>
                    <p className="body">
                        {total
                            ? formattedPrice.format(
                                  total + (total + shipping) * VAT
                              )
                            : formattedPrice.format(0)}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Summary;
