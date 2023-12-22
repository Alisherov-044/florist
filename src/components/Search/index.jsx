import "./styles.scss";

import { Icons } from "@/components";

export function Search({ onSearch, className }) {
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
