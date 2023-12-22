"use client";
import { CartProvider as ContextCartProvider } from "@/context";

export function CartProvider({ children }) {
    return <ContextCartProvider>{children}</ContextCartProvider>;
}
