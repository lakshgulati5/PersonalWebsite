import React from 'react';
import styles from '../../styles/Experience.module.css'; // Corrected import path

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.experienceTitle}>Experience</h2>
      {/* Sagent */}
      <div className={styles.card}>
        <h3>Sagent</h3>
        <p>Software Engineering Intern</p>
        <p>July 2024 - Present</p>
        <ul>
          <li>Collaborated on the DARA loss mitigation team as a full-stack developer, utilizing Springboot and GraphQL to
          enhance backend performance through better authentication and error handling, reducing the number of bugs</li>
          <li>Developed and tested reusable UI components in React and Storybook, greatly improving productivity through
          modular code</li>
          <li>Integrated different components as functional pages to turn Figma designs into responsive, user-friendly interfaces</li>
        </ul>
      </div>
       {/* Done Desk */}
      <div className={styles.card}>
        <h3>DoneDesk</h3>
        <p>Software Engineering Intern</p>
        <p>August 2024 - Present</p>
        <ul>
          <li>Developed the Continuing Education tracking feature for a dental SaaS platform, improving efficiency for dental
practices by automating administrative workflows, resulting in reduced manual effort and improved client
satisfaction</li>
          <li>Worked on both frontend (Bootstrap) and backend (Ruby on Rails) to refine the user interface and optimize
backend functionalities, prioritizing an intuitive design that minimizes the learning curve, increasing user retention</li>
        </ul>
      </div>
       {/* Convergent */}
      <div className={styles.card}>
        <h3>Texas Convergent</h3>
        <p>Artificial Intelligence Build Team</p>
        <p>January 2024 - August 2024</p>
        <ul>
          <li>Created <a href="https://github.com/arnavchopra1864/InfoRetrieval" target="_blank" rel="noopener noreferrer">Factflow</a>, an AI-driven web application that allows users to input research queries and receive detailed
          responses, complete with relevant sources for verification, enhancing the research process for users</li>
          <li>Developed the full stack with a React frontend and Python backend, using Retrieval-Augmented Generation (RAG)
          to minimize hallucinations and enhance the reliability of the generated responses</li>
          <li>Won best overall product at Convergent Demo Day</li>
        </ul>
      </div>
       {/* PL8 */}
      <div className={styles.card}>
        <h3>Project PL8</h3>
        <p>Electronics Team</p>
        <p>January 2024 - Present</p>
        <ul>
          <li>Contributing to the design and development of the first entirely student built street-legal car, creating innovative
          infotainment and audio systems that enhance user experience and vehicle functionality</li>
          <li>Applying theoretical knowledge from circuit theory to practical engineering challenges, ensuring that all systems
          meet performance and regulatory standards of a street car</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
