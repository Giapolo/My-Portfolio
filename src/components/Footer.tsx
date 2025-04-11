import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm(
            'mail-react',
            'react_contact_form',
            form.current,
            'p7x4p1hE7XE4syvJi'
        )
        .then((result) => {
            console.log(result.text);
            alert('Message envoyé avec succès!');
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            alert('Une erreur est survenue. Veuillez réessayer.');
        });
    };

    return (
        <>
            <div> 
                <h1 className="mt-12">Contact</h1> 
                <form className='cf' ref={form} onSubmit={sendEmail}> 
                    <div className='half left cf rounded-lg'> 
                        <input type='text' placeholder='Name' name='user_name' required /> 
                        <input type='email' placeholder='Email address' name='user_email' required /> 
                    </div> 
                    <div className='half right cf rounded-lg'> 
                        <textarea name='message' placeholder='Message' required></textarea> 
                    </div> 
                    <input className="bg-amber-600" type='submit' value='Submit' id='input-submit' /> 
                </form> 
            </div>
        </>
    );
}

export default Footer;