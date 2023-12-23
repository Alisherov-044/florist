"use client";
import { createContext, useContext, useState, useEffect } from "react";

const initialState = {
    products: [],
};

const productsContext = createContext(initialState);

export const useProducts = () => useContext(productsContext);

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch("/products");
            const data = await res.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <productsContext.Provider value={{ products }}>
            {children}
        </productsContext.Provider>
    );
}
