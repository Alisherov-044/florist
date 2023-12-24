"use client";
import "./styles.scss";

import { Breadcrumb } from "@/components";

export default function Contact() {
    return (
        <main className="contact-page">
            <div className="container">
                <Breadcrumb paths={["Contact"]} />

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d373.1874296079089!2d60.62186756012268!3d41.55843426560337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfc9842c81fc9d%3A0x9e434d2b8a616ce9!2sIT%20Park!5e0!3m2!1sru!2s!4v1703421810262!5m2!1sru!2s"
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="contact-page__content">
                    <div className="contact-page__content--info">
                        <h1 className="contact-page__title">Our Contact</h1>
                        <p className="contact-page__description">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old.
                        </p>
                        <div className="contact__wrapper">
                            <span>
                                <b>Address</b>: 7563 St. Vicent Place, Glasgow,
                                Greater Newyork NH7689, UK
                            </span>
                            <span>
                                <b>Phone</b>: +(998) 99 999-99-99
                            </span>
                            <span>
                                <b>Email</b>: florist@example.com
                            </span>
                            <span>
                                <b>Store open</b>: 8am - 08pm, Mon - Sat
                            </span>
                        </div>
                    </div>

                    <form
                        className="contact-page__content--form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form__row">
                            <input type="text" placeholder="Name*" />
                            <input type="email" placeholder="Email*" />
                            <input type="tel" placeholder="Phone Number*" />
                        </div>
                        <textarea
                            cols="30"
                            rows="10"
                            placeholder="Message*"
                        ></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
