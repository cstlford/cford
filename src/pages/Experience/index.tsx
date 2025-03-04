import styles from "./Experience.module.css";
import shapeshift from "../../assets/shapeshift-gen.png";
import btc from "../../assets/btc.png";
import eco from "../../assets/eco-driving visual.jpg";

const Experience = () => {
  const experience = [
    {
      company: "University of Tennessee, Chattanooga",
      location: "Chattanooga, TN",
      position: "Undergraduate Research Assistant",
      duration: "Sep 2023 - Jan 2025",
      description: [
        "Delivered Python-based traffic optimization and AI study tools, integrating advanced algorithms and APIs for real-world applications.",
        "Achieved measurable outcomes, including 45% reduction in traffic congestion and enhanced learning outcomes, under tight deadlines.",
      ],
    },
    {
      company: "The Cheesecake Factory",
      location: "Chattanooga, TN",
      position: "Kitchen Support Manager",
      duration: "Jun 2022 - Sep 2024",
      description: [
        "Led kitchen operations, trained 10+ staff, and streamlined workflows, sharpening leadership and problem-solving skills under pressure.",
      ],
    },
  ];

  const education = [
    {
      institution: "University of Tennessee, Chattanooga",
      details: [
        "Bachelor of Science in Computer Science: Software Systems, Minor in Entrepreneurship",
        "Honors: Summa Cum Laude",
        "GPA: 3.91/4.0",
        "Graduated: December 2024",
      ],
    },
  ];

  const projects = [
    {
      title: "ShapeShift: Generative AI for Nutrition & Exercise",
      technologies: ["React", "Redux", "Django", "MySQL"],
      description:
        "Built a full-stack web app with React/Redux frontend and Django/MySQL backend, integrating generative AI for personalized meal and workout plans. Engineered a responsive dashboard with daily plans and goal-tracking, deployed on Heroku and Netlify, handling authentication, data management, and AI recommendations.",
      liveLink: "https://shapeshiftness.netlify.app",
      image: shapeshift,
    },

    {
      title: "Eco-Driving Algorithm Research",
      technologies: ["Python", "PTV Vissim API"],
      description:
        "Developed Python scripts based on my advisor's research paper, integrating traffic optimization algorithms into PTV Vissim via its API, reducing congested route times by up to 45%. Tested and refined solutions, ensuring scalability and performance for real-world traffic simulation scenarios under tight deadlines.",

      image: eco,
    },

    {
      title: "Twitter Sentiment vs. Bitcoin Price Analysis",
      technologies: ["Python", " Pandas", "Matplotlib", "NLP"],
      description: [
        "Analyzed Twitter sentiment's correlation with Bitcoin price volatility using Python (Pandas, Matplotlib, NLP), developing data pipelines and visualizations to uncover actionable market trends.",
      ],
      image: btc,
      liveLink:
        "https://colab.research.google.com/drive/1UNc608n9gCKRG8CgRhVjfx0lhPbLRcAT?usp=sharing",
    },
    {
      title: "Learn Loop: AI Study Tool",
      technologies: ["React", "Flask"],
      description:
        "Designed and built a React/Flask web app to enhance learning via AI-driven study techniques.",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Experience</h1>
      <section className={styles.education}>
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <h3>{edu.institution}</h3>
            <ul>
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className={styles.projects}>
        <h2>Projects</h2>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {project.image && (
                <div className={styles.projectImage}>
                  <a href="https://shapeshiftness.netlify.app/" target="_blank">
                    <img src={project.image} alt={project.title} />
                  </a>
                </div>
              )}
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
      </section>

      <section className={styles.experience}>
        <h2>Professional Experience</h2>
        {experience.map((job, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.jobHeader}>
              <h3>{job.position}</h3>
              <span>{job.duration}</span>
            </div>
            <div className={styles.jobDetails}>
              <h4>
                {job.company} | {job.location}
              </h4>
              <ul>
                {job.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experience;
