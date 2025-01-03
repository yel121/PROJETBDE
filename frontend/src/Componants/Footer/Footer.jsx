import React from 'react';
import './Footer.css'; // Correctly import the CSS file

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            Email: <a href="mailto:rassai.said@ensi.ma">rassai.said@ensi.ma</a>
          </li>
          <li>
            Phone: <a href="tel:+212123456789">+212 123-456-789</a>
          </li>
          <li>
            Address: Modified Adress to check, git<br />
            and, github 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
