'use client'

import styles from "./page.module.css";
import { ImageCard } from "@/components/imageCard/imageCard";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState('Sports')
  
  const handleClick = (activeCat: string) => {
    setCategory(activeCat)
    console.log(activeCat)
  }

  return (
    <div className={styles.master_dash}>
      <div className={styles.header}>
      <div className={styles.header_text}>
      [P A T C H E S]&nbsp;&nbsp;&nbsp;✕&nbsp;&nbsp;&nbsp; T E M P O R A R Y.T H R E A D S
      </div>

      </div>
      <div className={styles.category}>
        <div className={styles.cat_items} onClick={() => handleClick('Sports')}>SPORTS</div>
        <div className={styles.cat_items} onClick={() => {handleClick('Schools')}}>SCHOOLS</div>      
        <div className={styles.cat_items} onClick={() => {handleClick('Animals')}}>ANIMALS</div>
        <div className={styles.cat_items} onClick={() => {handleClick('Logos')}}>LOGOS</div>
      </div>
      <div className={styles.body}>
        {category === 'Logos' ? 
        <>
        <ImageCard src="/images/download.jpeg" />
        <ImageCard src="/images/download.jpeg" />
        <ImageCard src="/images/download.jpeg" />
        <ImageCard src="/images/download.jpeg" />
        <ImageCard src="/images/download.jpeg" />
        <ImageCard src="/images/download.jpeg" />
        <ImageCard src="/images/download.jpeg" />
        <ImageCard src="/images/download.jpeg" />
        <ImageCard src="/images/download.jpeg" />
        <ImageCard src="/images/download.jpeg" />
        </>
        :
        null
        }
        {category === 'Sports' ? 
        <>
        <ImageCard src="/images/sports.jpeg" />
        <ImageCard src="/images/sports.jpeg" />
        <ImageCard src="/images/sports.jpeg" />
        <ImageCard src="/images/sports.jpeg" />
        <ImageCard src="/images/sports.jpeg" />
        <ImageCard src="/images/sports.jpeg" />
        <ImageCard src="/images/sports.jpeg" />
        <ImageCard src="/images/sports.jpeg" />
        <ImageCard src="/images/sports.jpeg" />
        <ImageCard src="/images/sports.jpeg" />
        </>
        :
        null
        }
        
      </div>
    </div>
  );
}
