import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import './Feedback.css';

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kv18juw",
        "template_5439fd5",
        form.current,
        "yEXJMaSglAX6auvWp"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">FeedBack</div>
        <div className="desc">Feel free to Give Your Opinion!</div>
        <form className="contact-form" ref={form} onSubmit={handleSubmit}>
          <div className="contact-title">Email Me 📫</div>
          <input className="contact-input" placeholder="Your Email" name="from_email" />
          <input className="contact-input" placeholder="Your Name" name="from_name" />
          <input className="contact-input" placeholder="Subject" name="subject" />
          <textarea className="contact-input-message" placeholder="Message" rows="4" name="message" />
          <input className="contact-button" type="submit" value="Send" />
        </form>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </div>
    </div>
  );
};

export default Contact;
