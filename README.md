# 오류 처리법
## CR 관련 오류 해결법

VSCode 우 하단, CRLF -> LF 바꾸기

## 처음 실행할때:
```console
배치 파일이 아닙니다.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! bam@1.0.0 start: `webpack-dev-server --open`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the bam@1.0.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\jeong\AppData\Roaming\npm-cache\_logs\2020-07-20T12_53_50_781Z-debug.log
```
해결법:
```console
npm install
```

### webpack-dev-server 오류 뜰때
1. node_modules\webpack-dev-server 폴더 삭제
2. 재설치
```console
npm install
```
[참고](https://stackoverflow.com/questions/41576446/npm-start-error-with-webpack-dev-server)

# 프로젝트 실행법
```console
npm start
```

# 다른 .js파일의 함수나 변수를 다른 .js파일에서 사용 하는 법

다른 파일에서 사용하도록 만들때:

```javascript
export 변수이름, 함수이름;
```

다른 파일에서 사용 할때:

```javascript
import { 사용할 변수나 함수이름들, 또다른 함수나 변수 이름 } from '불러올 파일 이름'
```

# 다음 진도

- character.js 클래스화

# 과제

## 7월 20일

1. 우측에서 1초마다 적이 등장함, 단 다음 조건을 만족해야함:

   - 상하 위치 랜덤
   - 움직이는 속도 랜덤(1 ~ 10)
   - 적 이미지 랜덤

2. gameCanvas뒤에 배경 달기, 조건:

   - 움직여야함
   - CSS Background Animation

3. game-btn-arrow 이동 적용


# 목표
## back end
- express (HTTP, Network)
- mysql or mongodb(NOSQL)
- webpack babel
- eslint + prettier(optional)
- rest api(HTTP, Network, concept)

## frontend
- react(redux, route)
- vue.js
- less, scss

## 박세익의 수정 TEST