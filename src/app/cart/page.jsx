"use client";
import "./styles.scss";

import { useCart } from "@/context";
import { Breadcrumb, Products } from "@/components";

export default function Cart() {
    const { products } = useCart();

    return (
        <main className="cart-page">
            <div className="container">
                <Breadcrumb paths={["Cart"]} />
                <h1 className="cart-page__title">Cart</h1>

                {products.length === 0 ? (
                    <p className="cart-page__text">Nothing here</p>
                ) : (
                    <Products products={products} isCart />
                )}
            </div>
        </main>
    );
}
