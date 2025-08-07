import React, { useRef, useState, useEffect } from "react";
import "./contact.css";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { TfiInstagram } from "react-icons/tfi";
import { TbSend } from "react-icons/tb";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const formboldFormId = import.meta.env.VITE_FORMBOLD_FORM_ID;

  // Ref to hold the timer ID
  const timeoutRef = useRef(null);

  // Effect to clean up the timer if the component unmounts, preventing memory leaks
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const validateForm = () => {
    const nwErrors = {};
    const formData = new FormData(form.current);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name) nwErrors.name = true;

    if (!email) {
      nwErrors.email = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      nwErrors.email = "Invalid email format";
    }

    if (!message) nwErrors.message = true;

    setErrors(nwErrors);
    return Object.keys(nwErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any existing timer before starting a new submission cycle.
    // This prevents an old timer from hiding a new message prematurely.
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setErrors({}); // Clear old validation errors

    if (!validateForm()) {
      setMessageStatus("validation_error");
      // Set a new timer to hide the validation error message
      timeoutRef.current = setTimeout(() => setMessageStatus(null), 3000);
      return;
    }

    // Set status to "sending" to give user feedback
    setMessageStatus("sending");

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formbold.com/s/${formboldFormId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessageStatus("success");
        form.current.reset();
        // Set the timer to hide the success message after 10 seconds
        timeoutRef.current = setTimeout(() => setMessageStatus(null), 10000);
      } else {
        const result = await response.json();
        console.error("Error from FormBold:", result);
        setMessageStatus("error");
        timeoutRef.current = setTimeout(() => setMessageStatus(null), 5000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setMessageStatus("error");
      timeoutRef.current = setTimeout(() => setMessageStatus(null), 5000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact_container container grid">
        {/* Left: Text + Icons */}
        <div className="c_left">
          <h2 className="cL_heading">Let's Connect.</h2>
          <p className="cL_description">
            If you'd like to get in touch, feel free to reach out via my social
            media accounts or just drop me a message, and I’ll get back to you
            as soon as possible!
          </p>
          <div className="c_email-line">
            <span className="c_email">ananthumsn02@gmail.com</span>
            <a href="mailto:ananthumsn02@gmail.com" className="contact__arrow">
              <HiOutlineArrowSmRight />
            </a>
          </div>
          <div className="c_socials">
            <a
              href="https://www.instagram.com/an.msn_"
              className="cSocial_icon"
              target="_blank"
              rel="noreferrer"
            >
              <TfiInstagram />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="c_right">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="contact__form"
            noValidate
          >
            <div className="c_form-div">
              <input
                type="text"
                name="name"
                className={`c_form-input ${errors.name ? "input-error" : ""}`}
                placeholder="Your name"
                required
              />
            </div>

            <div className="c_form-div">
              <input
                type="email"
                name="email"
                className={`c_form-input ${errors.email ? "input-error" : ""}`}
                placeholder="Email"
                required
              />
              {typeof errors.email === "string" && (
                <span className="error-msg">{errors.email}</span>
              )}
            </div>

            <div className="c_form-div c_form-area">
              <textarea
                name="message"
                rows="7"
                className={`c_form-input ${
                  errors.message ? "input-error" : ""
                }`}
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="button send__button"
              disabled={messageStatus === "sending"}
            >
              {messageStatus === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send <TbSend />
                </>
              )}
            </button>

            {/* Status Message Area */}
            {messageStatus && (
              <div className={`status-message ${messageStatus}`}>
                {messageStatus === "success" && (
                  <p>Message sent successfully!</p>
                )}
                {messageStatus === "error" && (
                  <p>Failed to send message. Try again</p>
                )}
                {messageStatus === "validation_error" && (
                  <p>Please fix the errors</p>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
