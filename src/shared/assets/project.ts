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
  myStack: string;
  team: string;
};

const projectData: projectDataType[] = [
  {
    id: 1,
    src: 큐잉,
    title: "오픈소스 대기열 서비스, 큐잉",
    stack: "Next14, Typescript, Tailwind, React Query",
    duration: "2024.04.~2024.05. (6주간)",
    myStack: "프론트엔드",
    team: "6명",
  },
  {
    id: 2,
    src: 파인디어,
    title: "분실물 통합 관리 플랫폼, 파인디어",
    stack: "React18, Typescript, Tailwind, PWA, Zustand",
    duration: "2024.02.~2024.04. (7주간)",
    myStack: "팀장, 프론트엔드",
    team: "6명",
  },
  {
    id: 3,
    src: 시크리또,
    title: "온라인 마니또 서비스, 시크리또",
    stack: "Vue3, Typescript, Pinia, Tailwind",
    duration: "2024.01.~2024.02. (7주간)",
    myStack: "프론트엔드",
    team: "6명",
  },
  {
    id: 4,
    src: 단짠단짠,
    title: "대학생 안전 매칭 서비스, 단짠단짠",
    stack: "React18, Javascript, Redux",
    duration: "2023.01.~2023.09.",
    myStack: "프론트엔드",
    team: "5명",
  },
  {
    id: 5,
    src: 쇼트닝,
    title: "심플한 URL 단축기, 쇼트닝",
    stack: "Next14, Typescript, module css",
    duration: "2024.04.~2024.04. (3일간)",
    myStack: "프론트, 백엔드",
    team: "단독 개발",
  },
  {
    id: 6,
    src: 트리폴린,
    title: "여행정보 제공 서비스, Tripoline",
    stack: "Vue3, Tailwind, Pinia, Axios, Spring boot",
    duration: "2023.11.~2023.11. (2주간)",
    myStack: "팀장, 프론트, 백엔드",
    team: "2명",
  },
  {
    id: 7,
    src: 트리폴린,
    title: "유틸리티 헬퍼 서비스, MyHelper",
    stack: "Next14, Tailwind, React Query",
    duration: "2024.09.~ (개발중)",
    myStack: "프론트엔드",
    team: "단독 개발",
  },
];

export default projectData;
