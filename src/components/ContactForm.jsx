import React from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useRef } from "react";

function ContactForm() {

    const defaultEmail = `I am reaching out to inquire about [specific service or project] offered by your company.`

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(defaultEmail);

  const form = useRef();

  const showToastMessage = () => toast("Email Sent!");


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rj2mf28", "template_n6vyb78", form.current, {
        publicKey: "X6xvds0UhG3CJb7y8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

      setMessage("")
      setEmail("")
  };

  return (
    <div className=" overflow-hidden">
      <form ref={form} className="p-4" onSubmit={sendEmail}>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border-2 rounded-lg p-2"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            required
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full border-2 rounded-lg p-2"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
            required
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 font-medium hover:bg-blue-600"
            type="submit"
            onClick={showToastMessage}
          >
            Send Message
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
