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
        {/* 프로젝트 개요 - 두괄식: 핵심 정보 먼저 */}
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <h2 className={styles.sectionTitle}>프로젝트 개요</h2>
            <div className={styles.overviewGrid}>
              <div className={styles.logoContainer}>
                <div className={styles.logo}>
                  <Image src={projectInfo.src} alt="로고" />
                </div>
              </div>
              <div className={styles.keyInfoGrid}>
                <div className={styles.keyInfoItem}>
                  <h3>개발 기간</h3>
                  <p>{projectInfo.duration}</p>
                </div>
                <div className={styles.keyInfoItem}>
                  <h3>개발 언어</h3>
                  <p>{projectInfo.stack}</p>
                </div>
                <div className={styles.keyInfoItem}>
                  <h3>담당 업무</h3>
                  <p>{projectInfo.mystack}</p>
                </div>
                <div className={styles.keyInfoItem}>
                  <h3>참고 자료</h3>
                  <div className={styles.linkGroup}>
                    {projectInfo.attachment.ucc && (
                      <a href={projectInfo.attachment.ucc} target="_blank" rel="noopener noreferrer">UCC</a>
                    )}
                    {projectInfo.attachment.notion && (
                      <a href={projectInfo.attachment.notion} target="_blank" rel="noopener noreferrer">노션</a>
                    )}
                    {projectInfo.attachment.github && (
                      <a href={projectInfo.attachment.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
                    )}
                    {projectInfo.attachment.service && (
                      <a href={projectInfo.attachment.service} target="_blank" rel="noopener noreferrer">서비스</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.descriptionBox}>
              <p className={styles.description}>{projectInfo.introduce}</p>
            </div>
          </div>
        </article>

        {/* 성과 및 주요 기능 - 두괄식: 성과를 먼저 보여줌 */}
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <h2 className={styles.sectionTitle}>주요 성과</h2>
            <section className={styles.achievementSection}>
              {projectInfo.achievement.map((achievement, idx) => (
                <p key={idx}>{achievement}</p>
              ))}
            </section>
          </div>
        </article>

        {/* 주요 기능 */}
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <h2 className={styles.sectionTitle}>주요 기능</h2>
            <section className={styles.featureSection}>
              {projectInfo.feature.map((feature, idx) => (
                <p key={idx}>{feature}</p>
              ))}
            </section>
          </div>
        </article>

        {/* 담당 기능 */}
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <h2 className={styles.sectionTitle}>담당 기능</h2>
            <section className={styles.myFeatureSection}>
              {projectInfo.myfeature.map((feature, idx) => (
                <p key={idx}>{feature}</p>
              ))}
            </section>
          </div>
        </article>

        {/* 프로젝트 스크린샷 */}
        {projectInfo.images && projectInfo.images.length > 0 && (
          <article className={styles.content}>
            <div className={styles.wrapper}>
              <h2 className={styles.sectionTitle}>프로젝트 스크린샷</h2>
              <ImageCarousel images={projectInfo.images} />
            </div>
          </article>
        )}

        {/* Demo (선택사항) */}
        {projectInfo.demo && (
          <article className={styles.content}>
            <div className={styles.wrapper}>
              <h2 className={styles.sectionTitle}>데모</h2>
              <p className={styles.demoText}>{projectInfo.demo}</p>
            </div>
          </article>
        )}
      </main>
    </section>
  );
}
