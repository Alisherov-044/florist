import "./not-found.scss";

import Link from "next/link";
import { Icons } from "@/components";

export default function notFound() {
    return (
        <main className="not-found">
            <div className="container">
                <Icons.notFound />
                <h1 className="not-found__title">404 - Page not found</h1>
                <p className="not-found__text">
                    You can try returning to the home page{" "}
                    <Link href="/">homepage</Link>
                </p>
            </div>
        </main>
    );
}
