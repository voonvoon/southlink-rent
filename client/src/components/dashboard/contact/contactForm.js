import React, { useState } from "react";
import { toast } from "react-toastify";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      phone,
      description,
    };

    const response = await fetch("https://formspree.io/f/xayzobyn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
        toast.success("Thank you, we will reply to you soon!",{ position: toast.POSITION.TOP_CENTER});
        setName("");
        setEmail("");
        setPhone("");
        setDescription("");
    } else {
        toast.error("Oops! Please try again", { position: toast.POSITION.TOP_CENTER});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        <p className="form-details">Name:</p>    
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <p className="form-details">Email:</p>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <p className="form-details">Phone:</p>
        <input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          pattern="[0-9,-,+]*"
          required
        />
      </label>
      <br />
      <label>
        <p className="form-details">Inquiry:</p> 
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          style={{ minHeight:"100px", maxHeight: "150px" }}
          required
        />
      </label>
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
