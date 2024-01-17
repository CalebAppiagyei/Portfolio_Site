import emailjs from 'emailjs-com'
import React, { useRef } from 'react'


export default function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rlce14j', 'template_70ae0u4', form.current, 'C6oA0SmmjH-6sFN6b')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section id="Contact" className="contact--section">
            <div className="sub--title">
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="text-lg">
                    Feel free to contact me through the form below
                </p>
            </div>
            <form className="contact--form-container" ref={form} onSubmit={sendEmail}>
                <div className="container">
                    <label htmlFor="first-name" className="contact-label">
                        <span className="text-md">
                            First Name
                        </span>
                        <input 
                        type="text" 
                        className="contact--input text-md" 
                        name="first-name" 
                        id="first-name" 
                        required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact-label">
                        <span className="text-md">
                            Last Name
                        </span>
                        <input 
                        type="text" 
                        className="contact--input text-md" 
                        name="last-name" 
                        id="last-name" 
                        required
                        />
                    </label>
                    <label htmlFor="email" className="contact-label">
                        <span className="text-md">
                            Email
                        </span>
                        <input 
                        type="text" 
                        className="contact--input text-md" 
                        name="email" 
                        id="email" 
                        required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact-label">
                        <span className="text-md">
                            Phone Number
                        </span>
                        <input 
                        type="number" 
                        className="contact--input text-md" 
                        name="phone-number" 
                        id="phone-number" 
                        required
                        />
                    </label>
                </div>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">
                        Message
                    </span>
                    <textarea 
                    className="contact--input text-md" 
                    name="message"
                    id="message" 
                    rows="8"
                    placeholder="Type your message here..."
                    />
                </label>
                <div><button className="btn btn-primary contact--form--btn">Submit</button></div>
            </form>
        </section>
    )
}