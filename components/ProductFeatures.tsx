import { DataType } from "../components/dataType";
function ProductFeatures({ product }: { product: DataType }) {

    type IncludesType = {
        id: number;
        quantity: number;
        item: string;
    }

    return (
        <div className="product-features">
            <div className="features">
                <h3>Featurs</h3>
                <p className="body">{product.features}</p>
            </div>
            <div className="in-the-box">
                <h3>In the box</h3>
                <ul>
                    {product.includes.map((item: IncludesType, index: number) => {
                        return <li key={index}><span>{item.quantity}x</span> {item.item}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ProductFeatures;
