"use client";
import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    products: [],
    addToCart: () => {},
    removeFromCart: () => {},
    toggleProduct: () => {},
};

const cartContext = createContext(initialState);

export const useCart = () => useContext(cartContext);

export function CartProvider({ children }) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const storedState = JSON.parse(localStorage.getItem("cart")) ?? [];
        setState(storedState);
    }, []);

    const updateLocalStorage = (newState) => {
        localStorage.setItem("cart", JSON.stringify(newState));
    };

    const addToCart = (product) => {
        const newState = {
            ...state,
            products: [...state.products, product],
        };
        setState(newState);
        updateLocalStorage(newState);
    };

    const removeFromCart = (product) => {
        const newState = {
            ...state,
            products: state.products.filter((p) => p.id !== product.id),
        };
        setState(newState);
        updateLocalStorage(newState);
    };

    const toggleProduct = (product) => {
        if (state.products.some((p) => p.id === product.id)) {
            removeFromCart(product);
        } else {
            addToCart(product);
        }
    };

    return (
        <cartContext.Provider
            value={{
                products: state.products,
                addToCart,
                removeFromCart,
                toggleProduct,
            }}
        >
            {children}
        </cartContext.Provider>
    );
}
