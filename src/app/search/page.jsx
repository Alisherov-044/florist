"use client";
import "./styles.scss";

import { useProducts } from "@/context";
import { Products } from "@/components";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Search() {
    const searchParams = useSearchParams();
    const search = searchParams.get("match");
    const { products: initialProducts } = useProducts();
    const [products, setProducts] = useState(initialProducts);

    useEffect(() => {
        const filteredProducts = initialProducts.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
        setProducts(filteredProducts);
    }, [search]);

    return (
        <main className="search-page">
            {products.length === 0 ? (
                <div className="container">
                    <p className="search-page__text">Nothing match</p>
                </div>
            ) : (
                <Products products={products} />
            )}
        </main>
    );
}
