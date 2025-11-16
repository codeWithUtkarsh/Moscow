# Atlantis.AI - MVP Development Platform

A stunning, dark-themed professional website for Atlantis.AI - transforming startup ideas into working MVPs at lightning speed. Built with Next.js, TypeScript, and Framer Motion.

## Features

- **Modern Tech Stack**: Next.js 16, TypeScript, Tailwind CSS, Framer Motion
- **Dark Sharp Gradients**: Professional dark theme with vibrant accent gradients
- **High-Quality Images**: Curated Unsplash images throughout the site
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Fully Responsive**: Works seamlessly on all devices (desktop, tablet, mobile)
- **Type-Safe**: Full TypeScript implementation for better DX and fewer bugs
- **Interactive Elements**:
  - Floating animation cards with parallax effects
  - Gradient backgrounds with glowing orbs
  - Animated progress bars and counters
  - Glass morphism UI elements
  - Smooth scroll animations
- **Functional Signup Form**: Complete form validation with TypeScript types
- **Performance Optimized**: Next.js Image optimization, lazy loading, SSR ready

## Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom dark gradients
- **Framer Motion**: Advanced animations and transitions
- **React 19**: Latest React features
- **Next/Image**: Optimized image loading from Unsplash

## File Structure

```
.
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main page with all sections
│   └── globals.css     # Global styles and utilities
├── components/
│   ├── Navbar.tsx      # Responsive navigation
│   ├── Hero.tsx        # Hero section with images
│   ├── Features.tsx    # Features grid with visuals
│   ├── HowItWorks.tsx  # Step-by-step process
│   ├── Offer.tsx       # Special offer section
│   ├── Signup.tsx      # Form with validation
│   └── Footer.tsx      # Footer with links
├── public/             # Static assets
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## Sections

1. **Hero Section**: Dramatic dark background with floating image cards and animated stats
2. **Features Section**: 6 feature cards with background images and hover effects
3. **How It Works**: 3-step alternating layout with large images and progress bars
4. **Special Offer**: Eye-catching offer card with value breakdown and urgency
5. **Signup Section**: Two-column layout with benefits and comprehensive form validation
6. **Footer**: Multi-column footer with social links and gradient accents

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**

```bash
npm install
```

2. **Run Development Server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**

```bash
npm run build
npm start
```

### Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Color Scheme

### Dark Gradients
- **Background**: Deep blacks and dark purples (`#0a0a0f` → `#1a1a2e`)
- **Accent Gradient**: Indigo to Purple to Pink (`#6366f1` → `#8b5cf6` → `#d946ef`)
- **Secondary Gradients**: Dark purple and blue variations

### Custom Utilities
- **Glass Effect**: `glass-effect` - Frosted glass morphism
- **Glow Effect**: `glow-effect` - Glowing box shadows
- **Text Glow**: `text-glow` - Glowing text shadows

## Fonts

- **Primary**: Inter (Google Fonts) - Body text
- **Display**: Space Grotesk (Google Fonts) - Headings and titles

## Images

All images are loaded from Unsplash with optimization via Next/Image:
- Team collaboration
- Analytics dashboards
- Coding environments
- Business meetings
- Technology backgrounds

Images are configured in `next.config.js` with remote patterns for Unsplash.

## Customization

### Changing Colors

Edit `tailwind.config.ts` to modify the gradient colors:

```typescript
backgroundImage: {
  'gradient-accent': 'linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%)',
}
```

### Modifying Content

All content is in the component files:
- `components/Hero.tsx` - Hero section text and stats
- `components/Features.tsx` - Feature descriptions
- `components/HowItWorks.tsx` - Process steps
- `components/Offer.tsx` - Special offer details
- `components/Signup.tsx` - Form fields and validation

### Form Submissions

The form currently stores submissions in `localStorage`. To integrate with your backend:

1. Update the `handleSubmit` function in `components/Signup.tsx`
2. Replace the mock API call with your actual endpoint:

```typescript
const response = await fetch('/api/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The app can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Railway
- Render

Simply connect your Git repository and the platform will auto-detect Next.js.

## Performance Features

- **Next.js Image Optimization**: Automatic image resizing and WebP conversion
- **Framer Motion**: GPU-accelerated animations
- **Code Splitting**: Automatic with Next.js App Router
- **SSR Ready**: Can be rendered server-side for better SEO
- **TypeScript**: Catch errors before runtime

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states for all interactive elements
- High contrast text (WCAG AA compliant)
- Responsive text sizing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Environment Variables

Create a `.env.local` file for environment-specific configuration:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Future Enhancements

- [ ] Add backend API integration
- [ ] Implement email notifications
- [ ] Add testimonials section
- [ ] Create blog with MDX
- [ ] Add case studies page
- [ ] Implement live chat
- [ ] Add analytics dashboard
- [ ] Multi-language support (i18n)

## License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ using Next.js, TypeScript, and Framer Motion by the Atlantis.AI Team
