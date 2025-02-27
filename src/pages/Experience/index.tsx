import styles from "./Experience.module.css";
import cvFile from "../../assets/cford_cv.pdf";

const Experience = () => {
  const workExperience = [
    {
      company: "The Cheesecake Factory",
      location: "Chattanooga, TN",
      position: "Kitchen Support Manager | Line Cook",
      duration: "Jun 2022 - Sep 2024",
      description:
        "Managed daily kitchen operations, ensuring workflow efficiency and maintaining high food quality standards. Prepared high-quality dishes as a Sauté Cook and trained new kitchen staff.",
    },
    {
      company: "FedEx Ground",
      location: "Ooltewah, TN",
      position: "Delivery Driver",
      duration: "Sep 2021 - Jun 2022",
      description:
        "Optimized delivery routes for efficiency and ensured timely, accurate package deliveries.",
    },
    {
      company: "Redwood Personal Training",
      location: "Eugene, OR",
      position: "Personal Trainer",
      duration: "Feb 2021 - Aug 2021",
      description:
        "Managed 38 active clients, creating customized fitness plans and educating them on fitness principles.",
    },
    {
      company: "9Round Fitness",
      location: "Bend, OR",
      position: "Kickboxing Instructor",
      duration: "May 2020 - Dec 2020",
      description:
        "Led small-group kickboxing classes and supported membership and gear sales.",
    },
    {
      company: "McKee Library",
      location: "Collegedale, TN",
      position: "Periodicals Desk Associate",
      duration: "Apr 2018 - Dec 2019",
      description:
        "Managed periodical displays, digitized archival materials, and handled phone inquiries.",
    },
  ];

  const research = [
    {
      institution: "University of Tennessee, Chattanooga",
      location: "Chattanooga, TN",
      position: "Undergraduate Research Assistant",
      advisor: "Dr. Pengyuan Sun",
      duration: "Sep 2024 - Jan 2025",
      project: "An Eco-driving Algorithm with Two-Staged Advisory Speed Limits",
      description:
        "Developed eco-driving algorithms in Python to optimize traffic flow and energy efficiency. Tested algorithms in traffic simulation software, improving traffic efficiency metrics in simulated environments. Contributed to sustainable transportation research by enhancing energy-efficient driving strategies.",
    },
    {
      institution: "University of Tennessee, Chattanooga",
      location: "Chattanooga, TN",
      position: "Undergraduate Research Assistant",
      advisor: "Dr. Mengjun Xie",
      duration: "Sep 2023 - Feb 2024",
      project: "AI-Driven Study Tool for Enhanced Learning Techniques",
      description:
        "Researched effective study techniques to inform the design of an AI-driven study tool. Designed wireframes and system architecture for a web application aimed at improving learning outcomes. Built the application using React (frontend) and Flask (backend).",
    },
  ];

  const education = [
    {
      institution: "University of Tennessee, Chattanooga",
      location: "Chattanooga, TN",
      degree: "Bachelor of Science in Computer Science: Software Systems",
      graduation: "Graduated Dec 2024",
      details: "Minor: Entrepreneurship, Honors: Summa Cum Laude",
    },
    {
      institution: "Southern Adventist University",
      location: "Collegedale, TN",
      degree: "Pre-Medicine",
      duration: "Jun 2018 - May 2020",
    },
  ];

  return (
    <div className={styles.experienceContainer}>
      <section className={styles.header}>
        <h1>Professional Experience</h1>
        <a href={cvFile} download="Castle_Ford_CV.pdf" className="btn">
          Download CV
        </a>
      </section>

      <section className={styles.section}>
        <h2>Education</h2>
        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>{edu.institution}</h3>
                <p className={styles.location}>{edu.location}</p>
                <p className={styles.position}>{edu.degree}</p>
                <p className={styles.duration}>
                  {edu.graduation || edu.duration}
                </p>
                {edu.details && <p className={styles.details}>{edu.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Research Experience</h2>
        <div className={styles.timeline}>
          {research.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>{exp.institution}</h3>
                <p className={styles.location}>{exp.location}</p>
                <p className={styles.position}>
                  {exp.position}, Advisor: {exp.advisor}
                </p>
                <p className={styles.duration}>{exp.duration}</p>
                <p className={styles.project}>
                  <strong>{exp.project}</strong>
                </p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Work Experience</h2>
        <div className={styles.timeline}>
          {workExperience.map((job, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <h3>{job.company}</h3>
                <p className={styles.location}>{job.location}</p>
                <p className={styles.position}>{job.position}</p>
                <p className={styles.duration}>{job.duration}</p>
                <p className={styles.description}>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cvSection}>
        <div className={styles.cvWrapper}>
          <h2>Full Curriculum Vitae</h2>
          <p>Want to learn more about my qualifications and experience?</p>
          <a href={cvFile} download="Castle_Ford_CV.pdf" className="btn">
            Download CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default Experience;
