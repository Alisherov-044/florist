import "./styles.scss";

import { Icons } from "@/components";
import { useRouter } from "next/navigation";

export function Search({ className }) {
    const router = useRouter();
    function onSearch(e) {
        const search = e.target.value;
        if (search.length === 0) return router.push("/");
        router.push(`/search?match=${search}`);
    }

    return (
        <div className={`search ${className}`}>
            <input
                className="search__input"
                type="text"
                placeholder="Search"
                onChange={onSearch}
            />
            <button className="search__button">
                <Icons.search />
            </button>
        </div>
    );
}
