"use client";
import "./home/styles.scss";

import { Slider } from "./home";
import { Products } from "@/components";
import { useProducts } from "@/context";

export default function Home() {
    const { products } = useProducts();

    return (
        <main className="home-page">
            <Slider />
            <Products products={products} />
        </main>
    );
}
