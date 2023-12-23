"use client";
import "./styles.scss";

import { useFavourites } from "@/context";
import { Breadcrumb, Products } from "@/components";

export default function Favourites() {
    const { favourites } = useFavourites();

    return (
        <main className="favourites-page">
            <div className="container">
                <Breadcrumb paths={["Favourites"]} />
                <h1 className="favourites-page__title">Favourites</h1>
                {favourites.length === 0 ? (
                    <p className="favourites-page__text">Nothing here</p>
                ) : (
                    <Products products={favourites} />
                )}
            </div>
        </main>
    );
}
