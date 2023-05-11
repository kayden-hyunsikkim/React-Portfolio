import React, { useState } from "react";
//import { validateEmail } from "../utils/helpers";
import errorIcon from "../components/assets//error.png";
import sendIcon from "../components/assets/send.png";
import Footer from "../components/Footer";

import '../styles/Contact.css';


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [messageSent, setMessageSent] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // check to see if the field is empty. If so send an error message.
    if (!name || !email || !message) {
      setMessageSent("");
      setErrorMessage("Please enter all the fields.");
      // exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    // check to see if the email is not valid
    //if (!validateEmail(email)) {
    //  setMessageSent("");
    //  setErrorMessage("Email is invalid.");
    //  return;
    //}

    // If everything is good, clear out the input after a successful sending.
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
    setMessageSent(`Hello ${name}! Your message has been sent`);
  };

  return (
    <div>
      <div id='form'>
        <h1 className="title">Send a Message</h1>
        <div className="email-div">
          <p>
            Contact me at <span>rlagustlr122@naver.com</span> or through the following form.
          </p>
        </div>

        <form className="form">
          {/* -------------------Fill out name------------------  */}
          <div className="input-div">
            <label htmlFor="name">Name : </label>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Hyunsik kim"
            />
          </div>

          {/* -------------------Fill out emaill------------------  */}
          <div className="input-div">
            <label htmlFor="email">Email : </label> 
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="rlagustlr122@naver.com"
            />
          </div>

          {/* -------------------Fill out message------------------  */}
          <div className="input-div">
            <label htmlFor="message">Message : </label> 
            <textarea
              value={message}
              name="message"
              lable="Message"
              onChange={handleInputChange}
              type="text"
              placeholder="message..."
            />
          </div>

          {/* -------------------submit btn------------------  */}
          <div className="send">
            <button 
              className="send-btn"
              type="button"
              onClick={handleFormSubmit}
              onChange={handleInputChange}
            >
              Send
            </button>
          </div>

          {/* -------------------error message------------------  */}
          {errorMessage && (
            <div>
              <p className="error-text">
                <img
                  alt="alert"
                  style={{ display: "inline" }}
                  src={errorIcon}
                  className="error-icon"
                />
                {errorMessage}
              </p>
            </div>
          )}

          {/* -------------------message sent------------------  */}
          {messageSent && (
            <div>
              <p className="send-text">
                {messageSent}{" "}
                <img
                  alt="send"
                  style={{ display: "inline" }}
                  src={sendIcon}
                  className="send-icon"
                />
              </p>
            </div>
          )}
        </form>
      </div>
      <Footer currentPage="Contact" />
    </div>
    
  );
}