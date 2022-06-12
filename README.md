# 개발 환경 세팅

## Homebrew 설치

mac에서 개발 환경을 세팅할 때, 가장 먼저 설치해야 하는 패키지 관리 프로그램

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## node 설치
```bash
brew install node
```

## node 버전 확인
```bash
node -v
v17.4.0
```

## npm 버전 확인
```bash
npm -v
8.3.1
```

## next 프로젝트 생성
```bash
npx create-next-app@latest next-practice
```

## 프로젝트 실행
```bash
npm run dev
```

## Tailwindcss 설치
```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

## Tailwindcss 초기 설정
<code>tailwindcss.config.js</code>
```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## import tailwindcss in globals.css
<code>styles/globals.css</code>
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## import tailwindcss in _app.js
<code>pages/_app.js</code>
```bash
import 'tailwindcss/tailwind.css'
```


