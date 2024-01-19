function CheckoutForm({ type }: { type: "billing" | "shipping" }) {
    return (
        <div>
            <h6>{type === "billing" ? "Billing details" : "Shipping info"}</h6>
            {type === "billing" ? (
                <form action="" className="billing-form">
                    <div>
                        <label htmlFor="name" className="body">
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            placeholder="Alexei Ward"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="body">
                            Email Address
                        </label>
                        <input
                            required
                            type="email"
                            id="email"
                            placeholder="alexei@mail.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="body">
                            Phone Number
                        </label>
                        <input
                            required
                            type="tel"
                            id="phone"
                            placeholder="+1 202-555-0136"
                        />
                    </div>
                </form>
            ) : (
                <form action="" className="shipping-form">
                    <div>
                        <label htmlFor="adress" className="body">
                            Your adress
                        </label>
                        <input
                            required
                            type="text"
                            id="adress"
                            placeholder="1137 Williams Avenue"
                        />
                    </div>
                    <div>
                        <label htmlFor="zip" className="body">
                            Zip code
                        </label>
                        <input
                            required
                            type="text"
                            id="zip"
                            pattern="[0-9]*"
                            placeholder="10001"
                        />
                    </div>
                    <div>
                        <label htmlFor="city" className="body">
                            City
                        </label>
                        <input
                            required
                            type="text"
                            id="city"
                            placeholder="New York"
                        />
                    </div>
                    <div>
                        <label htmlFor="country" className="body">
                            Country
                        </label>
                        <input
                            required
                            type="text"
                            id="country"
                            placeholder="United States"
                        />
                    </div>
                </form>
            )}
        </div>
    );
}

export default CheckoutForm;
