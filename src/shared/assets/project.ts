import { StaticImageData } from "next/image";
import 큐잉 from "./큐잉.png";
import 파인디어 from "./파인디어.png";
import 시크리또 from "./시크리또.png";
import 단짠단짠 from "./단짠단짠.png";
import 쇼트닝 from "./쇼트닝.png";
import 트리폴린 from "./EnjoyTrip.png";

type projectDataType = {
  id: number;
  src: StaticImageData;
  title: string;
  stack: string;
  duration: string;
};

const projectData: projectDataType[] = [
  {
    id: 1,
    src: 큐잉,
    title: "오픈소스 대기열 시스템, 큐잉",
    stack: "FE (Next14, Typescript)",
    duration: "2024.04.~2024.05. (6주간)",
  },
  {
    id: 2,
    src: 파인디어,
    title: "통합 분실물 추천 플랫폼, 파인디어",
    stack: "FE (React.js, Typescript, Zustand)",
    duration: "2024.04.~2024.05. (6주간)",
  },
  {
    id: 3,
    src: 시크리또,
    title: "온라인 마니또 서비스, 시크리또",
    stack: "FE (Vue3, Typescript, Pinia)",
    duration: "2024.04.~2024.05. (6주간)",
  },
  {
    id: 4,
    src: 단짠단짠,
    title: "대학생 안전 매칭 서비스, 단짠단짠",
    stack: "FE (React.js, Javascript, Redux)",
    duration: "2024.04.~2024.05. (6주간)",
  },
  {
    id: 5,
    src: 쇼트닝,
    title: "심플한 URL 단축기, 쇼트닝",
    stack: "FE (Next14, Typescript)",
    duration: "2024.04.~2024.05. (2일간)",
  },
  {
    id: 6,
    src: 트리폴린,
    title: "여행 추천 서비스, Tripoline",
    stack: "FE (Vue3, Javascript, Pinia)",
    duration: "2024-05-03~2024-06-02",
  },
];

export default projectData;
