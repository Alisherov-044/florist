import "./styles.scss";

import Link from "next/link";

export function Breadcrumb({ paths }) {
    const formatedPaths = ["Home", ...paths];

    return (
        <div className="breadcrumb">
            {formatedPaths.map((path, i) =>
                i === paths.length ? (
                    <span key={path}>{path}</span>
                ) : (
                    <>
                        <Link
                            href={path === "Home" ? "/" : path.toLowerCase()}
                            key={path}
                        >
                            {path}
                        </Link>
                        &gt;
                    </>
                )
            )}
        </div>
    );
}
