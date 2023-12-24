"use client";
import "./styles.scss";

import { useModal } from "@/hooks";
import { formatCurrency } from "@/utils";
import { useFavourites, useCart, useProducts } from "@/context";
import { Breadcrumb, Icons, Loading, Modal } from "@/components";

export default function ProductDetails({ params: { slug } }) {
    const { isOpen, open, close } = useModal();
    const { isInCart, addToCart } = useCart();
    const { isInFavourites, toggleFavourite } = useFavourites();
    const { products } = useProducts();
    const currentProduct = products.find((product) => product.slug === slug);

    return (
        <main className="product-details-page">
            {typeof currentProduct === "undefined" ? (
                <Loading />
            ) : (
                <div className="container">
                    <Breadcrumb paths={[`Product: ${currentProduct.name}`]} />

                    <div className="product-details">
                        <div className="product-details__img">
                            <button className="full-screen" onClick={open}>
                                <Icons.fullScreen />
                            </button>
                            <img
                                src={currentProduct.image_lg}
                                alt={currentProduct.name}
                            />
                        </div>
                        <div className="product-details__content">
                            <div className="product-details__row">
                                <h1 className="product-details__title">
                                    {currentProduct.name}
                                </h1>
                                <Icons.heart
                                    onClick={() =>
                                        toggleFavourite(currentProduct)
                                    }
                                    className={`heart ${
                                        isInFavourites(currentProduct)
                                            ? "active"
                                            : ""
                                    }`}
                                />
                            </div>
                            <span className="product-details__id">
                                Product ID: {currentProduct.id}
                            </span>
                            <p className="product-details__text">
                                {currentProduct.description}
                            </p>
                            <div className="product-details__row details-footer">
                                <span className="product-details__price">
                                    {formatCurrency(currentProduct.price)}
                                </span>
                                <button
                                    className="product-details__btn"
                                    onClick={() =>
                                        !isInCart(currentProduct) &&
                                        addToCart(currentProduct)
                                    }
                                >
                                    {isInCart(currentProduct)
                                        ? "Added to cart"
                                        : "Add to cart"}
                                </button>
                            </div>
                        </div>
                    </div>

                    <Modal isOpen={isOpen} onClose={close}>
                        <img
                            src={currentProduct.image_lg}
                            alt={currentProduct.name}
                        />
                    </Modal>
                </div>
            )}
        </main>
    );
}
