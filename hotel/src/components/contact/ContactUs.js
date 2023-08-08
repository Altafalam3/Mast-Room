import React, { useEffect, useState } from 'react';
import './Contact.css';
import axios from 'axios';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [formVisible, setFormVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setTimeout(() => setFormVisible(true), 500);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Invalid email address');
      return;
    }
    if (!name || !email || !message) {
      alert('Please fill all the fields first.');
      return;
    }

    const formData = {
      name: name,
      email: email,
      message: message
    }

    try {
      const response = await axios.post('http://localhost:8800/api/contact/create', formData
      );
      console.log(response.data);
      setName('');
      setEmail('');
      setMessage('');
      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      console.error(error.response);
    }

  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div>
      <div className='header'>
        <h2 className='header-title'>Contact Us</h2>
      </div>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content row">
            <div className="map col-lg-12 col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339855874!2d-0.24168085317947707!3d51.528558242069835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2snp!4v1639724107420!5m2!1sen!2snp"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <span className="icon">
                <i className="fas fa-map-marker-alt fa-2x"></i>
              </span>
              <p className="icon-text text">Pune, Maharashtra</p>
              <span className="icon">
                <i className="fas fa-phone fa-2x"></i>
              </span>
              <p className="icon-text text">+44(20) 6475 5766</p>
              <span className="icon">
                <i className="fas fa-envelope fa-2x"></i>
              </span>
              <p className="icon-text text">masthotel@gmail.com</p>
            </div>

            <div className="col-md-9">
              <div className="form center">
                <form
                  onSubmit={handleSubmit}
                  className={`row form-contact ${formVisible ? 'fade-in' : ''}`}
                >
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control1"
                      placeholder="Full Name"
                      name="full_name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                    <input
                      type="email"
                      className="form-control1"
                      placeholder="E-mail"
                      name="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                    <textarea
                      rows="6"
                      className="form-control1"
                      placeholder="Message"
                      name="message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      required
                    ></textarea>
                    <button type="submit" className="ctn ctn-s ctn-a">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {formSubmitted && (
            <div className="confirmation-msg">
              <p>Your form has been submitted successfully!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
