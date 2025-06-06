import { useState } from 'react';
import './contact.css';
import axios from 'axios';

export default function Contact() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/contact',{name,email,message})
        .then(result => console.log(result))
        .catch(err => console.log(err));

    }
    return (
        <div className="contact body-font" id='contact'>
            <h1 className="backText">Contact</h1>
            <h1 className="frontText">Contact Me</h1>

            <div className="contactContainer">
                <div className="contactText">
                    <p>
                        If you would like to get in touch, please feel free to reach out via email or connect with me on LinkedIn.
                    </p>
                    <p>
                        I am always open to discussing new projects, collaborations, or opportunities.
                    </p>      
                </div>

                <div className="contactForm">
                    <form onSubmit={handleSubmit} method='post'>
                        <div className="formGroup">
                            <input type="text" id="name" name="name" placeholder='May i know your good name please..' onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="formGroup">
                            <input type="email" id="email" name="email" placeholder='How may i contact you? Please enter your Email' onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="formGroup">
                            <textarea id="message" name="message" rows="4" placeholder='Wanna have a conversation? Compose your message here!' onChange={(e) => setMessage(e.target.value)} required></textarea>
                        </div>
                        <button type="submit">Connect Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}