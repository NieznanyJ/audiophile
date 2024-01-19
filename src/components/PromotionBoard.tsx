import zx9PreviewMobile from "../assets/home/mobile/image-speaker-zx9.png";
import zx9PreviewTablet from "../assets/home/tablet/image-speaker-zx9.png";
import zx9PreviewDesktop from "../assets/home/desktop/image-speaker-zx9.png";
import zx7PreviewMobile from "../assets/home/mobile/image-speaker-zx7.jpg";
import zx7PreviewTablet from "../assets/home/tablet/image-speaker-zx7.jpg";
import zx7PreviewDesktop from "../assets/home/desktop/image-speaker-zx7.jpg";
import yx1PreviewMobile from "../assets/home/mobile/image-earphones-yx1.jpg";
import yx1PreviewTablet from "../assets/home/tablet/image-earphones-yx1.jpg";
import yx1PreviewDesktop from "../assets/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";

import "./styles/promotionBoard.css";
import { useEffect, useState } from "react";
function PromotionBoard() {


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
        <section className="promotion-board">
            <div className="board">
                <img className="board-img" src={
                    screenWidth < 768 && screenWidth < 1440
                        ? zx9PreviewMobile
                        : screenWidth >= 768 && screenWidth < 1440
                        ? zx9PreviewTablet
                        : zx9PreviewDesktop
                } alt="ZX9 Speaker" />
                <div>
                    <h3>ZX9 SPEAKER</h3>
                    <p className="body">
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                    </p>
                    <Link to='/speakers/ZX9%20Speaker'><button className="btn secondary-btn">See Product</button></Link>
                </div>
            </div>
            <div className="board">
                <img src={
                    screenWidth < 768 && screenWidth < 1440
                        ? zx7PreviewMobile
                        : screenWidth >= 768 && screenWidth < 1440
                        ? zx7PreviewTablet
                        : zx7PreviewDesktop
                } alt="ZX & Speaker" />
                <div>
                    <h3>ZX7 SPEAKER</h3>
                    
                    <Link to='/speakers/ZX7%20Speaker?quantity=1'><button className="btn secondary-btn">See Product</button></Link>
                </div>
            </div>
            <div className="board">
                <img src={
                    screenWidth < 768 && screenWidth < 1440
                        ? yx1PreviewMobile
                        : screenWidth >= 768 && screenWidth < 1440
                        ? yx1PreviewTablet
                        : yx1PreviewDesktop
                } alt="YX1 Earphones" />
                <div>
                    <h3>YX1 EARPHONES</h3>
                    <Link to='/earphones/YX1%20Wireless%20Earphones'><button className="btn secondary-btn">See Product</button></Link>
                </div>
            </div>
        </section>
    );
}

export default PromotionBoard;
