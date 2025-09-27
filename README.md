
# Joni Woods - Transformation Website

A modern, responsive website built with Next.js, featuring Joni Woods' transformation programs, book information, and coaching services.

## 🌟 Features

- **Modern Design**: Clean, professional layout with beautiful gradients and animations
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Performance**: Built with Next.js for fast loading and SEO optimization
- **Interactive Elements**: Smooth scrolling, hover effects, and interactive components
- **Content Sections**:
  - Hero section with transformation programs
  - About Joni Woods with professional highlights
  - Recent media appearances
  - Book information and purchase links
  - Testimonials
  - Contact form
  - Latest blog articles

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + Custom Components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Language**: TypeScript

## 📦 Deployment

This website is configured for deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://[username].github.io/joniwoods-transformation`

### Manual Deployment

To build the static files locally:

```bash
cd app
NEXT_OUTPUT_MODE=export NODE_ENV=production yarn build
```

The static files will be generated in the `app/out` directory.

## 🛠️ Development

To run the development server:

```bash
cd app
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
joniwoods-transformation/
├── app/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── media-appearances.tsx
│   │   │   ├── services.tsx
│   │   │   ├── book.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── blog.tsx
│   │   │   ├── contact.tsx
│   │   │   └── footer.tsx
│   │   ├── ui/
│   │   └── navigation.tsx
│   ├── lib/
│   └── public/
│       └── images/
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

## 📝 License

This project is private and proprietary to Joni Woods.

## 📞 Contact

For questions about this website, please contact Joni Woods through the contact form on the website or visit [joniwoods.com](https://joniwoods.com).
