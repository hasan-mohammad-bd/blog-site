import Image from 'next/image';
import React from 'react';
// import Hero from '/hero.png'
import styles from './page.module.css';                                 
import Button from '@/components/Button/Button';


const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.item}>
          <h1 className={styles.title}>Better design for your digital products.</h1>
          <p className={styles.desc}>Turing your Idea into Reality. We bring together the team for the global tech industry.</p>
          <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
      <Image src='/hero.png' width={500} height={500} className={styles.img} alt=''/>
      </div>
    </section>
  );
};

export default Home;