# slide-studio

한 저장소에서 여러 발표를 만드는 Slidev 작업실입니다. Markdown으로 내용을 쓰고 공통 Vue 컴포넌트로 목차와 카드를 구성합니다. 글꼴과 레이아웃은 공유하며 색상과 배경은 발표마다 고릅니다.

## 시작하기

Node.js 22.18 이상과 pnpm 10.27.0을 사용합니다.

Slidev 52 플러그인의 호환성을 위해 Markdown 파서는 14.3.0으로 고정합니다. 별도 업그레이드 시 생성·빌드·내보내기를 함께 검증하세요.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

기본 예제는 http://localhost:3030 에서 열립니다. Markdown을 저장하면 미리보기에 반영됩니다. 브라우저를 자동으로 열려면 `pnpm dev --open`을 사용하세요.

```bash
pnpm new my-talk
pnpm dev my-talk
```

발표 이름은 영문 소문자·숫자·하이픈을 사용합니다. 기존 발표 이름으로 생성하면 오류를 내고 원본을 보존합니다.

## 폴더 구조

```text
decks/
  example/
    slides.md            # 8장짜리 기본 예제
    public/              # 이 발표의 이미지·영상
shared/                  # 로컬 Slidev 애드온
  components/            # StudioCard, StudioToc
  setup/                 # 색상 토큰·Mermaid·하위 경로 이동
  style.css
  global-bottom.vue
templates/deck/          # 새 발표 생성 원본
scripts/                 # 발표 생성·실행·빌드·내보내기
.agents/skills/slidev/    # 저장소에 포함된 Slidev 스킬
```

발표를 추가해도 package.json을 수정할 필요가 없습니다. 공통 애드온은 pnpm 워크스페이스로 연결되고 각 발표의 `addons: [studio]`에서 사용합니다. 이 저장소 밖의 원본 프로젝트나 파일에 의존하지 않습니다.

## 작성과 디자인

`slides.md`에서 빈 줄로 둘러싼 `---`가 슬라이드를 나눕니다. 파일 맨 위 YAML에는 발표 전체 설정을 적습니다.

```yaml
---
theme: default
addons:
  - studio
title: 나의 발표
routerMode: hash
colorSchema: dark
aspectRatio: 16/9
canvasWidth: 740
fonts:
  sans: IBM Plex Sans KR
  mono: IBM Plex Mono
highlighter: shiki
transition: slide-left
themeConfig:
  primary: '#f5a524'
  background: 'linear-gradient(135deg, #12121d, #29324c)'
---
```

기본은 어두운 그라데이션·흰 본문·amber 강조입니다. `colorSchema: light`로 바꾸면 밝은 면과 짙은 글자로 전환됩니다. 강조색 기본값도 진한 amber로 바뀝니다. `themeConfig.primary`를 직접 지정하면 그 색이 우선하므로 밝은 모드에 맞는 색을 골라주세요.

`themeConfig.background`는 CSS 단색이나 그라데이션입니다. 예를 들어 밝은 발표에는 `background: '#fafaf9'`, `primary: '#4338ca'`를 지정할 수 있습니다. IBM Plex 글꼴은 Slidev의 기본 Google Fonts 공급자를 사용하므로 처음 불러올 때 인터넷 연결이 필요하며, 연결이 없으면 브라우저 대체 글꼴을 사용합니다.

배경 이미지는 발표의 public 폴더에 넣고 별도 키로 지정합니다.

```yaml
deckBackground: images/background.png
```

이 경우 이미지는 `decks/my-talk/public/images/background.png`입니다. 어두운 모드에서는 검정, 밝은 모드에서는 흰 오버레이가 덮입니다. 일반 이미지는 예제처럼 `<img src="./public/example.svg" ...>`로 참조하면 하위 경로 빌드에도 적용됩니다.

### 공통 컴포넌트

```html
<StudioToc :items="['문제', '근거', '다음 행동']" :current="2" />

<StudioCard title="핵심 메시지" tone="accent">
  짧은 근거를 적습니다.
</StudioCard>
```

목차의 current는 1부터 시작하며 생략하면 전체 목록을 보여줍니다. 카드의 tone은 `accent`, `violet`, `sky`, `emerald`, `rose`, `neutral`입니다. 두 카드는 `grid grid-cols-2 gap-5` 컨테이너 안에 두면 비교 화면을 만들 수 있습니다.

코드는 언어를 지정한 코드 블록으로, 도식은 Mermaid로 작성합니다. Mermaid의 공통 색상은 발표 설정을 따릅니다. 개별 Mermaid 코드 블록의 옵션으로 덮어쓸 수도 있습니다.

`<v-clicks>`와 `v-click`으로 순서대로 공개하고 발표자 노트는 각 슬라이드 끝의 HTML 주석에 적습니다. 개발 서버의 발표자 화면에서 노트를 볼 수 있습니다. 이 GitHub 저장소는 공개이므로 Markdown의 원본 노트도 공개됩니다.

## 빌드

```bash
pnpm build
pnpm build my-talk
pnpm build --base /talks/
```

전체 빌드는 `decks/*/slides.md`를 자동 탐색하고 생성물 전용 `dist/`를 다시 만듭니다. 삭제한 발표의 예전 결과도 정리됩니다. 결과는 `dist/<slug>/`, 기본 URL 경로는 `/<slug>/`입니다. 공통 접두 경로를 지정하면 `/talks/<slug>/`가 됩니다. 정적 서버에서는 이 출력 폴더를 해당 URL 아래에 배치하세요.

각 발표는 별도 Slidev 프로세스로 빌드해 설정과 에셋이 서로 섞이지 않도록 합니다. 정적 빌드는 발표자 노트를 제외합니다. `routerMode: hash`와 공통 애드온의 경로 보정은 하위 경로에서 페이지 이동과 새로고침을 지원합니다.

이 저장소는 웹 호스팅이나 자동 배포를 설정하지 않습니다.

## PDF·PPTX 내보내기

Chromium이 없으면 먼저 설치합니다.

```bash
pnpm browser:install
pnpm export example --format pdf
pnpm export example --format pptx
```

결과는 `exports/example.pdf`와 `exports/example.pptx`입니다. 클릭 단계도 각각 남기려면 `--with-clicks`를 추가합니다. 기본 내보내기는 각 슬라이드의 최종 클릭 상태를 담습니다.

PDF·PPTX는 공유용 보조 산출물입니다. PPTX는 슬라이드 화면을 이미지로 담으며, PowerPoint에서 본문과 도식을 개별 요소로 편집하는 원본 형식은 아닙니다.

## 검증과 에이전트 지침

```bash
pnpm test
pnpm build
```

도구 변경 시 생성·중복 방지·발표 탐색·출력 경로 테스트를 실행합니다. 발표는 16:9에서 글자 크기·카드·이미지·Mermaid·클릭 진행을 확인하세요. 공통 디자인을 바꿀 때는 밝은 모드와 어두운 모드를 함께 확인합니다.

풀 리퀘스트와 `main` 푸시에서는 GitHub Actions가 `pnpm test`와 `pnpm build`를 실행합니다.

에이전트 작업 지침은 `AGENTS.md`, Slidev 문법은 `.agents/skills/slidev/SKILL.md`를 참고합니다. 예제와 생성 템플릿의 기본 구성을 바꾸면 두 곳을 함께 갱신하세요.

## 출처

공통 디자인과 작업 흐름은 [0-Chan/git-github-101](https://github.com/0-Chan/git-github-101)의 Slidev 부분에서 추출·일반화했습니다. 기존 강의 본문과 전용 에셋은 포함하지 않습니다.

[Slidev](https://github.com/slidevjs/slidev)와 포함된 Slidev 스킬의 출처는 `THIRD_PARTY_NOTICES.md`에 정리되어 있습니다.
