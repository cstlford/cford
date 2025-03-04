import styles from "./Experience.module.css";
import cvFile from "../../assets/cford_cv.pdf";

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
      description: [
        "Built a full-stack web app with React/Redux frontend and Django/MySQL backend, integrating generative AI for personalized meal and workout plans.",
        "Engineered a responsive dashboard with daily plans and goal-tracking, deployed on Heroku and Netlify, handling authentication, data management, and AI recommendations.",
      ],
    },

    {
      title: "Eco-Driving Algorithm Research",
      technologies: ["Python", "PTV Vissim API"],
      description: [
        "Developed Python scripts based on my advisor’s research paper, integrating traffic optimization algorithms into PTV Vissim via its API, reducing congested route times by 45%.",
        "Tested and refined solutions, ensuring scalability and performance for real-world traffic simulation scenarios under tight deadlines.",
      ],
    },
    {
      title: "Learn Loop: AI Study Tool",
      technologies: ["React", "Flask"],
      description: [
        "Designed and built a React/Flask web app to enhance learning via AI-driven study techniques.",
      ],
    },
    {
      title: "Twitter Sentiment vs. Bitcoin Price Analysis",
      technologies: ["Python", " Pandas", "Matplotlib", "NLP"],
      description: [
        "Analyzed Twitter sentiment’s correlation with Bitcoin price volatility using Python (Pandas, Matplotlib, NLP), developing data pipelines and visualizations to uncover actionable market trends.",
      ],
    },
  ];
  return (
    <div className={styles.experienceContainer}>
      {/* Education Section */}
      <section className={styles.educationSection}>
        <h2 className={styles.sectionTitle}>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <h3 className={styles.institutionName}>{edu.institution}</h3>
            <ul className={styles.educationDetails}>
              {edu.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.technologies}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className={styles.projectDescription}>
              {project.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Professional Experience Section */}
      <section className={styles.experienceSection}>
        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.experienceHeader}>
              <h3 className={styles.companyName}>{exp.company}</h3>
              <span className={styles.location}>{exp.location}</span>
            </div>
            <div className={styles.positionDetails}>
              <h4 className={styles.position}>{exp.position}</h4>
              <span className={styles.duration}>{exp.duration}</span>
            </div>
            <ul className={styles.experienceDescription}>
              {exp.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Experience;
