import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "service_3bkshl8",
        "template_25rzug8",
        form.current,
        "HDmy8B1F3YwxGJcjR"
      );
      form.current.reset();
      setStatus({ type: "success", message: "Thanks! Your message has been sent." });
    } catch {
      setStatus({
        type: "error",
        message: "Your message could not be sent. Please try again in a moment.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-container" aria-labelledby="contact-title">
      <h1 id="contact-title">Contact Me</h1>
      <div className="contact-message">
        <p>Have a project or a question? Send me a message.</p>
      </div>

      <form ref={form} className="contact-forms" onSubmit={sendEmail}>
        <label className="visually-hidden" htmlFor="contact-name">Your name</label>
        <input
          id="contact-name"
          type="text"
          className="input"
          name="user_name"
          placeholder="Name"
          autoComplete="name"
          required
        />
        <label className="visually-hidden" htmlFor="contact-email">Your email address</label>
        <input
          id="contact-email"
          type="email"
          className="input"
          name="user_email"
          placeholder="Email"
          autoComplete="email"
          required
        />
        <label className="visually-hidden" htmlFor="contact-message">Your message</label>
        <textarea
          id="contact-message"
          className="input"
          name="message"
          rows="5"
          placeholder="Your message"
          minLength={10}
          required
        />

        <div className="btn-wrapper">
          <button className="btn" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Submit"}
          </button>
        </div>
        <p
          className={`form-status${status.type ? ` ${status.type}` : ""}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      </form>
    </section>
  );
}

export default Contact;

