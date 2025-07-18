import React, { useRef, useState } from "react";
import "./contact.css";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { TfiInstagram } from "react-icons/tfi";
import { TbSend } from "react-icons/tb";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null); // null, 'sending', 'success', 'error'
  const [errors, setErrors] = useState({});

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const validateForm = () => {
    const nwErrors = {};
    const formData = new FormData(form.current);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name) {
      nwErrors.name = true;
    }

    if (!email) {
      // Set to true for required error (will trigger red border but no message)
      nwErrors.email = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      // Set to a string only for the format error (will trigger red border AND message)
      nwErrors.email = "Invalid email format";
    }

    if (!message) {
      nwErrors.message = true;
    }

    setErrors(nwErrors);
    return Object.keys(nwErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessageStatus(null);
    setErrors({});

    if (!validateForm()) {
      setMessageStatus("validation_error");
      setTimeout(() => setMessageStatus(null), 3000);
      return;
    }

    setMessageStatus("sending");
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        console.log(result);
        setMessageStatus("success");
        form.current.reset();
        setTimeout(() => setMessageStatus(null), 3000);
      } else {
        console.error("Error from Web3Forms:", result);
        setMessageStatus("error");
        setTimeout(() => setMessageStatus(null), 4000);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setMessageStatus("error");
      setTimeout(() => setMessageStatus(null), 4000);
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
            <input type="hidden" name="access_key" value={accessKey} />
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission from Portfolio"
            />
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            ></input>

            <div className="c_form-div">
              <input
                type="text"
                name="name"
                className={`c_form-input ${errors.name ? "input-error" : ""}`}
                placeholder="Your name"
                required
              />
              {/* No error message, only red border */}
            </div>

            <div className="c_form-div">
              <input
                type="email"
                name="email"
                className={`c_form-input ${errors.email ? "input-error" : ""}`}
                placeholder="Email"
                required
              />
              {/*error msg- invalid email format */}
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
              {/* No error message, only red border */}
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

            {messageStatus && (
              <div className={`status-message ${messageStatus}`}>
                {messageStatus === "success" && (
                  <p>Message sent successfully! </p>
                )}
                {messageStatus === "error" && (
                  <p>Failed to send message. Try again</p>
                )}
                {messageStatus === "validation_error" && (
                  <p>Please fix the errors </p>
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
