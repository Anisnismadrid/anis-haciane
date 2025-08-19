import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_vwhvlpa",   // 🔴 Remplace par ton Service ID
      "anis",  // 🔴 Remplace par ton Template ID
      formData,
      "LzYC-F_6aq0gDjOp-"       // 🔴 Remplace par ta clé publique (User ID)
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((err) => {
      console.error(err);
      alert("❌ Failed to send message, try again.");
    });
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <h2 className="text-center text-4xl font-bold mb-10">📩 Contact Me</h2>
      
      <form 
        onSubmit={handleSubmit} 
        className="max-w-lg mx-auto bg-gray-800 p-8 rounded-xl shadow-lg space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-700 focus:outline-none"
          rows="5"
          required
        ></textarea>

        <button 
          type="submit" 
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold transition"
        >
          🚀 Send Message
        </button>
      </form>
    </section>
  );
};
