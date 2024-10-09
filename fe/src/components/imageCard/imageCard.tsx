import Image from 'next/image';
import styles from './imageCards.module.css';

export const ImageCard = ({ src }: { src: string }) => {
  return (
    <div className={styles.master_imgCard}>
      <div className={styles.image}>
        <Image src={src} alt="Patch" width={200} height={200} />
      </div>
      <div className={styles.patch_name}>
        #2453641
      </div>
    </div>
  );
};
