import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataType } from "../components/dataType";
import { getOther } from "../components/modules/otherProducts.js";

function OtherProductsList({ product }: { product: DataType }) {

    const navigate = useNavigate();

    type OtherType = {
        name: string;
        category: string;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
    };


    const [others, setOthers] = useState<Array<OtherType>>([]);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        setOthers(getOther(product));
        console.log(others);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {}, [product, screenWidth]);

    return (
        <>
            <h4>You may also like</h4>
            <ul className="other-list product-list">
                {others.map((other: OtherType, index: number) => {
                    if (other !== null) {
                        return (
                            <li key={index}>
                                <div key={index} className="other">
                                    <img
                                        src={
                                            screenWidth < 768 &&
                                            screenWidth < 1440
                                                ? other.image.mobile
                                                : screenWidth >= 768 &&
                                                  screenWidth < 1440
                                                ? other.image.tablet
                                                : other.image.desktop
                                        }
                                        alt={other.name}
                                    />
                                    <h5>{other.name}</h5>
                                    <button
                                        className="btn"
                                        onClick={() => {
                                            navigate(
                                                `/audiophile/${other.category}/${other.name}`
                                            );
                                        }}
                                    >
                                        See Product
                                    </button>
                                </div>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </>
    );
}

export default OtherProductsList;
