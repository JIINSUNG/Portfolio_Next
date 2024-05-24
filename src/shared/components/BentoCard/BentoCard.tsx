import Link from "next/link";
import styles from "./BentoCard.module.css";
import Image, { StaticImageData } from "next/image";

type BentoCardProps = {
  title: string;
  duration: string;
  id: number;
  src: StaticImageData;
  stack: string;
};

export default function BentoCard({
  id,
  src,
  title,
  duration,
  stack,
}: BentoCardProps) {
  return (
    <Link href={`/project/${id}`}>
      <div className={styles.bento}>
        <Image src={src} alt="bacgkround" />
        <main className={styles.main}>
          <h1>{title}</h1>
          <h2>{stack}</h2>
          <p>{duration}</p>
        </main>
      </div>
    </Link>
  );
}
