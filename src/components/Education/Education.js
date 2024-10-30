import React from 'react';
import styles from '../../styles/Education.module.css';

function Education() {
    return (
      <section id="education" className={styles.education}>
        <h2 className={styles.educationTitle}>Education</h2>
        <div className={styles.card}>
          <h3>University of Texas at Austin</h3>
          <p>B.S. in Electrical and Computer Engineering</p>
          <p>GPA: 3.65</p>
          <p>Expected Graduation: May 2027</p>
        </div>
        {/* Add more entries if needed */}
      </section>
    );
  }
  
  export default Education;
  
