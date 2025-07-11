import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Implement backend to handle this.");
  };

  return (
    <section className="contact-page container">
      <h1>Get in Touch</h1>
      <p>We’d love to hear from you! Reach out for partnership inquiries, volunteering, or general questions.</p>
      <p>Email: info.seecto@gmail.com</p>
      <p>Phone: +8801758068640</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
