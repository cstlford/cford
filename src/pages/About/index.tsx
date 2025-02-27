import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Python", level: 80 },
    { name: "React.js", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "SQL", level: 70 },
    { name: "Git", level: 85 },
    { name: "Responsive Design", level: 90 },
  ];

  return (
    <section className={styles.about}>
      <div className="container">
        <h1 className={styles.title}>About Me</h1>

        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p>
              Hello, I’m Castle Ford! I’m a recent Computer Science graduate
              from the University of Tennessee, Chattanooga, where I earned my
              Bachelor of Science in Software Systems with Summa Cum Laude
              honors. I’m passionate about building innovative, user-friendly
              solutions that make a real impact, and I’m excited to kickstart my
              career in a forward-thinking company that’s changing the world.
            </p>
            <p>
              I thrive in collaborative environments where I can learn from
              awesome teams and contribute to meaningful projects. My experience
              spans full-stack development, with a focus on technologies like
              React, Django, and Express, and I’ve worked on projects ranging
              from AI-driven study tools to eco-driving algorithms. I love
              tackling challenges that require creative problem-solving and have
              a knack for designing intuitive interfaces that enhance user
              experiences.
            </p>
            <p>
              When I’m not coding, you’ll find me exploring new ways to
              grow—whether it’s through entrepreneurship, fitness, or taking
              online classes. I’m a lifelong learner who’s always eager to dive
              into new technologies and methodologies, and I’m looking for a
              role where I can continue to grow while making a difference.
            </p>

            <p>
              If you’re part of an innovative team that values creativity,
              collaboration, and a drive to change the world, I’d love to
              connect! Let’s build something amazing together.
            </p>
            <p>
              Feel free to <Link to="/contact">reach out</Link> or check out my{" "}
              <Link to="/projects">projects</Link> and{" "}
              <Link to="/experience">experience</Link> for more about what I can
              bring to your team.
            </p>
          </div>

          <div className={styles.skillsSection}>
            <h2>My Skills</h2>
            <div className={styles.skillsList}>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillProgress}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
