import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Contact.module.css";

const sanitize = (input: string): string => {
  return input.replace(/<[^>]*>?/gm, "");
};

const encode = (data: { [key: string]: string }) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitize(value);
    setFormData((prevState) => ({
      ...prevState,
      [name]: sanitizedValue,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setFormStatus("submitting");

    // Re-sanitize data before submitting
    const sanitizedData = {
      name: sanitize(formData.name),
      email: sanitize(formData.email),
      subject: sanitize(formData.subject),
      message: sanitize(formData.message),
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...sanitizedData,
      }),
    })
      .then(() => {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setFormStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error("Error submitting the form:", error);
        setFormStatus(null);
      });
  };

  return (
    <section className={styles.contact}>
      <div className="container">
        <h1 className={styles.title}>Get In Touch</h1>
        <p className={styles.subtitle}>
          Feel free to contact me for job opportunities or collaborations.
        </p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div className={styles.infoDetails}>
                <h3>Email</h3>
                <p>cstlford@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📱</div>
              <div className={styles.infoDetails}>
                <h3>Phone</h3>
                <p>(541) 410-5196</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div className={styles.infoDetails}>
                <h3>Location</h3>
                <p>Austin, TX</p>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h3>Connect with me</h3>
              <div className={styles.socialIcons}>
                <a
                  href="https://www.linkedin.com/in/castleford"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/cstlford"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  GitHub
                </a>

                <a
                  href="https://x.com/cstlford"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                >
                  X
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactForm}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Hidden field for Netlify form handling */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field to prevent bot submissions */}
              <p className={styles.hidden}>
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className={styles.btnContainer}>
                <button
                  type="submit"
                  className={`${styles.submitBtn} ${
                    formStatus === "submitting" ? styles.submitting : ""
                  }`}
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </button>
              </div>

              {formStatus === "success" && (
                <div className={styles.successMessage}>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
