import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_m9sjwkv', e.target, 'EV2_AkVmCMGbG7qkT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();
    }

    return (
        <div id='contact' className='bg-gray-100 rounded p-2'>
            <h2 className='text-4xl text-center font-bold mt-16 mb-12'>Contact Me</h2>
            <div className='text-center mb-8'>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered input-info w-full max-w-sm mb-1" />
                    <br />
                    <input type="email" placeholder="Your Email" name="email" className="input input-bordered input-info w-full max-w-sm mb-1" />
                    <br />
                    <input type="text" placeholder="Subject" name="subject" className="input input-bordered input-info w-full max-w-sm mb-1" />
                    <br />
                    <textarea type="text" placeholder="Your Message" name="message" cols="50" rows="8" className="border-2 input-info" />
                    <br />
                    <input type="submit" value="Submit" className="btn btn-success btn-sm" />
                </form>
            </div>
        </div>
    );
};

export default Contact;