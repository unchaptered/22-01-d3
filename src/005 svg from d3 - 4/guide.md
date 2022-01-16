# 005 svg from d3 - 4

>
이 문서는 _2022년 1월 16일_ 에 작성되었습니다.
이 프로젝트의 소스는 다음과 같습니다.
>
1. .../src/001 template/index.html
2. .../src/001 template/custom.js

<hr>

## Goals

이 파일의 목표는 다음과 같았습니다.

1. 하나의 <svg> 안에 3개의 선 그래프를 그리는 것
2. drawLine() 과 drawFormat() 으로 모듈화 시킬 것

```javascript
function drawLine() { }
function drawFormat() { }
```

<hr>

## Result

customs.js 에는 다음의 함수가 포함되어 있습니다.

1. findMaxMount()
2. drawLine()
3. drwaFormat()

### Basic Settings

함수 호출 전에 다음의 변수를 선언해주어야 합니다.

1. <svg> 인스턴스 변수화
2. <svg> 인스턴스 크기 및 내부 사용 공간(선을 그릴 공간)

```javascript
const svgTag=d3.select("#svg__container");

const svgWidth=1000;
const svgHeight=600;

const svgWidthCanUse=svgWidth-(50*2);
const svgHeightCanUse=svgHeight-(50*2);
```

### Dataset

```javascript
const datas=[
    { target:"대상", gender:"성별", mount:"수량" },
]
```

### Function :: findMaxMount()

Linear Search 를 이용한 최댓값 탐색

```javascript
function findMaxMount(datas) {
    // process

    return datas 의 최댓값;
}
```

### Function :: drawLine()

drawLine() 은 선을 그리는 그래프이다.

1. array 는 Dataset 을 준수하는 배열입니다.
2. maxMountOfAllArray 는 그릴 배열 중에 가장 큰 값을 의미합니다.
3. color 는 선의 색상을 의미하며 기본값은 black 입니다.

```javascript
function drawLine(array, maxMountOfAllArray, color="black") {}
```

### function :: drawFormat()

darwFormat() 은 선을 제외한 양식들을 그리는 그래프이다.

1. array 는 Dataset 을 준수하는 배열입니다.
2. maxMountOfAllArray 는 그릴 배열 중에 가장 큰 값을 의미합니다.

```javascript
function drawFormat(array, maxMountOfAllArray) {}
```

<hr>

## After ...

확실히 여러 개의 그래프를 그리는데 편리하게 사용할 수 있곘지만,
외부 의존성이 심하다는 생각을 할 수밖예 없었다.

동일한 패턴으로 외부 의존성을 제거하고 다시 코드를 작성해야겠다.
