import React from 'react';
import styles from '../../styles/Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hi. I'm Laksh</h1>
      <p>Welcome to my website.</p>
      <a href="#education" className={styles.ctaButton}>Get to know me</a>
    </section>
  );
}

export default Hero;
