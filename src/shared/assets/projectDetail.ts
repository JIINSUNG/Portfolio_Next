import { StaticImageData } from "next/image";

import 큐잉 from "./큐잉.png";
import 파인디어 from "./파인디어.png";
import 시크리또 from "./시크리또.png";
import 단짠단짠 from "./단짠단짠.png";
import 쇼트닝 from "./쇼트닝.png";
import 트리폴린 from "./EnjoyTrip.png";
import { ReactHTMLElement, ReactElement } from "react";
import { image1, image2, image3, image4 } from "@/shared/assets/findear";
import {
  qqueueing_1,
  qqueueing_2,
  qqueueing_3,
  qqueueing_4,
} from "./qqueueing";
import { secreto_1, secreto_2, secreto_3 } from "./secreto";
import { shortening } from "./shortening";
import {
  tripoline_1,
  tripoline_2,
  tripoline_3,
  tripoline_4,
  tripoline_5,
  tripoline_6,
} from "./tripoline";
import {
  danzandanzan_1,
  danzandanzan_2,
  danzandanzan_3,
  danzandanzan_4,
} from "./danzandanzan";
export type projectDetailDataType = {
  id: number; // 프로젝트 번호
  src: StaticImageData; // 이미지
  title: string; // 프로젝트 제목
  introduce: string; // 프로젝트 소개
  stack: string; // 프로젝트 기술 스택 (전체)
  mystack: string; // 프로젝트 기술 스택 (내가 맡은 부분)
  duration: string; // 프로젝트 진행 기간
  members: number; // 프로젝트 멤버 (명 수)
  attachment: {
    ucc?: string;
    notion?: string;
    github?: string;
    service?: string;
  }; // 참고 장료, 링크
  feature: string; // 프로젝트의 기능 들
  images: StaticImageData[];
  myfeature: string; // 내가 구현한 기능
  achievement: string; // 성과
  demo?: string; // 데모가 있다면 링크
};

const projectDetailData: projectDetailDataType[] = [
  {
    id: 1,
    src: 큐잉,
    title: "누구나 적용 가능한 오픈소스 대기열 시스템, 큐잉",
    stack: "FE: Next14, Typescript, Tailwind",
    mystack: "프론트엔드",
    duration: "2024.04.~2024.05. (6주간)",
    introduce: `QQueueing은 서버에 직접 설치해서 사용할 수 있는 무료 대기열 서비스입니다. 서버 프로그램이 실행 중인 곳에 설치하고, 명령어만 실행해 주면 추가 비용 없이도 누구나 코드 한 줄 추가하지 않고 대기열 시스템의 기능을 사용할 수 있습니다.
    또한 서버 트래픽 모니터링 서비스를 제공하여 서버 상태를 실시간으로 확인 할 수 있게 만들었습니다.
    `,
    members: 6,
    attachment: { github: "https://github.com/4-EVERY1/QQueueing" },
    images: [qqueueing_1, qqueueing_2, qqueueing_3, qqueueing_4],
    feature:
      "1. 소스코드 변경 없이 다운로드를 통해 적용 가능한 대기열 기능 2.타깃 url 별로 대기 및 통과 인원 현황 모니터링 화면 제공 3. 운영자의 컴퓨팅 자원과 대기열 어플리케이션의 모니터링 지표 제공 4.모바일, PC 호환 지원",
    myfeature: "프론트엔드(100%)",
    achievement:
      "FSD 파일구조에 대한 이해, 협업 프로젝트에서 Branch 전략에 대한 이해 및 적용, Next14 App router에 대한 이해 및 적용",
    demo: "", // 데모링크 있다면 적기
  },
  {
    id: 2,
    src: 파인디어,
    title: "통합 분실물 추천 플랫폼, 파인디어",
    stack: "FE : React18, Typescript, Tailwind",
    duration: "2024.04.~2024.05. (6주간)",
    mystack: "팀장, 프론트엔드 (70%)",
    introduce: `파인디어는 AI를 활용한 습득물 간편 등록 시스템과 인계 시스템, 분실,습득물의 통합조회 서비스 제공과 관리 기능과 함께 유사 습득물 매칭 서비스의 제공으로 기존의 문제점을 해결하고자 이 프로젝트를 시작하게 되었습니다. 파인디어는 분실물 정보와 등록된 습득물 정보 간의 매칭시스템을 통해 유사한 습득물을 매칭해 빠르게 물건을 찾을 수 있도록 도우며, PWA를 적용해 웹푸시 알림을 제공하여 실시간으로 안내를 받을 수 있습니다. `,
    members: 6,
    attachment: { github: "https://github.com/2TF4/findear" },
    images: [image1, image2, image3, image4],
    feature:
      "1. 네이버 간편로그인, 2. 다크모드, 3. 습득물 통합 조회, 4. AI 기반 습득물 등록, 5. 습득물 등록 및 관리, 6. 분실물 등록 및 관리, 7. 유사 습득물 매칭, 8. 쪽지 기능, 9. 웹푸시, 백그라운드 알림, 10.분실물 안전 인계 기능",
    myfeature: "팀장, 프론트엔드 (70%)",
    achievement: "반응형 웹에 대한 숙련, React에대한 학습 및 숙련, 팀장 경험",
    demo: "", // 데모링크 있다면 적기
  },
  {
    id: 3,
    src: 시크리또,
    title: "온라인 마니또 서비스, 시크리또",
    stack: "FE : Vue3, Typescript, Pinia",
    duration: "2024.02.~2024.04. (6주간)",
    introduce: `오프라인에서만 즐기던 마니또 활동을 온라인으로 옮겨 마니또, 마니띠와의 익명 채팅, 다양한 미션 제공, 마니또 활동 기록 등 다양한 서비스를 도입하여 풍요롭게 즐길 수 있도록 하였습니다.
    반응형 웹 디자인으로 모바일, 태블릿, PC 어떤 기기에서도 이용할 수 있고, SSE로 실시간 알림을 지원합니다. 이제 Secreto로 언제 어디서든 마니또 활동을 즐겨보세요!`,
    mystack: "프론트엔드 (50%)",
    images: [secreto_1, secreto_2],
    members: 6,
    attachment: {
      ucc: "https://www.youtube.com/watch?v=3CxjMOp94mw&ab_channel=%EA%B9%80%ED%98%84%EC%B0%BD",
      notion: "https://github.com/4-EVERY1/QQueueing",
    },
    feature:
      "1. 마니또 매칭 기능, 2. 방장의 게임 인원 모집 및 관리 기능, 3. 미션 관리 기능, 4.마니또 <> 마니띠간 익명 채팅 기능, 5. 마니또 타임라인 기능, 6. 마니또 칭찬, 미션 인증 게시판, 7. 마니또 유추 기능",
    myfeature: "프론트엔드(50%)",
    achievement:
      "Atomic Desingn에 대한 이해 및 적용 경험, 협업 프로젝트에서 Branch 전략에 대한 이해 및 적용, 상호 코드리뷰를 통한 협업 능력",
    demo: "", // 데모링크 있다면 적기
  },
  {
    id: 4,
    src: 단짠단짠,
    title: "대학생들 만의 안전 매칭 서비스, 단짠단짠",
    stack: "FE : React.js, Javascript, Redux",
    mystack: "프론트엔드 (30%)",
    duration: "2024.04.~2024.05. (6주간)",
    introduce: `
    웹메일 인증과 캠퍼스 인증을 통해 오직 캠퍼스가 인증된 검증된 인원만 사용 가능.
    재학생 인증, 본인인증 시스템 으로 믿을 수 있는 인원만 참여 가능
    이성 매칭 뿐 아니라 친구 매칭 서비스도 제공하여 다양한 니즈를 충족
    같은 캠퍼스 인원들끼리만 소통할 수 있던 기존 서비스를 탈피, 전국의 캠퍼스 학생들과 소통을 할 수 있게 만들었어요
    같은 학교 구성원 뿐만 아니라 사용자가 원할 시 다양한 학교의 구성원과도 매칭이 가능합니다.
    학교별, 과별 다양한 커뮤니티 채널
    `,
    images: [danzandanzan_1, danzandanzan_2, danzandanzan_3, danzandanzan_4],
    members: 5,
    attachment: {
      service:
        "https://play.google.com/store/apps/details?id=com.fiveyears.dzzdzz&hl=ko&gl=US",
      // notion:
      //   "https://abalone-dresser-75e.notion.site/b102e42d252f48af852288b297dd3770?pvs=4",
    },
    feature:
      "웹메일, 캠퍼스 인증을 통한 안전검증 시스템, 이성, 친구 매칭 서비스, 다양한 커뮤니티",
    myfeature: "프론트엔드 (30%)",
    achievement:
      "React 학습 및 적용, Redux toolkit을 활용한 전역적 상태관리, 안드로이드, 앱스토어 앱 출시, 1000명 이상의 가입자에게 서비스 제공 경험",
    demo: "", // 데모링크 있다면 적기
  },
  {
    id: 5,
    src: 쇼트닝,
    title: "심플한 URL 단축기, 쇼트닝",
    stack: "FE (Next14, Typescript)",
    mystack: "풀스택",
    duration: "2024.04.~2024.04. (3일간)",
    introduce: `쇼트닝은 긴 URL을 짧은 URL로 보기 쉽게 만들어주는 서비스입니다. 쇼트닝은 무료 서비스이며 광고가 없습니다 쇼트닝은 회원가입 필요없이 누구나 바로 서비스 이용이 가능합니다. 쇼트닝은 Web기반 서비스로 모바일, 태블릿, PC 모든 플랫폼을 지원합니다.`,
    images: [shortening],
    members: 1,
    attachment: {
      github: "https://github.com/JIINSUNG/Shortening?tab=readme-ov-file",
    },
    feature:
      "1. 긴 URL 입력시 짧은 URL로 보기 쉽게 전환, 2. 변환한 URL로 접속시 기존 URL로 리다이렉팅 시켜주는 기능 제공",
    myfeature: "FE,BE 단독 개발",
    achievement: "Next14 App router 학습, 심플한 백앤드 API 구축",
    demo: "",
  },
  {
    id: 6,
    src: 트리폴린,
    title: "여행 추천 서비스, Tripoline",
    stack: "FE : Vue3, Javascript, Pinia BE: Spring boot, MyBatis, MySQL",
    mystack: "프론트엔드(60%), 백엔드(40%)",
    duration: "2024.04.~2024.05. (6주간)",
    introduce: `트리폴린은 어렸을 적 재미나게 뛰어놀았던 트램펄린과 여행의 즐거움을 합쳐 태어난 서비스입니다. 공공 데이터와 카카오 지도 API를 활용하여 재미있는 여행 정보를 제공하는 것을 목표로 합니다. 관광지 검색, 여행 계획 관리, 날씨, 갤러리 등 다양한 기능을 제공하여 사용자들에게 더욱 즐거운 경험을 선사합니다.`,
    members: 6,
    images: [
      tripoline_1,
      tripoline_2,
      tripoline_3,
      tripoline_4,
      tripoline_5,
      tripoline_6,
    ],
    attachment: {
      ucc: "https://www.youtube.com/watch?v=XbaKYXYshVQ",
      github: "https://github.com/JIINSUNG/EnjoyTripFrontEnd",
    },
    feature:
      "1. 로그인, 회원가입, 2. 여행정보 게시판, 공지 기능, 3. 어드민 페이지, 4. 관광지 검색 5. 여행 계획, 후기 기능, 6. 마이페이지, 7. 핫플레이스, 8. 어드민 페이지, 9. 날씨 확인, 10. 전기차 충전소 확인",
    myfeature: "프론트엔드(60%), 백엔드(40%)",
    achievement:
      "SSAFY 1학기 프로젝트 최우수상, Vue3 라이브러리 학습, Spring 기초 학습",
    demo: "", // 데모링크 있다면 적기
  },
];

export default projectDetailData;
