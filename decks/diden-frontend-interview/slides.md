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
transition: slide-left
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
layout: center
---

<div class="chapter">
  <div class="chapter-no">01</div>
  <h1>코가로보틱스: 양산 로봇 점검 대시보드</h1>
</div>

---
class: shot-slide
---

<h1>코가로보틱스 점검 대시보드 화면</h1>
<div class="bleed-frame">
  <FilePlaceholder name="koga-dashboard.png" />
</div>

---

<div class="stack">
  <section class="block">
    <div class="label">이슈: 양산 규모로 늘어난 점검 기록</div>
    <ul>
      <li>손 기록을 엑셀로 다시 옮김</li>
      <li>통과한 로봇을 추적하기 어려움</li>
    </ul>
  </section>
  <section v-click class="block problem">
    <div class="label">문제 정의: 기록은 흩어지고 판정 기준도 없음</div>
    <ul>
      <li>LiDAR 값이 얼마나 벗어나면 재캘리브레이션할지 기준 없음</li>
    </ul>
    <div class="chips">
      <span class="chip">LiDAR</span>
      <span class="chip">RGB-D 카메라</span>
      <span class="chip">LED·스피커</span>
      <span class="chip">구동부</span>
    </div>
  </section>
</div>

---

<div class="label head">시행착오: 판정 방식을 바꿈</div>
<div class="flow">
  <p class="step">순간값 하나로 통과 판정</p>
  <span class="arrow">→</span>
  <p class="step">출하 후 현장 이슈</p>
  <span class="arrow">→</span>
  <p class="step">일정 구간의 평균값으로 판정</p>
</div>

---

<div class="solve-stage">
  <div>
    <div class="label head">해결: 웹 점검 도구</div>
    <ul class="roomy">
      <li>웹 입력 폼, 통과 여부 먼저</li>
      <li>실시간 ROS 토픽 구독, 갱신 주기 조절 (rosbridge, roslibjs)</li>
      <li>로봇별 점검 보고서</li>
    </ul>
  </div>
  <div class="ph-row">
    <FilePlaceholder name="koga-sensor.png" />
    <FilePlaceholder name="koga-drive.png" />
  </div>
</div>

---
layout: center
---

<div class="statement">
  <div class="statement-label">배운 점</div>
  <p class="statement-line">작업자가 묻는 순서대로 화면을 짠다</p>
</div>

---
layout: center
---

<div class="chapter">
  <div class="chapter-no">02</div>
  <h1>SNS 마케팅 데이터 대시보드</h1>
</div>

---
class: shot-slide
---

<h1>SNS 마케팅 데이터 대시보드 화면</h1>
<div class="hero-shot">
  <img src="./public/sns-home.png" alt="YouTube, Instagram 성과를 한 화면에서 조회하고 비교하는 B2B 대시보드" />
</div>
<p class="caption">YouTube, Instagram 성과를 한 화면에서 조회하고 비교하는 B2B 대시보드</p>

---

<div class="stack">
  <section class="block">
    <div class="label">이슈: 2주마다 Meta, Google Ads에 하나씩 들어가 확인</div>
  </section>
  <section v-click class="block">
    <div class="label">문제 정의</div>
    <ul>
      <li>플랫폼마다 지표 정의가 다름</li>
      <li>오가닉과 광고를 같은 기간으로 못 봄</li>
      <li>화면 영역마다 조회 조건이 따로 걸림</li>
    </ul>
    <p class="chip-label">지표 유형</p>
    <div class="chips">
      <span class="chip">누적</span>
      <span class="chip">일별</span>
      <span class="chip">비율</span>
      <span class="chip">도달</span>
    </div>
  </section>
</div>

---

<div class="label head">시행착오</div>
<ul class="roomy pair-list">
  <li>원본 값을 그대로 더함 → 합계 불일치</li>
  <li>비율 지표를 평균 냄 → 값이 틀림</li>
</ul>

---

<div class="label head">해결</div>
<ul class="roomy">
  <li>백엔드 연동 API(Meta, Google Ads)</li>
  <li>지표 유형별 집계 규칙, 다른 지표는 나란히</li>
  <li>오가닉과 광고를 같은 조회 기간에</li>
  <li>Recharts 공용 차트, 조회 조건은 전역 상태 하나</li>
</ul>

---
class: shot-slide
---

<h1>추이 차트 · 기간 비교</h1>
<div class="hero-shot">
  <img src="./public/sns-compare.png" alt="기간 비교 추이 차트" />
</div>

---
class: shot-slide
---

<h1>오가닉과 광고를 같은 조회 기간에</h1>
<div class="hero-shot">
  <img src="./public/sns-list.png" alt="콘텐츠 리스트" />
</div>

---
layout: center
---

<div class="statement">
  <div class="statement-label">결과</div>
  <p class="statement-line">2주 보고서 폐지, 담당 2명에서 관리자 1명</p>
</div>

---

<div class="kicker">성능 개선: 대시보드 첫 화면</div>
<h1>1차: 이미지</h1>
<div class="symptom">증상: 콘텐츠가 많은 목록, 첫 화면이 한동안 빈 채로</div>
<div class="perf">
  <p><span class="label">원인:</span> 화면 밖 이미지까지 처음에 한꺼번에 요청</p>
  <p><span class="label">해결:</span> 첫 화면 이미지는 바로, 화면 밖만 지연 로딩 + React Server Component 초기 조회와 스켈레톤 UI</p>
  <div v-click>
    <p><span class="label">결과:</span> LCP 3.2초 → <span class="accent">2.1초</span></p>
    <LcpFigure />
    <p class="fine">크롬 개발자 도구 Lighthouse · 데스크톱 · 여러 번 측정한 평균</p>
  </div>
</div>

---

<div class="kicker">성능 개선: 대시보드 첫 화면</div>
<h1>2차: 폰트와 응답 압축</h1>
<div class="perf">
  <p><span class="label">원인:</span> 첫 화면에서 본문 폰트 원본(OTF)을 그대로 받음</p>
  <ul class="roomy">
    <li>해결 1: 본문 폰트 WOFF2 변환</li>
    <li>해결 2: 화면에 쓰는 821자만 담은 작은 폰트를 먼저, 전체 폰트는 필요할 때</li>
    <li>해결 3: 제목 폰트도 WOFF2로, 미리 받기는 유지</li>
    <li>해결 4: HTML·JS·CSS 응답 gzip 압축(첫 화면 전송량 1.17MB → 0.59MB)</li>
  </ul>
  <p class="big-result accent">0.9초</p>
  <p class="big-note">결과: LCP 0.9초(네 가지 적용 후)</p>
  <p class="fine">Lighthouse CLI · 데스크톱 시뮬레이션 · 조건별 7회 측정 중앙값 · 로컬 브랜치, 운영 미반영</p>
</div>
