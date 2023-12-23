"use client";
import { createContext, useState, useEffect, useContext } from "react";

const initialState = {
    favourites: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    toggleFavourite: () => {},
    isInFavourites: () => {},
};

const favouritesContext = createContext(initialState);

export const useFavourites = () => useContext(favouritesContext);

export function FavouritesProvider({ children }) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        const storedState =
            JSON.parse(localStorage.getItem("favourites")) ?? initialState;
        setState(storedState);
    }, []);

    const updateLocalStorage = (newState) => {
        localStorage.setItem("favourites", JSON.stringify(newState));
    };

    const addToFavourites = (product) => {
        const newState = {
            ...state,
            favourites: [...state.favourites, product],
        };
        setState(newState);
        updateLocalStorage(newState);
    };

    const removeFromFavourites = (product) => {
        const newState = {
            ...state,
            favourites: state.favourites.filter((p) => p.id !== product.id),
        };
        setState(newState);
        updateLocalStorage(newState);
    };

    const toggleFavourite = (product) => {
        if (state.favourites.some((p) => p.id === product.id)) {
            removeFromFavourites(product);
        } else {
            addToFavourites(product);
        }
    };

    const isInFavourites = (product) => {
        return state.favourites.some((p) => p.id === product.id);
    };

    return (
        <favouritesContext.Provider
            value={{
                favourites: state.favourites,
                addToFavourites,
                removeFromFavourites,
                toggleFavourite,
                isInFavourites,
            }}
        >
            {children}
        </favouritesContext.Provider>
    );
}
