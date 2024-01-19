import "./App.css";
import { Routes, Route, useMatch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MobileNavigation from "./components/MobileNavigation";
import AboutUsSection from "./components/AboutUsSection";
import FooteSection from "./components/FooteSection";
import InnerPage from "./pages/InnerPage";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./components/ScrollToTop";
import { createContext, useEffect, useState } from "react";
import data from "./assets/data.json";
import Cart from "./components/Cart";
import React from "react";
import Checkout from "./pages/Checkout";

export const ScreenContext = createContext<number | null>(null);

export type NavigationContextType = {
    showMobileNav: boolean;
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavigationContext = React.createContext<NavigationContextType>({
    showMobileNav: false,
    setShowMobileNav: () => {},
});

export type ScreenWdhtContextType = {
    screenWidth: number | null;
};
export type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

export type CartContextType = {
    cartItems: CartItem[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
    showCart: boolean;
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartContext = createContext<CartContextType | null>(null);

function App() {
    const [screenWidth, setScreenWidth] = useState<number | null>(
        window.innerWidth
    );
    const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [showCart, setShowCart] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const checkoutMatch = useMatch("/checkout");

    return (
        <div className="app" id="app">
            <ScrollToTop type="normal" />
            <ScreenContext.Provider value={screenWidth}>
                <NavigationContext.Provider
                    value={{ showMobileNav, setShowMobileNav }}
                >
                    <CartContext.Provider
                        value={{
                            cartItems,
                            setCartItems,
                            showCart,
                            setShowCart,
                        }}
                    >
                        {screenWidth > 768 ? <Navbar /> : <MobileNavigation />}

                        <Cart />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/headphones"
                                element={
                                    <InnerPage
                                        data={data}
                                        category="headphones"
                                    />
                                }
                            />
                            <Route
                                path="/headphones/:name"
                                element={<ProductPage data={data} />}
                            />

                            <Route
                                path="/speakers"
                                element={
                                    <InnerPage data={data} category="speaker" />
                                }
                            />
                            <Route
                                path="/speakers/:name"
                                element={<ProductPage data={data} />}
                            />

                            <Route
                                path="/earphones"
                                element={
                                    <InnerPage
                                        data={data}
                                        category="earphones"
                                    />
                                }
                            />
                            <Route
                                path="/earphones/:name"
                                element={<ProductPage data={data} />}
                            />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>

                        {!checkoutMatch && <AboutUsSection />}
                        <FooteSection />
                    </CartContext.Provider>
                </NavigationContext.Provider>
            </ScreenContext.Provider>
            {screenWidth < 768 && <ScrollToTop type="button" />}
        </div>
    );
}

export default App;
