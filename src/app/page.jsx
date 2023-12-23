"use client";
import "./home/styles.scss";

import { Slider } from "./home";
import { useProducts } from "@/context";
import { Loading, Products } from "@/components";

export default function Home() {
    const { products } = useProducts();

    return (
        <main className="home-page">
            <Slider />
            {typeof products === "undefined" ? (
                <Loading />
            ) : (
                <Products products={products} />
            )}
        </main>
    );
}
