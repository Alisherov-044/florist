import "./styles.scss";

import { Card } from "@/components";

export function Products({ products, isCart = false }) {
    return (
        <ul className="products">
            <div className="container">
                {products.map((product) => (
                    <Card product={product} key={product.id} isCart={isCart} />
                ))}
            </div>
        </ul>
    );
}
