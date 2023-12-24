"use client";
import "./styles.scss";

import { Icons } from "@/components";

export function Modal({ children, isOpen, onClose }) {
    return (
        <div className={`modal-bg ${isOpen ? "open" : ""}`} onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal__close" onClick={onClose}>
                    <Icons.close />
                </button>
                {children}
            </div>
        </div>
    );
}
