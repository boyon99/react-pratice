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

## libreay

#### framer-motion

[Framer Motion](https://www.framer.com/motion/)은 리액트를 위한 웹 애니메이션, 제스처 오픈소스 라이브러리이다.

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
