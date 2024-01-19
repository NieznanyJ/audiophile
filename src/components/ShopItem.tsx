import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ShopItem({
    img,
    name,
    description,
}: {
    img: string;
    name: string;
    description: string;
}) {
    const url = `.${img}`;
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState<string>(url);

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

    useEffect(() => {
        const loadImage = async () => {
            try {
                const module = await import(imageSrc);
                console.log(module);
                setImageSrc(module.default);
            } catch (error) {
                console.error("Error loading image:", error);
            }
        };

        loadImage();
    }, [img, screenWidth]);

    return (
        <div className="shop-item">
            {imageSrc && <img className="item-img" src={imageSrc} alt={name} />}
            <div>
                <h4>{name}</h4>
                <p className="body">{description}</p>
                <button
                    className="btn"
                    onClick={() => {
                        navigate(name);
                    }}
                >
                    See Product
                </button>
            </div>
        </div>
    );
}

export default ShopItem;
