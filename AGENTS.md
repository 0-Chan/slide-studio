# Slide Studio 작업 지침

이 저장소는 여러 발표를 관리하는 독립 Slidev 프로젝트입니다. 발표 원본은 Markdown·Vue·CSS이며, 기본 산출물은 브라우저 발표 자료입니다.

## 작업 전 확인

- README.md, package.json, 해당 발표의 slides.md와 기존 컴포넌트를 먼저 읽습니다.
- Slidev 문법이 필요하면 .agents/skills/slidev/SKILL.md를 읽고 필요한 references만 확인합니다.
- pnpm을 사용하며 lockfile을 함께 관리합니다. 기존 Slidev 버전을 임의로 올리지 않습니다.
- 사용자 지시가 이 지침보다 우선합니다.

## 구조와 명령

- decks/<slug>/slides.md: 발표 원본. 에셋은 같은 발표의 public/에 둡니다.
- shared/: 로컬 Slidev 애드온. 공통 컴포넌트·스타일·배경·Mermaid 설정을 관리합니다.
- templates/deck/: pnpm new가 복사하는 기본 예제. 기본 구성을 바꿀 때 decks/example도 함께 확인합니다.
- pnpm new <slug>: 발표 생성. pnpm dev [slug]: 미리보기. pnpm build [slug]: 빌드.
- pnpm build는 전체 발표를 빌드합니다. 결과는 dist/<slug>/이고 노트는 제외됩니다.
- pnpm export <slug> --format pdf 또는 pptx: exports/에 생성합니다.
- node_modules, dist, exports, 캐시는 커밋하지 않습니다.

## 발표 작성

- 기본 언어는 한국어이며 한 장에 핵심 메시지 하나를 담습니다.
- 제목은 핵심이 드러나는 문장으로 쓰고 bullet은 3~5개 이내로 제한합니다.
- 슬라이드 구분자는 빈 줄로 둘러싼 ---입니다. 첫 YAML 블록은 전체 발표 설정입니다.
- 코드 블록에는 언어를 지정하고, 긴 코드는 여러 장이나 snippets로 나눕니다.
- 발표자 노트는 슬라이드 끝 HTML 주석에 적습니다. 공개 GitHub 저장소에서는 원본 노트도 공개됩니다.
- 클릭 애니메이션은 설명 순서에 필요할 때 사용합니다.
- 발표 원본을 큰 이미지 한 장으로 대체하지 않습니다.

## 디자인과 컴포넌트

- 16:9, canvasWidth 740, IBM Plex 글꼴을 기본값으로 유지합니다.
- colorSchema는 dark 또는 light를 사용합니다.
- themeConfig.primary와 themeConfig.background는 해당 발표의 강조색·CSS 배경입니다.
- deckBackground는 해당 발표 public/ 기준 상대 이미지 경로입니다.
- 공통 변경은 shared에서 하고 발표 고유 변경은 해당 발표 안에 둡니다.
- StudioCard와 StudioToc를 재사용하며 강의·회차 전용 이름을 공통 API에 넣지 않습니다.
- Mermaid는 shared/setup/mermaid.ts를 사용합니다. 일반 전역 CSS로 shadow DOM을 수정하지 않습니다.
- routerMode: hash와 하위 경로 이동 보정은 유지합니다.

## 검증

- 도구를 바꿨으면 pnpm test와 pnpm build를 실행합니다.
- 발표를 바꿨으면 해당 발표를 빌드하고 16:9에서 가독성과 클릭 진행을 확인합니다.
- 테마를 바꿨으면 dark/light, 카드·목차·코드·Mermaid를 함께 확인합니다.
- API 키, 비공개 URL, 개인정보를 넣지 않습니다.
- 새 의존성은 최소화하고, 외부 에셋을 추가할 때 출처와 라이선스를 확인합니다.
- 최종 응답에는 변경 내용·검증 결과·남은 문제·바로 실행할 명령을 간결히 적습니다.
