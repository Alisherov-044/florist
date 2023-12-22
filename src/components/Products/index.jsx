import "./styles.scss";

import { Card } from "@/components";

export function Products({ products }) {
    return (
        <ul className="products container">
            {products.map((product) => (
                <Card product={product} key={product.id} />
            ))}
        </ul>
    );
}
