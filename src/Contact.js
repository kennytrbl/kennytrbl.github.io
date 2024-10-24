import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style/Contact.css";

function Contact() {
  const form = useRef();

  const validateInputs = () => {
    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!userName || !userEmail || !message) {
      alert("All fields are required.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userEmail)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact;
