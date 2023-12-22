import "./styles.scss";

import Link from "next/link";
import { Icons, Search } from "@/components";

export function Header() {
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
                    </Link>
                    <Link href="/cart">
                        <Icons.cart />
                    </Link>
                </div>
            </div>
        </header>
    );
}
