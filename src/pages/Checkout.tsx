import { useNavigate } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import PaymentDetails from "../components/PaymentDetails";
import "../components/styles/checkout.css";
import Summary from "../components/Summary";

function Checkout() {
    const navigate = useNavigate();

    return (
        <section className="checkout">
            <div>
                <div className="checkout-title-container">
                    <span className="body go-back" onClick={() => navigate(-1)}>
                        go back
                    </span>

                    <h2>checkout</h2>
                </div>

                <CheckoutForm type="billing" />
                <CheckoutForm type="shipping" />
                <PaymentDetails />
            </div>
            <div className="summary-contaioner">
                <Summary />
                <button className="btn">CONTINUE & PAY</button>
            </div>
        </section>
    );
}

export default Checkout;
