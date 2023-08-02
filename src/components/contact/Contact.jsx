import React from 'react';

import './Contact.css';

import { useForm, ValidationError } from '@formspree/react';

function Constact() {
    const [state, handleSubmit] = useForm("meqbelyo");

    return (
        <section className="contact container section" id="contact">
            <h2 className="section-title">Get In Touch</h2>

            <div className="contact-container grid">
                <div className="contact-info">
                    <h3 className="contact-title">Let's talk !</h3>
                    <p className="contact-details">Don't like forms ? Send me an email ! 👋</p>
                </div>

                <form action="" className="contact-form" method='POST' onSubmit={handleSubmit}>
                    <div className="contact-form-group">
                        <div className="contact-form-div">
                            <input
                                id="name"
                                className="contact-form-input"
                                placeholder="Insert your name"
                                name="name"
                                type="text"
                                pattern='[A-Za-z\s]+'
                                required
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>

                        <div className="contact-form-div">
                            <input
                                id="email"
                                className="contact-form-input"
                                placeholder="Insert your email"
                                name="email"
                                type="email"
                                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>

                    <div className="contact-form-div">
                        <input
                            id="subject"
                            className="contact-form-input"
                            placeholder="Insert your subject"
                            name="subject"
                            type="text"
                            pattern='[A-Za-z\s]+'
                            required
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>

                    <div className="contact-form-div contact-form-area">
                        <textarea
                            id="message"
                            className="contact-form-input"
                            placeholder="Write your message"
                            cols="30"
                            rows="10"
                            name="message"
                            type="text"
                            pattern='[A-Za-z\s]+'
                            required
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button className="btn" type="submit" disabled={state.submitting || state.succeeded}><span>{!state.succeeded && !state.submitting ? "Submit" : state.succeeded ? "Submitted !" : "Submit in progress..."}</span></button>

                </form>
            </div>
        </section>
    )
}

export default Constact