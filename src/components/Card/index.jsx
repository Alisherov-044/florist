import "./styles.scss";

import Link from "next/link";
import { Icons } from "@/components";
import { formatCurrency } from "@/utils";
import { useCart } from "@/context";

export function Card({ product }) {
    const { id, name, image, price } = product;
    const { toggleProduct } = useCart();

    return (
        <div className="card">
            <Link href={`/product/${id}`} className="card__img">
                <img src={image} alt={name} />
            </Link>

            <div className="card__content">
                <h4 className="card__name">{name}</h4>

                <div className="card__content--row">
                    <span className="card__price">
                        from {formatCurrency(price)}
                    </span>

                    <div className="card__content--actions">
                        <Icons.heart
                        // onClick={() => toggleFavourite(product)}
                        // className={isInFavourites(product) ? "active" : ""}
                        />
                        <Icons.cart
                            onClick={() => toggleProduct(product)}
                            // className={isInCart(product) ? "active" : ""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
