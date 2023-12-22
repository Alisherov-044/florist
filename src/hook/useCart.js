"use client";
import { useEffect, useState } from "react";

export function useCart() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) ?? [];
        setProducts(storedCart);
    }, []);

    const addProduct = (product) => {
        if (products.some((p) => p.id === product.id)) {
            return;
        }

        setProducts([...products, product]);
        localStorage.setItem("cart", JSON.stringify([...products, product]));
    };

    const removeProduct = (product) => {
        setProducts(products.filter((p) => p.id !== product.id));
        localStorage.setItem(
            "cart",
            JSON.stringify(products.filter((p) => p.id !== product.id))
        );
    };

    const toggleProduct = (product) => {
        if (products.some((p) => p.id === product.id)) {
            removeProduct(product);
        } else {
            addProduct(product);
        }
    };

    const isInCart = (product) => {
        return products.some((p) => p.id === product.id);
    };

    const getCartAmount = () => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) ?? [];
        return storedCart.length;
    };

    return {
        products,
        addProduct,
        removeProduct,
        toggleProduct,
        isInCart,
        getCartAmount,
    };
}
