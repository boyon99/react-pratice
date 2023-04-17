# react

리액트는 구조가 MVC, MVW 등인 프레임워크와 달리 오직 V(View)만 신경 쓰는 라이브러리이다.

## create-react-app

간단한 React 개발 환경 구성을 위해 페이스북에서 개발한 라이브러리

1. 설치한다.

```console
npm install -g create-react-app
```

> 오류) 전역설치 `-g`을 했기 때문에 생긴 오류로 앞에 `sudo` 명령어를 입력한다.

2. 리액트 프로젝트를 구성한다.

```console
create-react-app [폴더명]
cd [생성한 폴더]
npm start
```

<br/>

## vite

빠르고 간결한 모던 웹 프로젝트 개발 경험에 초점을 맞춰 탄생한 빌드 도구로 CRA는 JavaScript로 구성된 Webpack을 사용하여 속도가 느린 편이다. 위와 같은 단점을 해결하기 위해 Esbuild를 기반으로 만들어진 빌드툴인 Vite를 사용하게 된다.

```console
npm create vite@latest
npm run dev
```

## libreay

#### framer-motion와 react-spring

[Framer Motion](https://www.framer.com/motion/)와 [react-spring](https://www.react-spring.dev/) 리액트를 위한 웹 애니메이션, 제스처 오픈소스 라이브러리이다.

#### react-icons

[react-icons](https://react-icons.github.io/react-icons/icons?name=ai)은 아이콘을 지원하는 라이브러리이다.

```console
npm add react-icons
```

```js
import { 아이콘 이름 } from 'react-icons/md'

const icons = () => {
  return (
    <>
      <MdAdd />
    </>
  )
}
```

#### react-query와 swr

[react-query](https://github.com/TanStack/query#readme)는 서버의 값을 클라이언트에 가져오거나, 캐싱, 값 업데이트, 에러핸들링 등 비동기 과정을 더욱 편하게 하는데 사용되는 라이브러리이다.

[swr](https://swr.vercel.app/ko)이란 HTTP 캐시 무효화 전략에서 유래된 데이터 페칭을 위한 리액트 라이브러리이다.
