import { CartProvider, FavouritesProvider, ProductsProvider } from "@/context";

export function Providers({ children }) {
    return (
        <ProductsProvider>
            <CartProvider>
                <FavouritesProvider>{children}</FavouritesProvider>
            </CartProvider>
        </ProductsProvider>
    );
}
