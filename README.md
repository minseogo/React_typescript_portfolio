# Minseo Go Portfolio

Next.js App Router 기반으로 만든 개인 포트폴리오 사이트입니다.  
React, Next.js, TypeScript를 중심으로 구성했고, 정적 생성(SSG) 기반으로 배포합니다.

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Sass
- Lucide React
- React Icons
- Axios

## Features

- 한국어 / 영어 전환
- 프로젝트 카테고리 필터
- 반응형 레이아웃
- 포트폴리오 프로젝트 카드 구성
- SEO 메타데이터 및 Open Graph 설정
- Next.js SSG 기반 정적 페이지 생성

## Local Development

의존성 설치:

```bash
npm install
```

개발 서버 실행:

```bash
npm run dev
```

브라우저에서 확인:

```text
http://127.0.0.1:3000
```

프로덕션 빌드:

```bash
npm run build
```

프로덕션 서버 실행:

```bash
npm run start
```

## Project Structure

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Header.tsx
    HomePage.tsx
    Portfolio.tsx
  css/
    main.css
  data/
    data.json
public/
  img/
  og-image.png
  robots.txt
```

## Deployment

- GitHub
- Vercel

배포 주소:

- https://gominseo-pr.vercel.app/

## Notes

- 이 프로젝트는 기존 CRA 기반 포트폴리오를 Next.js 구조로 전환한 버전입니다.
- 현재 메인 페이지는 App Router 기준 정적 페이지로 생성됩니다.
