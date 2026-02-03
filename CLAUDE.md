# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Information

- **Project Name**: yostos-portfolio
- **Repository**: yostos/yostos-portfolio

## Git Workflow

- **Direct commits to the `main` branch are prohibited**
- Always create a feature branch for changes (e.g., `fix/issue-name`, `feature/new-feature`)
- Submit changes via Pull Request

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint checks
- gh - GitHub CLI (gh) is a command-line tool that brings GitHub's features

## Project Architecture

This is a Next.js 16 portfolio website built with the App Router architecture. The project follows a component-based structure with TypeScript and Tailwind CSS.

### Key Technologies

- **Next.js 16** with App Router for routing and SSR
- **React 19** for UI components
- **TypeScript** for type safety
- **Tailwind CSS** with daisyUI for styling
- **Three.js** with React Three Fiber for 3D graphics
- **Framer Motion** for animations
- **AWS SES** for contact form email functionality

### Architecture Overview

**App Structure (`src/app/`)**:

- Uses Next.js App Router with nested layouts
- Each route has its own `page.tsx` file
- API routes in `src/app/api/` for server-side functionality
- Contact form API endpoint at `src/app/api/contact/route.ts`

**Component Structure (`src/components/`)**:

- Reusable UI components (Header, Footer, WorkGrid, etc.)
- 3D interactive components (Cube3D using React Three Fiber)
- Specialized components (SoundCloudPlayer, NewsComponent)

**Styling System**:

- Custom daisyUI theme defined in `tailwind.config.js`
- Dark/light mode support with theme switching
- Custom fonts: M PLUS 1 Code and BerkeleyMono

**Contact Form Integration**:

- AWS SES integration for email sending
- Requires environment variables for AWS credentials
- Form validation and error handling

### Environment Variables Required

```
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
SES_REGION=ap-northeast-1
SES_FROM_EMAIL=sender@example.com
SES_TO_EMAIL=recipient@example.com
NEXT_PUBLIC_TINYLYTICS_ID=optional_analytics_id
```

### Key Files to Understand

- `src/app/layout.tsx` - Root layout with font loading and theme setup
- `src/app/page.tsx` - Main homepage with 3D cube and services
- `src/components/Cube3D.tsx` - Interactive 3D cube component
- `src/app/api/contact/route.ts` - Contact form email API endpoint
- `tailwind.config.js` - Custom theme and styling configuration

### Development Notes

- Project uses TypeScript strict mode
- ESLint configured with Next.js recommended rules
- Path aliases configured: `@/*` maps to `src/*`
- Font optimization handled by Next.js font system
- 3D graphics require WebGL support

