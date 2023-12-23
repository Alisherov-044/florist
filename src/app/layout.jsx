import "@/styles/main.scss";

import { Providers } from "@/providers";
import { Header, Footer } from "@/components";

export const metadata = {
    title: "Floom Flowers & Gifts",
    description: "Generated by create next app",
    icons: {
        icon: "https://d34g78fsj6jubz.cloudfront.net/images/favicon-svg.svg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
