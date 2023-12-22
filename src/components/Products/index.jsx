import "./styles.scss";

import { Card } from "@/components";

export function Products({ products }) {
    return (
        <ul className="products">
            <div className="container">
                {products.map((product) => (
                    <Card product={product} key={product.id} />
                ))}
            </div>
        </ul>
    );
}
