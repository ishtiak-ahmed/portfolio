import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault()


        emailjs.sendForm('gmail', 'template_x9we2zp', e.target, 'user_uHUSNET2UMdwK2Nvi6OP6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <section className='py-5'>
            <h2>Contact Me</h2>
            <div className="contact">
                <form className="contact-form" onSubmit={sendEmail}>
                    <p>
                        <label htmlFor="">Name</label>
                        <input type="text" required name="user_name" />
                    </p>
                    <p>

                        <label>Contact Number</label>
                        <input type="text" name="contact_number" />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" required name="user_email" />
                    </p>
                    <p>
                        <label>Company</label>
                        <input type="text" name="company" />
                    </p>
                    <p className='full'>

                        <label>Message</label>
                        <textarea rows='5' required name="message" />
                    </p>
                    <p>

                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>

        </section>
    );
};

export default Contact;