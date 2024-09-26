import { StaticImageData } from "next/image";

import 큐잉 from "./큐잉.png";
import 파인디어 from "./파인디어.png";
import 시크리또 from "./시크리또.png";
import 단짠단짠 from "./단짠단짠.png";
import 쇼트닝 from "./쇼트닝.png";
import 트리폴린 from "./EnjoyTrip.png";
import { image1, image2, image3, image4 } from "@/shared/assets/findear";
import {
  qqueueing_1,
  qqueueing_2,
  qqueueing_3,
  qqueueing_4,
  qqueueing_architecture,
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
  feature: string[]; // 프로젝트의 기능 들
  images: StaticImageData[];
  myfeature: string[]; // 내가 구현한 기능
  achievement: string[]; // 성과
  demo?: string; // 데모가 있다면 링크
  architecture?: StaticImageData;
};

const projectDetailData: projectDetailDataType[] = [
  {
    id: 1,
    src: 큐잉,
    title: "누구나 적용 가능한 오픈소스 대기열 시스템, 큐잉",
    stack: "Next14, Typescript, Tailwind, React Query",
    mystack: "프론트엔드",
    duration: "2024.04.~2024.05. (6주간)",
    introduce: `QQueueing은 서버에 직접 설치해서 사용할 수 있는 무료 대기열 서비스입니다. 서버 프로그램이 실행 중인 곳에 설치하고, 명령어만 실행해 주면 추가 비용 없이도 누구나 코드 한 줄 추가하지 않고 대기열 시스템의 기능을 사용할 수 있습니다.
    또한 서버 트래픽 모니터링 서비스를 제공하여 서버 상태를 실시간으로 확인 할 수 있게 만들었습니다.
    `,
    members: 6,
    attachment: {
      github: "https://github.com/4-EVERY1/QQueueing",
      notion:
        "https://abalone-dresser-75e.notion.site/48479ce6bacd434d945c806bd66d490f?pvs=4",
      ucc: "https://youtu.be/znUTLj4P0EA?si=RoiUG7Q2XI353Luw",
    },
    images: [qqueueing_1, qqueueing_2, qqueueing_3, qqueueing_4],
    feature: [
      "소스코드 변경 없이 다운로드, 명령어 실행 만으로 적용 가능한 대기열 기능 제공",
      "대기열 타깃 페이지 설정 및 활성/비활성화 기능 제공",
      "타깃 url 별 대기 및 통과 인원 현황 모니터링",
      "운영자의 컴퓨팅 자원과 대기열 어플리케이션의 모니터링 지표 제공",
      "모바일, PC 호환 지원",
    ],
    myfeature: [
      "프론트엔드 (100%)",
      "서버 모니터링 페이지",
      "대기열 타겟 페이지 등록 페이지",
      "대기열 타겟 페이지 관리 페이지 (수정, 삭제, 활·비활성)",
      "대기열 상세 모니터링",
      "대기열 페이지 제작 (PC, WEB)",
      "대기열 상태 제어 로직",
      "테스트 용 웹사이트 제작",
    ],
    achievement: [
      "FSD 파일구조에 대한 이해, 협업 프로젝트에서 Branch 전략에 대한 이해 및 적용, Next14 App router에 대한 이해 및 적용",
    ],
    architecture: qqueueing_architecture,
    demo: "", // 데모링크 있다면 적기
  },
  {
    id: 2,
    src: 파인디어,
    title: "통합 분실물 추천 플랫폼, 파인디어",
    stack: "React18, Typescript, Tailwind, PWA, Zustand",
    duration: "2024.02.~2024.04. (7주간)",
    mystack: "팀장, 프론트엔드 ",
    introduce: `많은 사람들이 물건을 잃어버리지만 찾거나 찾아주는 일은 쉬운 일이 아닙니다.
    파인디어 서비스는 분실물을 좀 더 안전하고, 편리하고, 빠르게 찾아 주기 위하여 탄생하였습니다. 
    분실자는 물건을 찾기 위해 여기저기 연락을 하거나, 다양한 커뮤니티를 직접 찾아보아야 하며 물건을 보관중인 시설 관리자들은 보관하고 관리하는데 비용적, 시간적 리스크를 가지고 있는 것이 현실입니다.
    파인디어는 chatGPT AI를 활용한 습득물 간편 등록 시스템, 안전 인계 시스템, 분·습득물의 통합조회, 관리 기능과 함께 유사 습득물 매칭·알림 서비스를 제공하여 기존 분실, 습득물 관리의 문제점을 해결하고자 합니다.`,
    members: 6,
    attachment: {
      github: "https://github.com/2TF4/findear",
      notion:
        "https://abalone-dresser-75e.notion.site/0bd838be2523436a948a9a3adaad02db?pvs=4",
      ucc: "https://youtu.be/1QEuYuOmbAs?si=LspTn73WqR3LDP1Y",
    },
    images: [image1, image2, image3, image4],
    feature: [
      "네이버 소셜로그인을 통한 본인 인증 가입",
      "카카오맵 키워드 검색을 통한 빠른 관리자 등록",
      "LOST112 API를 활용한 습득물 통합 조회 서비스 (무한 스크롤, 필터링 옵션 적용)",
      "AI 기반의 습득물 등록",
      "습득물 관리 기능 (습득물 정보, 잔여 의무보관기간 안내 등)",
      "분실물 등록 및 관리",
      "분실물 정보와 유사 습득물 매칭 및 안내",
      "쪽지 기능",
      "PWA기반의 웹푸시, 백그라운드 알림",
      "분실물 안전 인계 기능",
      "다크모드",
    ],
    myfeature: [
      "팀장, 프론트엔드 (75%)",
      "네이버 소셜 로그인",
      "카카오맵 키워드 검색 기반 관리자 등록 기능",
      "습득, 분실물 통합, 필터 조회, 무한 스크롤 연동",
      "습득물 등록, 관리 페이지",
      "쪽지 기능",
      "안전 인계 기능",
      "PWA 셋팅 및 웹푸시, 백그라운드 알림 연동",
      "다크모드 연동",
      "서비스 레이아웃, 개발환경 구성",
    ],
    achievement: [
      "Jira를 활용한 팀 단위 일정관리 경험",
      "Git Branch 전략을 활용한 프로젝트 경험",
      "UI/UX를 고려한 프로젝트 기획 및 설계 경험",
      "직관성 높은 프로젝트 구조 설계를 위한 FSD (기능 분할 설계) 적용 경험",
      "프론트, 백엔드, 인프라로 역할을 나눠 개발 하며 상호 신뢰, 팀워크를 통한 커뮤니케이션 능력 향상",
      "짧은 기간내 기획, 설계, 개발, 테스트, 배포 까지 진행 하며 시간 관리 및 조직 능력 향상",
    ],
    demo: "", // 데모링크 있다면 적기
  },
  {
    id: 3,
    src: 시크리또,
    title: "온라인 마니또 서비스, 시크리또",
    stack: "Vue3, Typescript, Pinia, Tailwind",
    duration: "2024.01.~2024.02. (7주간)",
    introduce: `시크리또는 오프라인에서만 즐기던 마니또 활동을 온라인으로 옮긴 서비스입니다. 시크리또는 마니또와의 익명 채팅, 다양한 미션, 활동 히스토리 등 여러 기능을 제공하여 마니또 게임을 더욱 쉽고 재미있게 즐길 수 있도록 합니다. 반응형 웹 디자인을 채택하여 모바일, 태블릿, PC 등 모든 기기에서 원활히 이용할 수 있으며, 다양한 이벤트(미션, 공지 등)에 대한 실시간 알림도 지원합니다. 언제 어디서나 마니또 활동을 즐기며 친구나 동료들과의 관계를 더욱 돈독하게 만들 수 있도록 지원합니다.`,
    mystack: "프론트엔드",
    images: [secreto_1, secreto_2],
    members: 6,
    attachment: {
      ucc: "https://www.youtube.com/watch?v=3CxjMOp94mw&ab_channel=%EA%B9%80%ED%98%84%EC%B0%BD",
      notion: "https://abalone-dresser-75e.notion.site/49f95dd95e56417dba9871520e43765a?pvs=4",
      github: "https://github.com/yee950419/secreto"
    },
    feature: [
      "빠른 서비스 이용을 위한 소셜 로그인 지원",
      "방 생성 및 초대코드 기반의 초대 기능",
      "시스템에 의한 마니또 자동 매칭",
      "마니또, 마니띠와의 익명 채팅 제공",
      "마니또 게임간 다양한 미션, 커스텀 미션, 돌발 미션 기능 제공",
      "나의 마니또 예측 기능",
      "마니또 게임 간 활동 히스토리, 통계 제공",
      "웹소켓을 활용한 워드크라우드 기반 후기 시스템",
      "반응형 웹 디자인",
    ],
    myfeature: [
      "프론트엔드 (40%)",
      "전체 서비스 레이아웃 구성",
      "Axios 객체, interceptor 로직 구성",
      "Sever Sent Evetns 연동 및 관련 로직 구현",
      "web socket(stomp)를 이용한 익명, 단체 채팅 기능",
      "방리스트 조회 및 방 입장 로직 처리",
      "마니또 매칭시 사용자 리스트 조회 및 마니또 예측 기능",
      "게임 통계, 타임라인 기능",
      "워드 크라우드 실시간 후기 기능",
    ],
    achievement: [
      "Atomic Design에 대한 이해 및 적용 경험, 협업 프로젝트에서 Branch 전략에 대한 이해 및 적용, 상호 코드리뷰를 통한 협업 능력",
      "Git Branch 전략을 활용한 팀 단위 프로젝트 경험",
      "상호 코드 리뷰를 통한 협업 능력",
      "프로젝트 발표 경험",
    ],
    demo: "", // 데모링크 있다면 적기
  },
  {
    id: 4,
    src: 단짠단짠,
    title: "대학생들 만의 안전 매칭 서비스, 단짠단짠",
    stack: "React18, Javascript, Redux",
    mystack: "프론트엔드",
    duration: "2023.01.~2023.09.",
    introduce: `
    단짠단짠은 좀 더 안전하고 검증된 대학생 만을 위한 매칭, 커뮤니티 서비스를 위해 탄생했습니다.
    웹메일 기반의 캠퍼스 인증, PASS 기반의 본인인증을 거치기 때문에 오직 캠퍼스와 신원이 검증된  인원만 사용 가능하기 때문에 타 서비스 대비 상대방에 대한 높은 신뢰도와 안전성을 제공하는 것이 특징 입니다.  
    단순 이성 매칭만 제공하는 소개팅 어플이 아닌 친구 매칭 서비스, 동 학교 뿐만 아니라 타 학교와의 매칭과 커뮤니티 기능도 제공하기 때문에 기존 서비스들에서 아쉽다고 느끼던 다양한  수요를 충족 시켰습니다
    `,
    images: [danzandanzan_1, danzandanzan_2, danzandanzan_3, danzandanzan_4],
    members: 5,
    attachment: {
      service:
        "https://play.google.com/store/apps/details?id=com.fiveyears.dzzdzz&hl=ko&gl=US",
      // notion:
      //   "https://abalone-dresser-75e.notion.site/b102e42d252f48af852288b297dd3770?pvs=4",
    },
    feature: [
      "웹메일 인증, PASS 기반 본인인증",
      "이성 매칭, 친구 매칭 기능",
      "매칭 재화 구매 (젤리, 매칭권)",
      "커뮤니티 게시판",
      "회원 프로필 관리 기능 구현",
      "회원 프로필 시스템 구축",
      "회원 관리를 위한 어드민 페이지",
    ],
    myfeature: [
      "프론트엔드 (30%)",
      "매칭 재화(젤리, 매칭권) 구매·교환 기능",
      "이성·친구 매칭 신청 기능",
      "매칭 진행·결과 페이지",
      "매칭 히스토리 조회 기능",
      "어드민 페이지",
    ],
    achievement: [
      "React 18 학습 및 적용 경험",
      "Redux toolkit을 활용한 전역적 상태관리 경험",
      "안드로이드, 앱스토어 앱 출시 및 1000명 이상의 가입자",
      "피드백 기반의 지속적 서비스 제공 및 유지보수 경험",
      "팀 단위 개발로 협업 및 커뮤니케이션 능력 향상",
    ],
    demo: "", // 데모링크 있다면 적기
  },
  {
    id: 5,
    src: 쇼트닝,
    title: "심플한 URL 단축기, 쇼트닝",
    stack: "Next14, Typescript, module css",
    mystack: "풀스택",
    duration: "2024.04.~2024.04. (3일간)",
    introduce: `쇼트닝은 긴 URL을 짧은 URL로 보기 쉽게 만들어주는 서비스입니다. 쇼트닝은 무료 서비스이며 광고가 없습니다 쇼트닝은 회원가입 필요없이 누구나 바로 서비스 이용이 가능합니다. 쇼트닝은 Web기반 서비스로 모바일, 태블릿, PC 모든 플랫폼을 지원합니다.`,
    images: [shortening],
    members: 1,
    attachment: {
      github: "https://github.com/JIINSUNG/Shortening?tab=readme-ov-file",
      notion:
        "https://abalone-dresser-75e.notion.site/73635d383f034c00ba0ec0327ec2bc37?pvs=4",
    },
    feature: [
      "1. URL 단축 기능",
      "2. 단축 URL로 접속시 기존 URL 리다이렉팅 기능",
    ],
    myfeature: ["단독 개발 (100%)"],
    achievement: ["Next14 App router 학습, 백앤드 API 구축 및 DB 연동 경험"],
    demo: "",
  },
  {
    id: 6,
    src: 트리폴린,
    title: "여행 추천 서비스, Tripoline",
    stack: "Vue3, Tailwind, Pinia, Axios, Spring boot",
    mystack: "풀스택",
    duration: "2023.11.~2023.11. (2주간)",
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
      notion: "",
    },
    feature: [
      "로그인, 회원가입 기능",
      "공지, 자유, 여행 후기 게시판 기능",
      "관광지 검색 기능",
      "여행 계획 등록·관리 기능",
      "핫 플레이스 조회 기능",
      "회원 프로필 관리 기능",
      "관광지 찜 기능",
      "어드민 페이지",
      "지역별 날씨 조회 기능",
      "지역별 전기차 충전소 현황 조회 기능",
      "유명 관광지 갤러리 조회 기능",
      "캐러셀을 활용한 랜덤 관광지 추천",
    ],
    myfeature: [
      "풀스택 (50%)",
      "게시판 구현 (CRUD)",
      "핫 플레이스 기능",
      "마이 페이지 기능 (프로필 이미지, 회원 정보 수정)",
      "전기차 충전소 기능",
      "어드민 페이지",
      "지역별 날씨 확인 기능",
      "전국 전기차 충전소",
      "전국 유명 관광지 조회 서비스",
      "전국 관광지 갤러리 조회 서비스",
    ],
    achievement: [
      "SSAFY 1학기 프로젝트 최우수상",
      "Vue3 라이브러리 학습 및 적용",
      "Spring 기초 학습 및 적용 경험",
      "UI/UX를 고려한 프로젝트 기획 및 설계 경험",
      "짧은 기간내 기획, 설계, 개발, 시연 까지의 시간 관리 및 팀 협업 능력 향상",
    ],
    demo: "", // 데모링크 있다면 적기
  },
];

export default projectDetailData;
