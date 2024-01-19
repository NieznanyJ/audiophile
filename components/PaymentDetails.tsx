import React, { useState } from "react";

function PaymentDetails() {
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

    function handleOptionChange(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();

        const paymentOptions = document.querySelectorAll(".payment-option");
        const radioInput = e.currentTarget.children[0] as HTMLInputElement;
        radioInput.click();
        setPaymentMethod(radioInput.value);

        paymentOptions.forEach((option) => {
            const radioInput = option.children[0] as HTMLInputElement;
            if (radioInput.checked) {
                option.classList.add("selected");
            } else {
                option.classList.remove("selected");
            }
        });
    }

    return (
        <div className="method-form-container">
            <h6>Payment details</h6>
            <label htmlFor="method" className="body">
                Payment method
            </label>
            <form action="/" className="method-form">
                <div className="methods">
                    <div
                        className="payment-option"
                        onClick={(e) => {
                            handleOptionChange(e);
                        }}
                    >
                        <input
                            required
                            type="radio"
                            name="method"
                            id="e-money"
                            value="e-money"
                        />
                        <label htmlFor="e-money" className="body">
                            e-Money
                        </label>
                    </div>
                    <div
                        className="payment-option"
                        onClick={(e) => {
                            handleOptionChange(e);
                        }}
                    >
                        <input
                            required
                            type="radio"
                            name="method"
                            id="cash"
                            value="cash"
                        />
                        <label htmlFor="cash" className="body">
                            Cash on Delivery
                        </label>
                    </div>
                </div>

                {paymentMethod === "e-money" && (
                    <form className="e-money-form" action="/">
                        <div>
                            <label htmlFor="e-Money" className="body">
                                e-Money Number
                            </label>
                            <input
                                required
                                type="text"
                                id="e-Money"
                                pattern="[0-9]*"
                                placeholder="238521993"
                            />
                        </div>
                        <div>
                            <label htmlFor="pin" className="body">
                                e-Money PIN
                            </label>
                            <input
                                required
                                type="password"
                                id="pin"
                                pattern="\d{4}"
                                placeholder="6891"
                            />
                        </div>
                    </form>
                )}
            </form>
        </div>
    );
}

export default PaymentDetails;
