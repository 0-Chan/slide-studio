---
theme: default
addons:
  - studio
title: 디든로보틱스
info: 그 로봇을 다루는 일까지 쉬워야 한다고 생각합니다.
lang: ko
layout: center
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

<p class="studio-subtitle cover-kicker">사람이 하기 힘든 일을 로봇이 대신할 때,</p>

# 그 로봇을 다루는 일까지 쉬워야 한다고 생각합니다.

<!-- 대본: 추후 전달 -->

<style>
h1 {
  margin: 0;
  font-size: 2.05rem;
  line-height: 1.4;
}
</style>

---

# 로봇을 다루는 화면이 쉬워야 현장이 로봇을 씁니다

<div class="field-row">
  <p class="field-stat"><span class="field-num">6</span><span class="field-unit">개 제조 현장</span></p>
  <ul>
    <li>인아오리엔탈모터 필드 엔지니어</li>
    <li>UR, 두산로보틱스 협동로봇을 6개 제조 현장에 설치하고 검증</li>
  </ul>
</div>

<!-- 대본: 추후 전달 -->

---

# 코가로보틱스: 양산 로봇 점검 대시보드

<CaseList>
  <CaseItem v-click label="이슈" text="손으로 적은 점검 결과를 다시 엑셀에 옮김" />
  <CaseItem v-click label="문제 정의" text="얼마나 벗어나면 캘리브레이션을 다시 할지 기준이 없음" accent />
  <CaseItem v-click label="시행착오" text="순간값 판정으로 통과한 로봇이 센서 문제로 재입고, 평균값 판정으로 변경" />
  <CaseItem v-click label="해결" text="웹 입력 폼, 통과 여부 먼저, 로봇별 점검 보고서 (rosbridge, roslibjs)" />
  <CaseItem v-click label="배운 점" text="작업자가 묻는 순서대로 화면을 짠다" />
</CaseList>

<!-- 대본: 추후 전달 -->

---

# SNS 마케팅 데이터 대시보드

<CaseList>
  <CaseItem v-click label="이슈" text="2주마다 Meta, Google Ads 엑셀을 손으로 합쳐 보고서 작성" />
  <CaseItem v-click label="문제 정의" text="플랫폼마다 지표 정의가 다르고, 지표 유형마다 집계 방법이 다름" />
  <CaseItem v-click label="시행착오" text="원본 값을 더했더니 합계 불일치, 비율 지표를 평균 냈더니 오류" />
  <CaseItem v-click label="해결" text="지표 유형별 집계 규칙, 플랫폼별 지표는 나란히 표시, Recharts 공용 컴포넌트" />
  <CaseItem v-click label="결과" text="2주 보고서 폐지, 담당 2명에서 관리자 1명으로" />
</CaseList>

<!-- 대본: 추후 전달 -->

---

# 성능 개선: 대시보드 첫 화면

<div class="perf">
  <ul>
    <li><strong>원인:</strong> 화면 밖 이미지까지 처음에 요청</li>
    <li><strong>시행착오:</strong> Lambda 이미지 압축은 효과 없음, 지연 로딩 후 첫 화면 이미지 분리</li>
    <li><strong>결과:</strong> LCP 3.2초에서 2.1초 (Lighthouse)</li>
  </ul>
  <ShotPlaceholder label="스크린샷 자리: Lighthouse (마스킹 후 제공)" />
</div>

<LcpFigure />

<!-- 차트 재계산 수치: 측정 후 추가 또는 삭제 -->

<!-- 대본: 추후 전달 -->

<style>
h1 {
  margin-bottom: 0.55rem;
  font-size: 1.75rem;
}
</style>

---

# 성능 개선: 사내 AI 챗봇

<div class="perf">
  <ul>
    <li><strong>원인:</strong> 긴 대화의 메시지를 한꺼번에 불러옴</li>
    <li><strong>최근 메시지 우선 로딩:</strong> 긴 대화 첫 화면 <span class="accent">50%</span> 단축</li>
    <li><strong>마크다운 블록 메모이제이션:</strong> 스트리밍 중 렌더링 <span class="accent">70%</span> 감소 (React Profiler)</li>
  </ul>
  <ShotPlaceholder label="스크린샷 자리: React Profiler (마스킹 후 제공)" />
</div>

<!-- 대본: 추후 전달 -->

<style>
h1 {
  margin-bottom: 0.7rem;
}
</style>

---

<div class="infra-head">
  <h1>AWS 인프라와 배포</h1>
  <span class="cert-tag">AWS SAA-C03 취득</span>
</div>

<CaseList>
  <CaseItem v-click label="이슈" text="새 프로젝트의 프론트엔드 인프라, 백엔드 개발자의 Terraform이 이미 있음" />
  <CaseItem v-click label="시행착오" text="콘솔 수작업에서 Terraform으로, 백엔드 개발자에게 묻고 코드 리뷰" />
  <CaseItem v-click label="해결" text="ECS Fargate, GitHub Actions에서 ECR, ECS 배포, ALB Blue/Green 롤백" />
  <CaseItem v-click label="배운 점" text="잘 되돌릴 수 있어야 자주 배포할 수 있다" accent />
</CaseList>

<!-- 대본: 추후 전달 -->

---

# 코딩 에이전트 활용

<p class="studio-subtitle agent-line">Claude Code, Codex</p>

<div class="agent-grid">
  <StudioCard v-click title="규칙 파일" tone="accent">
    <p>프로젝트 규칙과 금지 사항을 적어 둠</p>
  </StudioCard>
  <StudioCard v-click title="작업 분할과 자동 검증" tone="sky">
    <p>여러 에이전트에 나누고 테스트와 린트로 확인</p>
  </StudioCard>
  <StudioCard v-click title="직접 리뷰" tone="emerald">
    <p>병합 전에 사람이 확인</p>
  </StudioCard>
</div>

<!-- 대본: 추후 전달 -->

---

<h1 class="map-title"><span class="map-title-rest">제가 이해한 디든로보틱스와</span> 로봇 운용자</h1>

<ExperienceMap>
  <MapPair v-click work="양산, 운영, 검증 운영 도구" experience="코가 양산 점검 대시보드" />
  <MapPair v-click work="로봇 데이터 조회, 시각화 대시보드" experience="SNS 데이터 대시보드" />
  <MapPair v-click work="실시간 모니터링, 이상 징후 알림 UI" experience="rosbridge 로봇 데이터, 챗봇 스트리밍" />
  <MapPair v-click work="데이터 표현 최적화" experience="LCP, 렌더링 개선" />
  <MapPair v-click work="현장 운영자, 검증 담당자 중심 UX" experience="인아, 코가 현장 경험" />
</ExperienceMap>

<!-- 대본: 추후 전달 -->

---
layout: center
---

# 디든로보틱스의 로봇을 다루는 분들에게도 정말 도움이 되는 플랫폼을 제공하고 싶습니다

<div class="studio-subtitle closing-line">질문 받겠습니다</div>

<!-- 대본: 추후 전달 -->

<style>
h1 {
  margin: 0;
  font-size: 1.85rem;
  line-height: 1.4;
}
</style>
