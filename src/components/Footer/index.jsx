import "./styles.scss";

import { Icons } from "@/components";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <Icons.logo />
                <p className="footer__text">
                    &copy; {currentYear} / FLOOM. LTD / ALL RIGHTS RESERVED
                </p>
            </div>
        </footer>
    );
}
