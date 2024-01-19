import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrowUp from "../assets/shared/desktop/icon-arrow-up.svg";

const ScrollToTop = ({ type = "normal" }: { type: "normal" | "button" }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (type === "normal") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [pathname, type]);

    return type === "normal" ? null : (
        <button className="scroll-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img src={arrowUp}  />
        </button>
    );
};

export default ScrollToTop;
