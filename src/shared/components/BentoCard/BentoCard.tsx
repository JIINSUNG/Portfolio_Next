import Link from "next/link";
import styles from "./BentoCard.module.css";
import Image, { StaticImageData } from "next/image";

type BentoCardProps = {
  title: string;
  duration: string;
  id: number;
  src: StaticImageData;
  stack: string;
  myStack: string;
  team: string;
};

export default function BentoCard({
  id,
  src,
  title,
  duration,
  stack,
  myStack,
  team,
}: BentoCardProps) {
  return (
    <Link href={`/project/${id}`}>
      <div className={styles.bento}>
        <section className={styles.imageSection}>
          <Image src={src} alt="background" />
        </section>
        <section className={styles.abstract}>
          <p className={styles.title}>{title}</p>
          <p className={styles.duration}>{duration}</p>
          <p className={styles.stack}>{stack}</p>
          <p className={styles.myStack}>
            <span>담당 업무</span> : {myStack}
          </p>
          <p className={styles.team}>
            <span>팀 규모</span> : {team}
          </p>
        </section>
        <main className={styles.main}>
          <h1>{title}</h1>
          <h2>{stack}</h2>
          <p>{duration}</p>
        </main>
      </div>
    </Link>
  );
}
