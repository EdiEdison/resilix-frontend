import React from 'react'
import './contact.css'
import { useRef } from 'react'
//import emailjs from 'emailjs-com'
const Contact = () => {
    const form = useRef();
   const sendEmail = (e) => {
         e.preventDefault();
//         emailjs.sendForm('service_jwxocqx', 'template_rqatq9q', form.current, 'XIMcTOJf7C193jm2Y')
         
       e.target.reset()  
     };
    return (
        <section id="contact">
            <h2>Get in touch</h2>
            <div className="container contact__container">
                
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='full name' required />
                    <input type="email" name='email' placeholder='your email' required />
                    <textarea name="message" id="message" cols="30" rows="10"
                        placeholder='your message' required></textarea>
                    <button type="submit" className='btn btn-primary'>send message</button></form>
            </div>
        </section>
    )
}
export default Contact