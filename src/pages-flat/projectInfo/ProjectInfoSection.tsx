import { 단짠단짠, 시크리또 } from "@/shared/assets";
import styles from "./ProjectInfoSection.module.css";
import Image from "next/image";

type projectInfoProps = {
  projectInfo: any;
};

export default function ProjectInfoSection({ projectInfo }: projectInfoProps) {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h1>{projectInfo.projectName}</h1>
      </header>
      <main className={styles.main}>
        {/* pjt 정보 */}
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.titleSection}>
              <div className={styles.title}>Introduce</div>
              <div className={styles.logo}>
                <Image src={시크리또} alt="로고" />
              </div>
            </div>
            <p className={styles.description}>
              오프라인에서만 즐기던 마니또 활동을 온라인으로 옮겨 마니또,
              마니띠와의 익명 채팅, 다양한 미션 제공, 마니또 활동 기록 등 다양한
              서비스를 도입하여 풍요롭게 즐길 수 있도록 하였습니다. <br />
              <br />
              반응형 웹 디자인으로 모바일, 태블릿, PC 어떤 기기에서도 이용할 수
              있고, SSE로 실시간 알림을 지원합니다. 이제 Secreto로 언제 어디서든
              마니또 활동을 즐겨보세요!
            </p>
          </div>
        </article>
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.titleSection}>
              <div className={styles.title}>Info</div>
              <div className={styles.infoDetail}>
                <div className={styles.infoItem}>
                  <h1>개발 기간</h1>
                  <p>2024.01.~2024.02. (6주)</p>
                </div>
                <div className={styles.infoItem}>
                  <h1>개발 언어</h1>
                  <p>React.js</p>
                </div>
                <div className={styles.infoItem}>
                  <h1>담당 업무</h1>
                  <p>프런트앤드</p>
                </div>
                <div className={styles.infoItem}>
                  <h1>참고 자료</h1>
                  <p>UCC, 깃허브</p>
                </div>
                <div className={styles.infoItem}>
                  <h1>주요 기능</h1>
                  <p>내용</p>
                </div>
                <div className={styles.infoItem}>
                  <h1>프로젝트 성과</h1>
                  <p>내용</p>
                </div>
                <div className={styles.infoItem}>
                  <h1>Demo</h1>
                  <p>데모가 있다면 링크 달기</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* 산출물 등 */}
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.titleSection}>
              <div className={styles.title}>Gallery</div>
              <div className={styles.imageContainer}>
                <div className={styles.imageCard}>샘플 이미지 들</div>
                <div className={styles.imageCard}>샘플 이미지 들</div>
                <div className={styles.imageCard}>샘플 이미지 들</div>
                <div className={styles.imageCard}>샘플 이미지 들</div>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.titleSection}>
              <div className={styles.title}>Videos</div>
              <div className={styles.videoContainer}>
                <div className={styles.videoCard}>샘플 영상</div>
              </div>
            </div>
          </div>
        </article>
        {/* ETC */}
        {/* <aside className={styles.aside}></aside> */}
      </main>
    </section>
  );
}
