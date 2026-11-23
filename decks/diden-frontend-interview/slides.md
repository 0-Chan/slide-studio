---
theme: default
addons:
  - studio
title: 프론트엔드 엔지니어 김영찬입니다
info: Frontend Engineer, Robot Data Platform 지원
lang: ko
layout: default
routerMode: hash
colorSchema: light
aspectRatio: 16/9
canvasWidth: 740
fonts:
  sans: IBM Plex Sans KR
  mono: IBM Plex Mono
highlighter: shiki
transition: fade
drawings:
  persist: false
themeConfig:
  primary: '#3E6A75'
---

<div class="cover">
  <div>
    <h1>프론트엔드 엔지니어 김영찬입니다</h1>
    <p class="studio-subtitle cover-sub">Frontend Engineer, Robot Data Platform 지원</p>
  </div>
  <div class="qr-block">
    <img src="./public/resume-qr.svg" alt="이력서" />
    <span class="qr-label">이력서</span>
  </div>
</div>

---
class: agenda
---

<div class="agenda-grid">
  <h1>차례</h1>
  <ol>
    <li>
      <span class="toc-no">01</span>
      <span class="toc-name">양산 로봇 점검 대시보드</span>
    </li>
    <li>
      <span class="toc-no">02</span>
      <span class="toc-name">SNS 마케팅 데이터 대시보드</span>
    </li>
    <li>
      <span class="toc-no">03</span>
      <span class="toc-name">사내 AI 챗봇</span>
    </li>
    <li>
      <span class="toc-no">04</span>
      <span class="toc-name">AWS 인프라와 배포</span>
    </li>
    <li>
      <span class="toc-no">05</span>
      <span class="toc-name">정산 이상 징후 탐지</span>
    </li>
    <li>
      <span class="toc-no">06</span>
      <span class="toc-name">제조 현장</span>
    </li>
  </ol>
</div>

---
class: chapter
---

<div class="chapter-wrap">
  <div class="chapter-no">01</div>
  <div class="chapter-title">
    <p class="chapter-label">코가로보틱스</p>
    <h1>양산 로봇 점검 대시보드</h1>
  </div>
</div>

---
class: shot
---

<h1>점검 대시보드</h1>
<div class="frame shot-fit">
  <img src="./public/koga-dashboard.png" alt="양산 로봇 점검 콘솔 대시보드" />
  <p class="corner">양산 로봇 점검 콘솔</p>
</div>

---
class: lead
---

<h1 class="long">로봇은 늘었는데 점검 기록은<br>여전히 손으로 적고 있는 문제</h1>

---
class: list
---

<h1>이슈</h1>
<ul class="points">
  <li><span class="n">01</span><span>손으로 적은 점검 결과를 엑셀에 다시 옮겨야 했습니다</span></li>
  <li><span class="n">02</span><span>어떤 로봇이 통과했는지 한눈에 관리하기 어려웠습니다</span></li>
</ul>

<!--
양산 규모가 되자 손으로 적은 점검 결과를 다시 엑셀에 옮기고 있었다. 어떤 로봇이 통과했는지 관리하기 어려웠다.
-->

---
class: lead
---

<h1 class="long">검사 통과를 판단할 <span class="accent">기준</span>도<br>대시보드에 내장해 손쉽게 관리</h1>
<p class="example">예: LiDAR 값이 얼마나 벗어나면 재캘리브레이션할지</p>

---
class: list
---

<h1>웹 점검 도구</h1>
<ul class="points">
  <li><span class="n">01</span><span>점검 대상: LiDAR · RGB-D 카메라 · LED·스피커 · 구동부</span></li>
  <li><span class="n">02</span><span>판정은 순간값에서 구간 평균으로</span></li>
  <li><span class="n">03</span><span>통과 여부 먼저, 실시간 ROS 토픽, 로봇별 보고서</span></li>
</ul>

<!--
화면 맨 앞에 통과 여부를 두고 세부 값은 따로 둔다.
-->

---
class: shot
---

<h1>센서 점검</h1>
<div class="frame shot-fit">
  <img src="./public/koga-sensor.png" alt="LiDAR와 RGB-D 센서 점검" />
  <p class="corner">센서 점검 화면</p>
</div>

---
class: shot
---

<h1>구동부 점검</h1>
<div class="frame shot-fit">
  <img src="./public/koga-drive.png" alt="구동부 점검" />
  <p class="corner">구동부 점검 화면</p>
</div>

---
class: chapter
---

<div class="chapter-wrap">
  <div class="chapter-no">02</div>
  <div class="chapter-title">
    <p class="chapter-label">더에스엠씨</p>
    <h1 class="long">SNS 마케팅<br>데이터 대시보드</h1>
  </div>
</div>

---
class: shot
---

<h1>통합 성과</h1>
<div class="shot-stack">
  <div class="frame">
    <div class="crop">
      <img src="./public/sns-home.png" alt="YouTube, Instagram 성과를 한 화면에서 조회하고 비교하는 B2B 대시보드" />
    </div>
    <p class="corner">통합 화면</p>
  </div>
  <div class="frame">
    <img src="./public/sns-list.png" alt="콘텐츠 리스트" />
    <p class="corner">콘텐츠 리스트</p>
  </div>
</div>

---
class: list
---

<h1>기존에 일하던 방식</h1>
<ul class="points">
  <li><span class="n">01</span><span>2주마다 Meta, Google Ads에 하나씩 들어가 확인</span></li>
  <li><span class="n">02</span><span>확인할 때마다 보고서를 보냄</span></li>
  <li><span class="n">03</span><span>이 보고를 담당 2명이 맡음</span></li>
</ul>

<!--
광고주와 마케터에게 2주마다 보고서를 보내야 했다. 그때마다 Meta와 Google Ads에 각각 들어가 확인했다. 이 보고는 담당 2명이 맡았다.
-->

---
class: list
---

<h1>그대로 합치면 틀린다</h1>
<ul class="points">
  <li><span class="n">01</span><span>플랫폼마다 지표 정의가 다름</span></li>
  <li><span class="n">02</span><span>누적, 일별, 비율, 도달</span></li>
  <li><span class="n">03</span><span>더하면 합계가 안 맞고, 비율을 평균 내면 값이 틀림</span></li>
</ul>

---
class: list
---

<h1 class="long">규칙은 나누고 조회는 하나</h1>
<ul class="points">
  <li><span class="n">01</span><span>유형별 집계 규칙, 다른 지표는 나란히</span></li>
  <li><span class="n">02</span><span>오가닉과 광고는 같은 기간</span></li>
  <li><span class="n">03</span><span>Recharts 공용 차트, 조회 조건은 전역 상태 하나</span></li>
</ul>

---
class: shot
---

<h1>추이 차트 · 기간 비교</h1>
<div class="frame">
  <img src="./public/sns-compare.png" alt="기간 비교 추이 차트" />
  <p class="corner">현재 기간 실선, 비교 기간 점선</p>
</div>

---
class: shot
---

<h1 class="long">오가닉과 광고를 같은 조회 기간에</h1>
<div class="frame">
  <img src="./public/sns-list.png" alt="콘텐츠 리스트" />
  <p class="corner">콘텐츠 리스트</p>
</div>

---
class: lead
---

<h1 class="long">첫 화면이 한동안 비어 있었습니다</h1>
<ul class="points">
  <li><span class="n">01</span><span>화면 밖 이미지는 나중에 받음</span></li>
  <li><span class="n">02</span><span>초기 조회, 기다리는 동안 스켈레톤</span></li>
  <li><span class="n">03</span><span>쓰는 글자만 WOFF2, gzip 1.17MB에서 0.59MB</span></li>
</ul>

<!--
화면 밖 이미지까지 처음에 한꺼번에 요청했습니다. 첫 화면만 바로 받고, 밖은 나중에 받게 했습니다. React Server Component에서 초기 데이터를 조회하고, 기다리는 동안 스켈레톤 UI로 화면 구조와 로딩 상태를 보여 줍니다. 본문 폰트는 OTF 원본이었습니다. 화면에 쓰는 글자만 WOFF2로 먼저 받고, HTML·JS·CSS는 gzip으로 1.17MB에서 0.59MB가 됐습니다.
-->

---
class: num-slide
---

<div class="pair">
  <p class="kicker left">1차, 이미지</p>
  <p class="kicker right">2차, 폰트와 압축</p>
  <LcpFigure />
  <p class="result-line">3.2초에서 <span class="accent">0.9초</span></p>
  <p class="fine left">개발자 도구 Lighthouse, 데스크톱, 여러 번 측정한 평균</p>
  <p class="fine right">개발 직후 기준, 두 가지 적용 후. Lighthouse CLI, 데스크톱 시뮬레이션, 조건별 7회 중앙값. 로컬 브랜치, 운영 미반영</p>
</div>

---
class: recap
---

<div class="recap-lines">
  <p>2주마다 보내던 보고서는 대시보드로 대체하였습니다.</p>
  <p>담당은 2명에서 관리자 1명이 됐습니다.</p>
  <p>플랫폼마다 조회수를 세는 방식이 달랐습니다.</p>
  <p>합치기 전에 무엇을 셌는지 확인하고, 다르면 코드에서 갈라 두었습니다.</p>
</div>

---
class: chapter
---

<div class="chapter-wrap">
  <div class="chapter-no">03</div>
  <div class="chapter-title">
    <p class="chapter-label">더에스엠씨</p>
    <h1>사내 AI 챗봇</h1>
  </div>
</div>

---
class: lead
---

<h1 class="long">사내 검색과 외부 AI 모델을 한곳에서 쓰는 채팅</h1>

---
class: list
---

<h1>원인</h1>
<ul class="points">
  <li><span class="n">01</span><span>대화를 열면 모든 메시지를 한꺼번에 불러와 그림</span></li>
  <li><span class="n">02</span><span>스트리밍 중 바뀌지 않은 마크다운 블록까지 반복 렌더링</span></li>
</ul>

---
class: lead
---

<h1 class="long">최근 메시지 먼저, 스크롤하면 이전 메시지 추가</h1>

---
class: lead
---

<h1><span class="accent">21개 → 1개</span></h1>
<p class="one-line">커밋당 렌더 시간 평균 11.5ms에서 4.4ms</p>
<p class="fine">React DevTools Profiler · 개발 빌드 · 같은 더미 응답 재현 측정</p>

---
class: shot
---

<h1>적용 전</h1>
<div class="frame">
  <img src="./public/profiler-before-flame.png" alt="적용 전 Profiler. 마크다운 블록이 모두 다시 그려짐" />
</div>

---
class: shot
---

<h1>적용 후</h1>
<div class="frame">
  <img src="./public/profiler-after-flame.png" alt="적용 후 Profiler. 끝난 블록은 회색이고 하나만 색이 있음" />
</div>

---
class: recap
---

<div class="recap-lines">
  <p>느린 이유를 짐작으로 고치면 시간만 든다.</p>
  <p>숫자로 원인을 확인하고 나서야 맞는 방향이 보였다.</p>
</div>

---
class: chapter
---

<div class="chapter-wrap">
  <div class="chapter-no">04</div>
  <div class="chapter-title">
    <p class="chapter-label">더에스엠씨</p>
    <h1 class="long">AWS 인프라와 배포</h1>
  </div>
</div>

---
class: lead
---

<h1 class="long">SNS 마케팅 데이터 대시보드 배포 인프라</h1>

---
class: lead
---

<h1 class="long">배포 자동화, 실패해도 이전 버전 유지</h1>

---
class: list
---

<h1>시행착오</h1>
<ul class="points">
  <li><span class="n">01</span><span>AWS 콘솔 수작업</span></li>
  <li><span class="n">02</span><span>관리가 어긋남</span></li>
  <li><span class="n">03</span><span>Terraform. 백엔드 개발자의 기존 구성을 참고하고 코드 리뷰 받음</span></li>
</ul>

---
class: shot
---

<h1>배포 파이프라인</h1>
<div class="frame">
  <img src="./public/slide8_aws_deploy.png" alt="GitHub Actions에서 ECR, Prisma 마이그레이션, CodeDeploy, ECS Fargate로 이어지는 배포" />
</div>

---
class: shot
---

<h1>실패하면 배포를 멈추고 롤백</h1>
<div class="frame">
  <img src="./public/slide8_aws_rollback.png" alt="마이그레이션 실패 시 배포 중단과 배포 실패 시 자동 롤백" />
</div>

---
class: recap
---

<div class="recap-lines">
  <p>되돌릴 길이 있어야 자주 배포할 수 있다.</p>
</div>
<p class="badge">AWS SAA-C03 취득, 2026.10</p>

---
class: chapter
---

<div class="chapter-wrap">
  <div class="chapter-no">05</div>
  <div class="chapter-title">
    <p class="chapter-label">더에스엠씨</p>
    <h1 class="long">정산 이상 징후 탐지</h1>
  </div>
</div>

---
class: lead
---

<h1 class="long">1단계 규칙: 기준에서 크게 벗어난 정산 금액 선별</h1>

---
class: lead
---

<h1 class="long">비고란에 적힌 정당한 사유를 못 읽어 오탐이 생김</h1>

---
class: lead
---

<h1>2단계 <span class="accent">LLM</span>: 규칙에 걸린 항목의 비고란만 판단</h1>

---
class: lead
---

<h1 class="long">경고 UI와 Slack 알림</h1>

---
class: recap
---

<div class="recap-lines">
  <p>AI를 어디에 쓸지 성급하게 정하지 않았다.</p>
  <p>검증한 뒤 꼭 필요한 곳에만 최소한으로 붙였다.</p>
</div>

---
class: chapter
---

<div class="chapter-wrap">
  <div class="chapter-no">06</div>
  <div class="chapter-title">
    <p class="chapter-label">인아오리엔탈모터</p>
    <h1>제조 현장</h1>
  </div>
</div>

---
class: lead
---

<h1 class="long">제조 현장에서 협동로봇을 직접 설치하고 검증</h1>

---
class: lead
---

<div class="close">
  <h1>디든로보틱스의 로봇을 다루는 분들에게도 정말 도움이 되는 플랫폼을 제공하고 싶습니다</h1>
  <p class="close-ask">질문 받겠습니다</p>
</div>

---
class: agenda
---

<div class="agenda-grid">
  <h1>차례</h1>
  <ol>
    <li>
      <span class="toc-no">01</span>
      <span class="toc-name">양산 로봇 점검 대시보드</span>
    </li>
    <li>
      <span class="toc-no">02</span>
      <span class="toc-name">SNS 마케팅 데이터 대시보드</span>
    </li>
    <li>
      <span class="toc-no">03</span>
      <span class="toc-name">사내 AI 챗봇</span>
    </li>
    <li>
      <span class="toc-no">04</span>
      <span class="toc-name">AWS 인프라와 배포</span>
    </li>
    <li>
      <span class="toc-no">05</span>
      <span class="toc-name">정산 이상 징후 탐지</span>
    </li>
    <li>
      <span class="toc-no">06</span>
      <span class="toc-name">제조 현장</span>
    </li>
  </ol>
</div>
