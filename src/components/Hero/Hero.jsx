import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>GETSOME</h1>
        <p className={styles.subtitle}>Craft Your Success Story in Every Cup</p>
        <div className={styles.cta}>
          <button className={styles.primary}>Start Your Franchise</button>
          <button className={styles.secondary}>Explore Our Coffee</button>
        </div>
      </div>
    </section>
  );
}