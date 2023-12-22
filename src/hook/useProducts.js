"use client";
import { useEffect, useState } from "react";

export function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("/products");
            const data = await res.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return { products };
}
