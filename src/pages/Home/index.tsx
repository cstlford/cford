import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import profileImage from "../../assets/profile.jpg";

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1>
              Hello, I'm <span className={styles.highlight}>Castle Ford</span>.
              <br />I build{" "}
              <span className={styles.highlightBlue}>digital experiences</span>.
            </h1>
            <p>
              I'm a Computer Science graduate specializing in web development
              and software engineering. I create elegant solutions to complex
              problems with a focus on user experience and clean code.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/projects" className="btn">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src={profileImage}
                alt="Castle Ford"
                className={styles.profileImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
