import './contact.css'
import { MdOutlineMail, MdSend } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
    alert("Email sent, I'll get back to you shortly")
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>chaos_stotch@proton.me</h5>
            <a href="mailto:chaos_stotch@proton.me" rel="noreferrer" target={'_blank'}>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 19 99116-8007</h5>
            <a href="https://wa.me/5519991168007" rel="noreferrer" target={'_blank'}>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message" placeholder="Your message" rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'><MdSend/></button>
        </form>
      </div>
    </section>
  )
}

export default Contact