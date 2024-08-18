import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import StyledContactForm from "./StyledContactForm"; 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wmojb52",
        "template_63r60mr",
        form.current,
        {
            publicKey: 'mVQNhvx15fYMXzCm9',}
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
        <h2 className="text-center justify-center text-2xl font-bold">Hire Me!!</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;
