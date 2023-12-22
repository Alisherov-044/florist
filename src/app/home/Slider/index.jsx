"use client";
import { range } from "@/utils";
import "./styles.scss";

export function Slider() {
    return (
        <div className="sections__wrapper">
            <div className="sliders">
                {range(1, 5).map((i) => (
                    <section key={i} className="slider">
                        <article className="slider__item slider-one">
                            <img src="/slider-1.avif" alt="slider 1" />
                        </article>
                        <article className="slider__item slider-two left">
                            <img src="/slider-2.avif" alt="slider 2" />
                        </article>
                        <article className="slider__item slider-three">
                            <img src="/slider-3.avif" alt="slider 3" />
                        </article>
                        <article className="slider__item slider-four">
                            <img src="/slider-1.avif" alt="slider 4" />
                        </article>
                        <article className="slider__item slider-five left">
                            <img src="/slider-2.avif" alt="slider 5" />
                        </article>
                        <article className="slider__item slider-six">
                            <img src="/slider-1.avif" alt="slider 6" />
                        </article>
                        <article className="slider__item slider-five left">
                            <img src="/slider-2.avif" alt="slider 5" />
                        </article>
                        <article className="slider__item slider-six">
                            <img src="/slider-1.avif" alt="slider 6" />
                        </article>
                    </section>
                ))}
            </div>
        </div>
    );
}
