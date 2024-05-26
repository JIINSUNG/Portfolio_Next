import { 단짠단짠, 시크리또 } from "@/shared/assets";
import styles from "./ProjectInfoSection.module.css";
import Image from "next/image";
import { projectDetailDataType } from "@/shared/assets/projectDetail";
import { ImageCarousel } from "@/entities/imageCarousel";

type projectInfoProps = {
  projectInfo: projectDetailDataType;
};

export default function ProjectInfoSection({ projectInfo }: projectInfoProps) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>{projectInfo.title}</h1>
      </header>
      <main className={styles.main}>
        {/* pjt 정보 */}
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.titleSection}>
              <div className={styles.title}>Introduce</div>
              <div className={styles.logo}>
                <Image src={projectInfo.src} alt="로고" />
              </div>
            </div>
            <p className={styles.description}>{projectInfo.introduce}</p>
          </div>
        </article>
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.titleSection}>
              <div className={styles.title}>Info</div>
              <div className={styles.infoDetail}>
                <div className={styles.infoItem}>
                  <h1>개발 기간</h1>
                  <p>{projectInfo.duration}</p>
                </div>
                <div className={styles.infoItem}>
                  <h1>개발 언어</h1>
                  <p>{projectInfo.stack}</p>
                </div>
                <div className={styles.infoItem}>
                  <h1>담당 업무</h1>
                  <p>{projectInfo.mystack}</p>
                </div>
                <div className={styles.infoItem}>
                  <h1>참고 자료</h1>
                  <p>
                    {projectInfo.attachment.ucc && (
                      <a href={projectInfo.attachment.ucc}>UCC&nbsp;</a>
                    )}
                    {projectInfo.attachment.notion && (
                      <a href={projectInfo.attachment.notion}>노션&nbsp;</a>
                    )}
                    {projectInfo.attachment.github && (
                      <a href={projectInfo.attachment.github}>GITHUB&nbsp;</a>
                    )}
                    {projectInfo.attachment.service && (
                      <a href={projectInfo.attachment.service}>서비스링크</a>
                    )}
                  </p>
                </div>
                <div className={styles.infoItem}>
                  <h1>주요 기능</h1>
                  <p>{projectInfo.feature}</p>
                </div>
                <div className={styles.infoItem}>
                  <h1>성과</h1>
                  <p>{projectInfo.achievement}</p>
                </div>
                {projectInfo.demo && (
                  <div className={styles.infoItem}>
                    <h1>Demo</h1>
                    <p>{projectInfo.demo}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
        {/* 산출물 등 */}
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.titleSection}>
              <div className={styles.title}>Gallery</div>
              <ImageCarousel images={projectInfo.images} />
            </div>
          </div>
        </article>
        {/* ETC */}
        {/* <aside className={styles.aside}></aside> */}
      </main>
    </section>
  );
}
