import React, { useState } from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to handle button disable
  const [showPopover, setShowPopover] = useState(false); // State to handle popover visibility

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Sending...");
    setIsSubmitting(true); // Disable the submit button
    const formData = new FormData(event.target);

    // Append access key
    formData.append("access_key", "ad586a9f-e5cd-4e0f-b726-0040a038a849");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        console.log("Form Submitted Successfully");
        event.target.reset();
        setShowPopover(true); // Show popover message
        setTimeout(() => setShowPopover(false), 5000); // Hide popover after 2 seconds
      } else {
        setResult("Submission Failed: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }

    // Re-enable the submit button after 2 seconds
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input 
          className="hover btn" 
          type="submit" 
          value="Submit" 
          disabled={isSubmitting} // Disable button if submitting
        />
      </form>
      <span>{result}</span>

      {/* Popover Window */}
      {showPopover && (
        <div className={styles.popover}>
          Thanks for contacting me! I will get back to you ASAP.
        </div>
      )}
    </section>
  );
}

export default Contact;
