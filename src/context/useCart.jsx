"use client";
import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
    products: [],
    addToCart: () => {},
    removeFromCart: () => {},
    toggleProduct: () => {},
    isInCart: () => {},
    increaseQuantity: () => {},
    decreaseQuantity: () => {},
};

const cartContext = createContext(initialState);

export const useCart = () => useContext(cartContext);

export function CartProvider({ children }) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const storedState =
            JSON.parse(localStorage.getItem("cart")) ?? initialState;
        setState(storedState);
    }, []);

    const updateLocalStorage = (newState) => {
        localStorage.setItem("cart", JSON.stringify(newState));
    };

    const addToCart = (product) => {
        const newState = {
            ...state,
            products: [...state.products, { ...product, quantity: 1 }],
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

    const isInCart = (product) => {
        return state.products.some((p) => p.id === product.id);
    };

    const increaseQuantity = (product) => {
        const newState = {
            ...state,
            products: state.products.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            ),
        };
        setState(newState);
        updateLocalStorage(newState);
    };

    const decreaseQuantity = (product) => {
        if (product.quantity === 1) {
            return removeFromCart(product);
        }

        const newState = {
            ...state,
            products: state.products.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
            ),
        };
        setState(newState);
        updateLocalStorage(newState);
    };

    return (
        <cartContext.Provider
            value={{
                products: state.products,
                addToCart,
                removeFromCart,
                toggleProduct,
                isInCart,
                increaseQuantity,
                decreaseQuantity,
            }}
        >
            {children}
        </cartContext.Provider>
    );
}
