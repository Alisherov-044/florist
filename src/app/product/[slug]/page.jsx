"use client";
import "./styles.scss";

import { useProducts } from "@/context";
import { Breadcrumb, Loading } from "@/components";

export default function ProductDetails({ params: { slug } }) {
    const { products } = useProducts();
    const currentProduct = products.find((product) => product.slug === slug);

    return (
        <main className="product-details-page">
            {typeof currentProduct === "undefined" ? (
                <Loading />
            ) : (
                <div className="container">
                    <Breadcrumb paths={[`Product: ${currentProduct.name}`]} />
                </div>
            )}
        </main>
    );
}
