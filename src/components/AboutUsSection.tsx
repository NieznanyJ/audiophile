import "./styles/aboutUs.css";
import AboutUsImgMobile from "../assets/shared/mobile/image-best-gear.jpg";
import AboutUsImgTablet from "../assets/shared/tablet/image-best-gear.jpg";
import AboutUsImgDesktop from "../assets/shared/desktop/image-best-gear.jpg";
import { useEffect, useState } from "react";
function AboutUsSection() {

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
        <section className="about-us">
            <img src={
                    screenWidth < 768 && screenWidth < 1440
                        ? AboutUsImgMobile
                        : screenWidth >= 768 && screenWidth < 1440
                        ? AboutUsImgTablet
                        : AboutUsImgDesktop
                } alt="Beast Gear" />
            <div>
                <h3>
                    Bringing you the {screenWidth < 768 && <br/>} <span>best</span> audio gear
                </h3>
                <p className="body">
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </p>
            </div>
        </section>
    );
}

export default AboutUsSection;
