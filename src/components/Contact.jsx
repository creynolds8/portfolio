import React from "react";

import "../styles/Contact.scss"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e6bce5ab-3f88-4f9b-96cf-52e5445eb76a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <a name="Contact"></a>
      <h2 className="header">Contact:</h2>
      <div className="border1 d-inline-flex flex-column w-50 my-4">
        <form onSubmit={onSubmit} className="contact-form d-flex flex-column justify-content-between">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required/>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required/>
          <label htmlFor="message">Message:</label>
          <textarea name="message" className="h-50" required></textarea>
          <span>
            <button type="submit" className="btn btn-success">Send</button>
          </span>

        </form>
        {result && <span className="mt-4">{result}</span>}
      </div>

    </>
  );
}

export default Contact;