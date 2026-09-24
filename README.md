# Shivam Pandey - Developer Portfolio

A modern, production-ready developer portfolio website showcasing projects, skills, and experience with cutting-edge web technologies and 3D animations.

## Features

- **3D Interactive Hero Section**: WebGL-powered 3D scene with particle effects and interactive elements
- **Dark/Light Theme Toggle**: Seamless theme switching with persistent preferences
- **20+ Featured Projects**: Complete showcase of all projects with live links and technology tags
- **Skills & Experience**: Animated skill progression bars and professional timeline
- **Contact Modal**: Interactive contact form with direct communication options
- **Smooth Animations**: Framer Motion and GSAP-powered transitions and microinteractions
- **Fully Responsive**: Mobile-first design that works flawlessly on all devices
- **Performance Optimized**: Fast loading times and optimized animations for all devices
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Advanced animations
- **GSAP** - Animation library
- **Three.js & react-three-fiber** - 3D graphics and WebGL

### Components & UI
- **shadcn/ui** - High-quality UI components
- **Lucide Icons** - Beautiful, consistent icons
- **Radix UI** - Accessible primitive components

### Deployment
- **Vercel** - Recommended hosting platform
- **Next.js Deployment** - Zero-config deployment

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Update Personal Information

Edit the following files to personalize the portfolio:

#### `/components/header.tsx` - Social Links
Update social media links in the `socialLinks` array:
```typescript
const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  // ... other links
];
```

#### `/components/hero.tsx` - CV Download Link
Replace the CV download link:
```typescript
<a
  href="https://drive.google.com/file/d/YOUR_CV_ID/view"
  target="_blank"
  rel="noopener noreferrer"
>
```

#### `/lib/projects.ts` - Add/Modify Projects
Update the `projects` array to showcase your own projects:
```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Project description',
    liveUrl: 'https://project-url.com',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'web-app',
  },
  // ... more projects
];
```

#### `/lib/experience.ts` - Work Experience & Skills
Update your professional experience, skills, and education:
```typescript
export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', level: 95 },
      // ... more skills
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: 'Your Job Title',
    company: 'Company Name',
    period: '2024 - Present',
    // ... more details
  },
];
```

### Update Contact Information

Edit `/components/footer.tsx` and `/components/header.tsx` to update:
- Email: `shivampandeyyuyu@gmail.com`
- Phone: `+91-9554584978`
- Location: `New Ashok Nagar, Delhi, India`
- WhatsApp: `https://wa.me/919554584978`

### Theme Customization

Edit `/app/globals.css` to customize colors:

```css
:root {
  --primary: oklch(0.45 0.2 260);    /* Primary color */
  --accent: oklch(0.65 0.15 180);    /* Accent color */
  --background: oklch(0.98 0.01 0);  /* Background */
  /* ... other variables */
}

.dark {
  --primary: oklch(0.7 0.18 260);
  /* ... dark theme colors */
}
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx            # Home page (all sections)
│   └── globals.css         # Global styles and theme
├── components/
│   ├── header.tsx          # Navigation and theme toggle
│   ├── hero.tsx            # Hero section with 3D canvas
│   ├── hero-scene.tsx      # Three.js 3D scene
│   ├── about-section.tsx   # About section
│   ├── skills-section.tsx  # Skills with progress bars
│   ├── projects-section.tsx # Projects grid
│   ├── experience-section.tsx # Work experience timeline
│   ├── contact-modal.tsx   # Contact form modal
│   ├── cta-section.tsx     # Call-to-action section
│   ├── footer.tsx          # Footer with links
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── projects.ts         # Projects data
│   └── experience.ts       # Skills and experience data
├── hooks/
│   └── use-scroll-animation.ts # Scroll animation hook
└── public/                 # Static assets
```

## Deployment

### Deploy to Vercel (Recommended)

Vercel offers seamless Next.js deployment with one-click setup:

1. **Push code to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your site is live! 🚀

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy folder**
   - Drag and drop the `.next` folder to Netlify
   - Or connect GitHub for auto-deployments

## Performance Optimization

### Image Optimization
- All images use Next.js `Image` component
- Automatic WebP format conversion
- Lazy loading for off-screen images

### Code Splitting
- Automatic route-based code splitting
- Dynamic imports for heavy components
- Tree-shaking unused code

### CSS Optimization
- Tailwind CSS purges unused styles
- Critical CSS inlined
- CSS-in-JS minimized

### Animation Performance
- GPU-accelerated transforms
- requestAnimationFrame for smooth animations
- Reduced motion support with `prefers-reduced-motion`

### Monitoring
Run Lighthouse audit:
```bash
npm run build
# Then use Chrome DevTools > Lighthouse
```

## Accessibility Checklist

- ✅ Semantic HTML structure
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation support
- ✅ Color contrast compliance (WCAG AA)
- ✅ Focus indicators visible
- ✅ Skip links for navigation
- ✅ Alt text for meaningful images
- ✅ Screen reader friendly

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

*Note: WebGL animations gracefully degrade on unsupported devices*

## Environment Variables

Currently, this project requires no environment variables for basic functionality. However, for enhanced features, you may want to add:

```env
# Optional: Contact form backend
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Customization Tips

### Change Font
Edit `/app/layout.tsx`:
```typescript
import { Inter, Poppins } from 'next/font/google'

const _poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
```

### Modify Animation Speed
Edit individual component files to adjust Framer Motion transition durations:
```typescript
transition={{ duration: 0.5 }} // Change duration
```

### Add New Sections
Create new components in `/components` and import them in `/app/page.tsx`:
```typescript
import { NewSection } from '@/components/new-section';

// Add to JSX
<NewSection />
```

## Troubleshooting

### 3D Scene Not Loading
- Check browser supports WebGL
- Verify Three.js dependencies installed
- Check browser console for errors

### Theme Not Persisting
- Ensure localStorage is enabled
- Check browser privacy settings
- Clear cache and try again

### Animations Stuttering
- Reduce animation complexity
- Enable hardware acceleration
- Test with `prefers-reduced-motion` enabled

## Contact & Support

For questions or support, reach out:
- Email: shivampandeyyuyu@gmail.com
- WhatsApp: +91-9554584978
- LinkedIn: [Shivam Pandey](https://www.linkedin.com/in/shivampandey-tech/)
- GitHub: [@shivamcsc0909](https://github.com/shivamcsc0909)

## License

This portfolio template is available for personal and commercial use. Please give credit to Shivam Pandey if you use it as a template.

## Changelog

### v1.0.0 (2024)
- Initial release
- Hero section with 3D graphics
- Projects showcase with 20+ projects
- Skills and experience timeline
- Dark/light theme support
- Responsive design
- Advanced animations and microinteractions

## Future Enhancements

- [ ] Blog section with articles
- [ ] Case studies for featured projects
- [ ] Integration with backend contact form
- [ ] Analytics integration
- [ ] Newsletter signup
- [ ] Client testimonials section
- [ ] Resume PDF download
- [ ] More 3D interactive elements

---

**Last Updated**: February 2024

**Built with ❤️ by Shivam Pandey**
