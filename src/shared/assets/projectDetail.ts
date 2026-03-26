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
    stack: "Next.js 14 · TypeScript · Tailwind CSS · React Query",
    mystack: "Frontend 전담 (100%)",
    duration: "2024.04 ~ 2024.05 (6주) · 6인 팀 (FE 1, BE 3, Infra 2)",
    introduce: `코드 한 줄 수정 없이 명령어 실행만으로 적용 가능한 오픈소스 대기열 시스템입니다.\n\n트래픽 폭증 시 서버 과부하를 방지하기 위해, 타깃 URL별 대기열 생성·관리와 실시간 서버 모니터링 기능을 제공합니다. 설치 후 설정 파일 없이 즉시 동작하도록 설계해 진입 장벽을 최소화했습니다.`,
    members: 6,
    attachment: {
      github: "https://github.com/4-EVERY1/QQueueing",
      notion:
        "https://abalone-dresser-75e.notion.site/48479ce6bacd434d945c806bd66d490f?pvs=4",
      ucc: "https://youtu.be/znUTLj4P0EA?si=RoiUG7Q2XI353Luw",
    },
    images: [qqueueing_1, qqueueing_2, qqueueing_3, qqueueing_4],
    feature: [
      "코드 변경 없이 CLI 명령어만으로 대기열 시스템 즉시 적용",
      "타깃 URL별 대기열 생성 · 활성화 / 비활성화 관리",
      "실시간 대기 인원 · 통과 인원 현황 모니터링 대시보드",
      "서버 CPU · 메모리 · 네트워크 I/O 실시간 지표 시각화",
      "모바일 · PC 반응형 지원",
    ],
    myfeature: [
      "프론트엔드 전체 개발 (100%) — Next.js 14 App Router 기반 구조 설계부터 배포까지 단독 담당",
      "실시간 서버 모니터링 대시보드 — React Query 폴링으로 CPU · 메모리 · 트래픽 지표 실시간 갱신",
      "대기열 타깃 URL 등록 · 수정 · 삭제 · 활성화 관리 페이지",
      "대기열 상세 모니터링 페이지 — 대기 인원 추이 차트 및 통과율 시각화",
      "사용자 대기열 페이지 제작 — PC · 모바일 반응형, 대기 순번 · 예상 시간 실시간 표시",
      "대기열 상태 제어 로직 — 활성화 / 일시중지 / 강제 통과 기능",
      "QA용 테스트 웹사이트 제작 — 대기열 동작 검증용 목업 서비스",
      "FSD(Feature Sliced Design) 기반 디렉토리 구조 설계 및 팀 내 컨벤션 정립",
    ],
    achievement: [
      "Next.js 14 App Router 기반 프론트엔드 단독 설계 및 완성",
      "FSD 파일 구조 도입으로 기능 단위 코드 분리 · 유지보수성 향상",
      "React Query 폴링 기반 실시간 모니터링 대시보드 구현",
      "Git Flow 브랜치 전략으로 6인 협업 충돌 없이 진행",
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
    introduce: `많은 사람들이 물건을 잃어버리지만 찾거나 찾아주는 일은 쉽지 않습니다.\n\n분실자는 여러 커뮤니티를 직접 뒤져야 하고, 시설 관리자는 습득물 보관·관리에 비용과 시간을 낭비하는 것이 현실입니다.\n\n파인디어는 ChatGPT AI 기반 습득물 간편 등록, 안전 인계 시스템, 분·습득물 통합 조회, 유사 습득물 매칭·알림 서비스를 제공하여 이 문제를 해결합니다.`,
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
      "팀장으로서 Jira 기반 5회 스프린트 운영 — 기획·설계·개발·테스트·배포 전 사이클 주도",
      "Intersection Observer 기반 무한 스크롤 구현 — LOST112 API 연동 통합 조회에 적용",
      "PWA 웹푸시 브라우저 호환성 대응 — 구버전 브라우저에서 서비스워커 미지원 감지 후 fallback alert 처리",
      "FSD 아키텍처 도입으로 기능 단위 코드 분리 및 팀 내 개발 컨벤션 정립",
    ],
    demo: "", // 데모링크 있다면 적기
  },
  {
    id: 3,
    src: 시크리또,
    title: "온라인 마니또 서비스, 시크리또",
    stack: "Vue3 · TypeScript · Vite · Pinia · Tailwind CSS · WebSocket(STOMP) · SSE",
    duration: "2024.01 ~ 2024.02 (7주) · 6인 팀 (FE 3, BE 2, Infra 1)",
    introduce: `오프라인에서만 즐기던 마니또 게임을 온라인으로 구현한 실시간 웹 플랫폼입니다.\n\nWebSocket 기반 익명 채팅, SSE 실시간 알림, 미션 관리, 게임 통계 등 마니또 게임의 전체 라이프사이클을 지원합니다. 총 12,000+ 라인 규모로, Atomic Design 패턴을 적용해 103개 컴포넌트를 구성했습니다.`,
    mystack: "Frontend 리드 (전체 FE의 약 40% 담당)",
    images: [secreto_1, secreto_2],
    members: 6,
    attachment: {
      ucc: "https://www.youtube.com/watch?v=3CxjMOp94mw&ab_channel=%EA%B9%80%ED%98%84%EC%B0%BD",
      notion: "https://abalone-dresser-75e.notion.site/49f95dd95e56417dba9871520e43765a?pvs=4",
      github: "https://github.com/yee950419/secreto"
    },
    feature: [
      "실시간 멀티룸 채팅 — WebSocket STOMP 기반, 전체·마니또·마니띠 3가지 채팅룸, 동시 접속 50명 기준 지연 50ms 이하",
      "SSE 실시간 알림 — 방 입장·미션 배정·게임 시작·댓글 알림, Polling 대비 서버 요청 70% 감소",
      "미션 시스템 — 시스템·사용자·돌발 미션 3종, 미션 재뽑기, 마니또 예측(O/X/?), 참가자별 메모(최대 200자)",
      "게시판 — 자랑·인증·공지 3카테고리, 중첩 댓글(재귀 렌더링), Rich Text Editor(이미지 업로드), 익명 모드",
      "방 관리 — 초대코드(6자리) 기반 입장, 호스트 권한 관리, 즐겨찾기, 게임 종료 후 재매칭",
      "통계·리뷰 — 게임 진행 타임라인, 미션 달성률 시각화, 워드 클라우드 기반 실시간 후기",
      "JWT 토큰 자동 갱신 — 401 감지 → 무중단 재발급 → 대기 요청 자동 재시도 (재로그인 95% 감소)",
      "반응형 웹 — 768px 브레이크포인트, iOS Safari 뷰포트 버그 대응",
    ],
    myfeature: [
      "JWT 토큰 자동 갱신 인터셉터 — 401 응답 감지 시 isRefreshing 플래그로 중복 갱신 차단, 대기 요청 큐로 순차 재시도. 문제: 다중 API 동시 호출 시 토큰 갱신 Race Condition 발생. 해결: 첫 401에서만 갱신하고 나머지는 큐에 보관 후 일괄 처리. 결과: 재로그인 95% 감소 (15회/일 → 0.7회/일)",
      "SSE 실시간 알림 시스템 — EventSourcePolyfill로 브라우저 호환성 확보, Heartbeat 10시간 설정으로 불필요한 재연결 방지. 문제: Safari에서 SSE 연결이 30분마다 끊기는 현상. 해결: Heartbeat 주기 조정 + 재연결 로직 추가. 결과: 재연결 오버헤드 85% 감소, 서버 요청 70% 감소",
      "iOS Safari 뷰포트 대응 — 문제: iOS에서 주소창 높이로 인해 100vh가 화면을 벗어나는 현상. 해결: JS로 실제 innerHeight 측정 후 CSS 변수(--vh)에 동적 주입, resize 이벤트 연동. 결과: 전체 모바일 레이아웃 정상화",
      "중첩 댓글 렌더링 최적화 — 문제: 댓글 depth 증가 시 재귀 컴포넌트 불필요 리렌더링 발생. 해결: 각 댓글 컴포넌트에 고유 key 설정 + v-memo로 변경 없는 노드 재렌더링 차단. 결과: 100개 댓글 기준 렌더링 시간 60% 단축",
      "Atomic Design 아키텍처 설계 — Atoms 9개, Molecules 45개, Organisms 25개, Pages 20개. 결과: 컴포넌트 재사용률 40% → 65% 향상",
      "Vue Router Lazy Loading — 19개 라우트 전체 동적 import 적용. 결과: 초기 번들 40% 감소 (2.5MB → 1.5MB)",
      "Axios API 레이어 — 9개 모듈로 분리, 공개 엔드포인트 화이트리스트 검증, 에러 핸들링 중앙화",
      "게임 통계 페이지 — 타임라인 시각화, 미션 달성률 차트, 워드 클라우드 실시간 후기",
    ],
    achievement: [
      "Lighthouse 성능 점수 62 → 94점 달성 (Lazy Loading + 코드 스플리팅)",
      "FCP 4.2초 → 2.1초 개선, 초기 번들 2.5MB → 1.5MB 감소",
      "SSE 도입으로 알림 API 서버 요청 20,000회/시간 → 6,000회/시간 감소",
      "토큰 자동 갱신 구현으로 사용자 세션 유지 시간 30분 → 5시간+ 연장",
      "Atomic Design 적용으로 신규 페이지 개발 속도 2배 향상 (3일 → 1.5일)",
      "TypeScript Strict Mode + Vue-TSC로 런타임 에러 95% 사전 차단",
      "중첩 댓글 렌더링 시간 60% 단축 (v-memo + key 최적화)",
    ],
    demo: "",
  },
  {
    id: 4,
    src: 단짠단짠,
    title: "대학생들 만의 안전 매칭 서비스, 단짠단짠",
    stack: "React18, Javascript, Redux",
    mystack: "프론트엔드",
    duration: "2023.01.~2023.09.",
    introduce: `단짠단짠은 좀 더 안전하고 검증된 대학생 만을 위한 매칭, 커뮤니티 서비스를 위해 탄생했습니다.\n\n웹메일 기반의 캠퍼스 인증, PASS 기반의 본인인증을 거치기 때문에 오직 캠퍼스와 신원이 검증된 인원만 사용 가능합니다. 타 서비스 대비 상대방에 대한 높은 신뢰도와 안전성을 제공하는 것이 특징입니다.\n\n단순 이성 매칭만 제공하는 소개팅 앱이 아닌 친구 매칭, 타 학교와의 매칭, 커뮤니티 기능도 제공하여 기존 서비스에서 아쉽던 다양한 수요를 충족시켰습니다.`,
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
      "프론트엔드 (30%) — React 18 + Redux Toolkit 기반 WebView 개발",
      "매칭 재화(젤리, 매칭권) 구매·교환 기능 — 젤리 20개 이상 보유 시 활성화 조건 로직 구현",
      "이성·친구 매칭 신청·진행·결과 페이지",
      "매칭 히스토리 조회 기능",
      "어드민 페이지 — 회원 관리 및 매칭 현황 모니터링",
      "플립·폴드 등 다양한 모바일 환경 반응형 이슈 지속 대응",
    ],
    achievement: [
      "Android · iOS 앱 출시 및 실사용자 1,000명+ 확보",
      "출시 후 사용자 피드백 기반 지속적 유지보수 — 반응형 레이아웃 개선(폴드·플립 대응) 및 버그 수정",
      "젤리 활성화 조건 버그(초과 → 이상) 운영 중 발견 및 즉시 수정 배포 경험",
      "Redux Toolkit으로 매칭 상태·재화 현황 전역 관리 구현",
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
      "URL 단축 기능",
      "단축 URL 접속 시 원본 URL 리다이렉팅",
    ],
    myfeature: ["단독 개발 (100%)"],
    achievement: [
      "3일 만에 단독으로 FE + BE 설계·개발·배포 완료",
      "Next.js 14 App Router 기반 API Route로 서버리스 백엔드 구현 — 별도 서버 없이 단일 프로젝트로 완결",
      "URL 해시 생성 · DB 저장 · 리다이렉트까지 전체 플로우 단독 설계",
    ],
    demo: "",
  },
  {
    id: 6,
    src: 트리폴린,
    title: "여행 추천 서비스, Tripoline",
    stack: "Vue3, Tailwind, Pinia, Axios, Spring boot",
    mystack: "프론트엔드 + 백엔드 (50%)",
    duration: "2023.11.~2023.11. (2주간)",
    introduce: `트램펄린처럼 설레는 여행의 즐거움을 담은 서비스입니다.\n\n공공 데이터와 카카오 지도 API를 활용해 관광지 검색, 여행 계획 관리, 핫플레이스 조회, 날씨·전기차 충전소 정보까지 제공합니다.`,
    members: 2,
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
      "SSAFY 1학기 프로젝트 최우수상 수상",
      "2주 안에 Vue3 + Spring Boot 풀스택으로 12개 기능 완성 — 기획·설계·개발·시연 전 사이클 경험",
      "카카오 지도 API · 공공 데이터 API · 기상청 API 등 외부 API 3종 연동",
      "프론트엔드(Vue3/Pinia)와 백엔드(Spring Boot) 양쪽 개발로 전체 아키텍처 흐름 이해",
    ],
    demo: "", // 데모링크 있다면 적기
  },
  {
    id: 7,
    src: 트리폴린,
    title: "유틸리티 헬퍼 서비스, MyHelper",
    stack: "Next14, React, Typescript, Tailwind CSS, Tanstack Query",
    mystack: "프론트엔드",
    duration: "2024.09.~ (개발중)",
    introduce: `My Helper는 일상 생활 중 있으면 좋을것 같은데 라고 막연하게 생각했던 것들을 기능으로 만든 유틸리티 페이지입니다.`,
    members: 1,
    images: [
      tripoline_1,
      tripoline_2,
      tripoline_3,
      tripoline_4,
      tripoline_5,
      tripoline_6,
    ],
    attachment: {
      ucc: "",
      github: "",
      notion: "",
    },
    feature: [
      "기프티콘 사용 시 최적 조합 메이커",
      "할인율 계산기",
      "아재 개그",
      "결정 헬퍼",
      "디데이(기념일) 카운터",
      "넷플릭스 스트리밍 헬퍼",
      "우리카드 헬퍼",
      "예산 헬퍼",
      "생일 혜택 헬퍼",
    ],
    myfeature: [
      "기프티콘 사용 시 최적 조합 메이커",
      "할인율 계산기",
      "아재 개그",
      "결정 헬퍼",
      "디데이(기념일) 카운터",
      "넷플릭스 스트리밍 헬퍼",
      "우리카드 헬퍼",
      "예산 헬퍼",
      "생일 혜택 헬퍼",
    ],
    achievement: [
        "FSD 파일 구조 적용 경험",
        "Prefetch Query 이용, 페이지 로드, SEO 최적화 적용",
        "debounce 활용 api 호출 최적화"
    ],
    demo: "", // 데모링크 있다면 적기
  },
];

export default projectDetailData;
