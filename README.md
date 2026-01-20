# 🌸 Luxie Photography Website

Website profesional untuk Luxie Photography - Jasa Fotografi & Videografi Premium.

![Luxie Photography](https://luxiephoto.com/og-image.jpg)

## ✨ Features

- ⚡ **High Performance** - Built with Vite for blazing fast development and optimized production builds
- 📱 **Fully Responsive** - Seamless experience across all devices (mobile, tablet, desktop)
- 🎨 **Modern Design** - Aesthetic UI with smooth animations using Framer Motion
- 🔍 **SEO Optimized** - Meta tags, structured data, and semantic HTML
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🖼️ **Optimized Images** - Lazy loading with blur placeholders
- 🎭 **Code Splitting** - Lazy loaded routes for better performance

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11
- **Routing:** React Router v6
- **Icons:** Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── OptimizedImage.jsx
│   │   └── AnimatedSection.jsx
│   ├── layout/          # Layout components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── sections/        # Page sections
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── PortfolioSection.jsx
│       ├── TestimonialsSection.jsx
│       ├── PartnersSection.jsx
│       ├── PricingSection.jsx
│       ├── ContactSection.jsx
│       └── BlogSection.jsx
├── pages/               # Page components
│   └── HomePage.jsx
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── data/                # Mock data
├── styles/              # Global styles
└── assets/              # Static assets
    └── images/
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/luxiephoto/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    500: '#ec4899', // Main pink
    600: '#db2777',
    // ...
  },
  dark: {
    900: '#0a0a0a',
    // ...
  },
  gold: '#d4af37',
}
```

### Fonts

The project uses:
- **Playfair Display** - Headings (serif)
- **Poppins** - Body text (sans-serif)

## 📱 Responsive Breakpoints

| Breakpoint | Size |
|------------|------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

## 🔧 Performance Optimizations

- **Code Splitting** - Routes are lazy loaded with React.lazy()
- **Image Optimization** - WebP format with lazy loading
- **CSS Purging** - Unused Tailwind classes removed in production
- **Compression** - Gzip and Brotli compression for assets
- **Caching** - Proper cache headers for static assets

## 📄 License

© 2024 Luxie Photography. All rights reserved.

## 📞 Contact

- **Website:** [luxiephoto.com](https://luxiephoto.com)
- **Email:** hello@luxiephoto.com
- **Instagram:** [@luxiephoto](https://instagram.com/luxiephoto)
- **WhatsApp:** +62 812-3456-7890
