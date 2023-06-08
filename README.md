# react

리액트는 구조가 MVC, MVW 등인 프레임워크와 달리 오직 V(View)만 신경 쓰는 라이브러리이다.

## create-react-app

간단한 React 개발 환경 구성을 위해 페이스북에서 개발한 라이브러리

```console
npm install -g create-react-app
create-react-app [폴더명]
cd [생성한 폴더]
npm start
```

> 오류) 전역설치 `-g`을 했기 때문에 생긴 오류로 앞에 `sudo` 명령어를 입력한다.

#### React 프로젝트에서 Typescript 사용할 경우

```console
// 이미 있는 React 프로젝트에 설치할 경우
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

```console
// React 프로젝트를 새로 생성할 경우
npx create-react-app my-app --template typescript
```

## vite

빠르고 간결한 모던 웹 프로젝트 개발 경험에 초점을 맞춰 탄생한 빌드 도구로 CRA는 JavaScript로 구성된 Webpack을 사용하여 속도가 느린 편이다. 위와 같은 단점을 해결하기 위해 Esbuild를 기반으로 만들어진 빌드툴인 Vite를 사용하게 된다.

```console
npm create vite@latest
npm run dev
```

#### React 프로젝트에서 Typescript 사용할 경우

```console
yarn create vite [프로젝트 명] --template react-ts
```
