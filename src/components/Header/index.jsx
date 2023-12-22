"use client";
import "./styles.scss";

import Link from "next/link";
import { Icons, Search } from "@/components";
import { useCart } from "@/context";
// import { useCart, useFavourites } from "@/hook";

export function Header() {
    const { products } = useCart();
    // const { getCartAmount } = useCart();
    // const { favourites } = useFavourites();

    return (
        <header className="header">
            <div className="container">
                <Link href="/" className="header__logo">
                    <Icons.logo />
                </Link>

                <Search className="header__search" />

                <div className="header__actions">
                    <Link href="/favourites">
                        <Icons.heart />
                        {/* {favourites.length > 0 && (
                            <div className="indicator">{favourites.length}</div>
                        )} */}
                    </Link>
                    <Link href="/cart">
                        <Icons.cart />
                        {products.length > 0 && (
                            <div className="indicator">{products.length}</div>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}
