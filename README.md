# Learning to D3

이 저장소는 2022년 1월 11일부터 x월 xx일까지(x 일) 간,<br>
데이터 시각화에 대한 개념 및 기술을 배우기 위하여 작성된 코드들을 담고 있습니다.

- Velog unchaptered / https://velog.io/@unchapterd/series/Dev-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%8B%9C%EA%B0%81%ED%99%94

<hr>

## 설치

D3 를 사용하는 방법은 2가지가 있습니다.

1. **Node.js** 를 이용한 설치 
2. **cdn** 등의 외부 스크립트 임포트


### 모듈

>
npm install d3

### 외부 스크립트

```html
<script src="https://d3js.org/d3.v5.min.js"></script>
```

<hr>

## 파일 구조

이 프로젝트는 다음의 파일 구조를 가지고 있습니다.

>
┌ index.html ─────── index 파일
├ index.js ───────── src 하위 index.html 파일 링크 생성 주입기(to index.html)
├ (package.json , ...)
├ css/
├ ├ index.css ────── 기본
├ ├ reset.css ────── 데이터 리셋
├ ├ header.css ───── header 컴포넌트
├ ├ footer.css ───── footer 컴포넌트
├ └ main.css ─────── main 컴포넌트
├ src/
├ ├ 000 template
├ ├ ├ index.html ─── 샘플 디자인
├ ├ ├ datas.js ────── 연령대별 데이터
├ ├ └ customs.js ──── 연령대,성별별 데이터
├ ├ 001 svg from js ─────── 가로 막대기 그래프 ───────── datas.js
├ ├ 002 svg from d3 ─────── 가로 막대기 그래프 ───────── datas.js
├ ├ 003 svg from d3 - 2 ─── 세로 막대기 그래프 (3종) ─── customs.js
├ ├ 004 svg from d3 - 3 ─── 선 그래프 (1종) ──────────── data.js
├ ├ 005 svg from d3 - 4 ─── 선 그래프 (3종) ──────────── customs.js
├ ├ 006 svg from d3 - 5 ─── 선 그래프 (3종) ──────────── customs.js
├ ├ 007 svg from d3 - 6 ─── 선 그래프 (3종) ──────────── customs.js
├ ├  .......... 그 이후로 많은 파일

<hr>

## 이론

D3 를 사용하기 위해서 다음의 지식이 필요합니다.

1. 기본적인 HTML, CSS 에 대한 지식
2. 기본적인 JavaScript 에 대한 지식
2.1. Modern JavaScript 에 대한 숙련된 실력
2.2. Object Restructuring, Sprea, Rest 에 대한 사전 지식
3. SVG Tags 에 대한 지식

자세한 내용은 Velog 포스트를 참고해주세요.
[Velog unchaptered / Dev 데이터 시각화 시리즈](https://velog.io/@unchapterd/series/Dev-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%8B%9C%EA%B0%81%ED%99%94)
)

<hr>

## 결과물

### 가로 막대기 그래프

SVG from JS (testing)
SVG from D3 (proto-type)

### 세로 막대기 그래프

SVG from D3 - 2 (proto-type)

### 가로 선 그래프

SVG from D3 - 3 (proto-type)
SVG from D3 - 4 (beta-type)
SVG from D3 - 5 (rebuild-type)
SVG from D3 - 6 (final-type)
