import "./styles.scss";

import Link from "next/link";
import { Icons } from "@/components";
import { formatCurrency } from "@/utils";
import { useCart, useFavourites } from "@/context";

export function Card({ product, isCart = false }) {
    const { slug, name, image, price, quantity } = product;
    const {
        toggleProduct,
        isInCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
    } = useCart();
    const { toggleFavourite, isInFavourites } = useFavourites();

    return (
        <div className="card">
            <Link href={`/product/${slug}`} className="card__img">
                <img src={image} alt={name} />
            </Link>

            <div className="card__content">
                <h4 className="card__name">{name}</h4>

                <div className="card__content--row">
                    <span className="card__price">
                        {formatCurrency(isCart ? price * quantity : price)}
                    </span>

                    <div className="card__content--actions">
                        <Icons.heart
                            onClick={() => toggleFavourite(product)}
                            className={`favourites ${
                                isInFavourites(product) ? "active" : ""
                            }`}
                        />
                        <Icons.cart
                            onClick={() => toggleProduct(product)}
                            className={`cart ${
                                isInCart(product) ? "active" : ""
                            }`}
                        />
                    </div>
                </div>

                {isCart && (
                    <div className="card__quantity">
                        <button
                            className="card__quantity--button"
                            onClick={() => decreaseQuantity(product)}
                        >
                            -
                        </button>
                        <span className="card__quantity--text">{quantity}</span>
                        <button
                            className="card__quantity--button"
                            onClick={() => increaseQuantity(product)}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>

            {isCart && (
                <button
                    onClick={() => removeFromCart(product)}
                    className="card__delete"
                >
                    delete
                </button>
            )}
        </div>
    );
}
