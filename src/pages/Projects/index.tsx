import styles from "./Projects.module.css";
import shapeshift from "../../assets/shapeshift-gen.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ShapeShift",
      description:
        "A personalized health platform that leverages AI to create custom nutrition and exercise plans. Built with modern technologies and focused on delivering tailored wellness solutions.",
      image: shapeshift,
      technologies: ["React", "Django", "MySQL", "OpenAI", "Redux"],
      liveLink: "https://shapeshiftness.netlify.app",
    },
  ];

  return (
    <section className={styles.projects}>
      <div className="container">
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.subtitle}>
          Showcasing my passion for software development through these key
          projects. Each represents my technical skills and problem-solving
          approach.
        </p>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className={styles.techTags}>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
