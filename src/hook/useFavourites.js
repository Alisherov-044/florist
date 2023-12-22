"use client";
import { useState, useEffect } from "react";

export function useFavourites() {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavourites =
            JSON.parse(localStorage.getItem("favourites")) ?? [];
        setFavourites(storedFavourites);
    }, []);

    const addFavourite = (product) => {
        if (favourites.some((p) => p.id === product.id)) {
            return;
        }

        setFavourites([...favourites, product]);
        localStorage.setItem(
            "favourites",
            JSON.stringify([...favourites, product])
        );
    };

    const removeFavourite = (product) => {
        setFavourites(favourites.filter((p) => p.id !== product.id));
        localStorage.setItem(
            "favourites",
            JSON.stringify(favourites.filter((p) => p.id !== product.id))
        );
    };

    const toggleFavourite = (product) => {
        if (favourites.some((p) => p.id === product.id)) {
            removeFavourite(product);
        } else {
            addFavourite(product);
        }
    };

    const isInFavourites = (product) => {
        return favourites.some((p) => p.id === product.id);
    };

    return {
        favourites,
        addFavourite,
        removeFavourite,
        toggleFavourite,
        isInFavourites,
        favouritesAmount: favourites.length,
    };
}
