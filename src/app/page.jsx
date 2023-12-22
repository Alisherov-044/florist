"use client";
import "./home/styles.scss";

import { Slider } from "./home";
import { useEffect } from "react";
import { useProducts } from "@/hook";
import { Icons, Products } from "@/components";

export default function Home() {
    const { products } = useProducts();

    return (
        <main>
            <Slider />
            <Products products={products} />
        </main>
    );
}
