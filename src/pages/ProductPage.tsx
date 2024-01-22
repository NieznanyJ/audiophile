import { useParams } from "react-router-dom";
import { DataType } from "../components/dataType";
import ProductInfo from "../components/ProductInfo";
import ProductFeatures from "../components/ProductFeatures";
import ProductImgBoard from "../components/ProductImgBoard";
import OtherProductsList from "../components/OtherProductsList";
import { useNavigate } from "react-router-dom";
import "../components/styles/productPage.css";
import CategoryList from "../components/CategoryList";

function ProductPage({ data }: { data: Array<DataType> }) {
    const { name } = useParams<{ name: string }>();


    const navigate = useNavigate();

    const product = data.filter((item: DataType) => {
        return item.name.includes(name);
    })[0];

  

    return (
        <>
            <main className="product-page">
                <span
                    className="body go-back"
                    onClick={() => navigate(`/audiophile/${product.category}`)}
                >
                    go back
                </span>
                <ProductInfo product={product} />
                <ProductFeatures product={product} />
                <ProductImgBoard product={product} />
                <OtherProductsList product={product} />
                <CategoryList mobile={false} />
            </main>
        </>
    );
}

export default ProductPage;
