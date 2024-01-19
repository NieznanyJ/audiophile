import heroImgMobile from "../assets/home/mobile/image-header.jpg";
import heroImgTablet from "../assets/home/tablet/image-header.jpg";
import heroImgDesktop from "../assets/home/desktop/image-hero.jpg";
import { Link } from "react-router-dom";
import {  useEffect, useState } from "react";
function Hero() {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="hero">
            <img
                src={
                    screenWidth < 768 && screenWidth < 1440
                        ? heroImgMobile
                        : screenWidth >= 768 && screenWidth < 1440
                        ? heroImgTablet
                        : heroImgDesktop
                }
                alt=""
            />

            <div>
                <span className="overline">NEW PRODUCT</span>
                <h1>XX99 Mark II HeadphoneS</h1>
                <p className="body">
                    Experience natural, lifelike audio and exceptional build
                    quality made for the passionate music enthusiast.
                </p>
                <Link to="/headphones/XX99%20Mark%20II%20Headphones">
                    <button className="btn">See Product</button>
                </Link>
            </div>
        </header>
    );
}

export default Hero;
