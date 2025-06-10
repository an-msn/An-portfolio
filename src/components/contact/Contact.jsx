import React, { useRef, useState } from "react";
import "./contact.css";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { TfiInstagram } from "react-icons/tfi";
import { TbSend } from "react-icons/tb";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(null); // null, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const nwErrors = {};
    const formData = new FormData(form.current);

    if (!formData.get("name").trim()) {
      nwErrors.name = true;
    }

    if (!formData.get("email").trim()) {
      nwErrors.email = true;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.get("email"))) {
      nwErrors.email = "Invalid email format";
    }

    if (!formData.get("message").trim()) {
      nwErrors.message = true;
    }

    setErrors(nwErrors);
    return Object.keys(nwErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setMessageStatus(null);

    if (!validateForm()) {
      setMessageStatus("validation_error");
      setTimeout(() => setMessageStatus(null), 3000);
      return;
    }

    emailjs
      .sendForm(
        "service_1ys3hra",
        "template_k2nq8n5",
        form.current,
        "PDq2pAwq2jtdaL6oK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus("success");
          form.current.reset();
          setTimeout(() => setMessageStatus(null), 3000);
        },
        (error) => {
          console.log(error.text);
          setMessageStatus("error");
          setTimeout(() => setMessageStatus(null), 4000);
        }
      );
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

        {/* Right: Form/Say hello*/}
        <div className="c_right">
          {/*<h3 className="c_title">Say hello</h3>*/}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form"
            noValidate
          >
            <div className="c_form-div">
              {/*<label className="c_form-tag">Name</label>*/}
              <input
                type="text"
                name="name"
                className={`c_form-input ${errors.name ? "input-error" : ""}`}
                placeholder="Your name"
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="c_form-div">
              {/*<label className="c_form-tag">Email</label>*/}
              <input
                type="email"
                name="email"
                className={`c_form-input ${errors.email ? "input-error" : ""}`}
                placeholder="Email"
              />
            </div>
            {errors.email && <span className="error-msg">{errors.email}</span>}

            <div className="c_form-div c_form-area">
              {/*<label className="c_form-tag">Project</label>*/}
              <textarea
                name="message"
                rows="7"
                className={`c_form-input ${
                  errors.message ? "input-error" : ""
                }`}
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" className="button send__button">
              Send <TbSend />
            </button>

            {messageStatus && (
              <div className={`status-message ${messageStatus}`}>
                {messageStatus === "success" && (
                  <p>Message sent successfully!</p>
                )}
                {messageStatus === "error" && (
                  <p>Failed to send message. Try again.</p>
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
