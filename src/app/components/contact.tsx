import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const validateInputs = () => {
    if (!form.current) {
      return false;
    }

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

  interface EmailFormElements extends HTMLFormControlsCollection {
    user_name: HTMLInputElement;
    user_email: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface EmailForm extends HTMLFormElement {
    elements: EmailFormElements;
  }

  const sendEmail = (e: React.FormEvent<EmailForm>) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          alert("Email sent successfully!");
          form.current?.reset();
        },
        () => {
          alert("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col max-w-[500px] w-full">
      <label className="mb-2 mr-2 whitespace-nowrap">Name</label>
      <input
        type="text"
        name="user_name"
        className="border border-gray-300 flex-1 p-1 mb-4 mr-2 transition-colors focus:border-blue-500 focus:outline-none"
      />
      <label className="mb-2 mr-2 whitespace-nowrap">Email</label>
      <input
        type="email"
        name="user_email"
        className="border border-gray-300 flex-1 p-1 mb-4 mr-2 transition-colors focus:border-blue-500 focus:outline-none"
      />
      <label className="mb-2 mr-2 whitespace-nowrap">Message</label>
      <textarea
        name="message"
        className="border border-gray-300 flex-1 flex-basis-100 p-1 mb-4 mr-2 min-h-[100px] resize-none transition-colors focus:border-blue-500 focus:outline-none"
      />
      <input
        type="submit"
        value="Send"
        className="bg-[#007a8e] cursor-pointer p-1 rounded text-white transition-colors hover:bg-[#009999] w-[75px]"
      />
    </form>
  );
}

export default Contact;
