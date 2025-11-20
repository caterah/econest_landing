# EcoNest - Smart Composting for Apartments

A professional product promotion landing page for EcoNest, a modular, biodegradable smart composting system designed for urban apartment dwellers.

## Features

✨ **Professional Design**
- Clean, modern layout with green eco-friendly color scheme
- Fully responsive design (mobile, tablet, desktop)
- Smooth scrolling and interactive elements

📱 **Key Sections**
- **Hero Section**: Compelling headline with product imagery and CTAs
- **Features Section**: Six key benefits with icons and descriptions
- **Benefits Section**: Urban living advantages with statistics
- **Waitlist CTA**: Email signup form with validation
- **FAQ Section**: Five expandable questions
- **Navigation & Footer**: Sticky nav and comprehensive footer

🎯 **Call-to-Action**
- Prominent "Join Waitlist" buttons throughout
- Functional email signup form
- Social proof messaging ("Join 5,000+ people")

🧪 **Quality Assurance**
- 28 comprehensive vitest tests
- All tests passing
- Component and integration testing

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS 4 with custom theme
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Icons**: Lucide React
- **Notifications**: Sonner

## Project Structure

```
econest-landing/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx      # Main landing page
│   │   │   └── Home.test.tsx # Component tests
│   │   ├── components/        # Reusable UI components
│   │   ├── const.ts          # App constants
│   │   ├── index.css         # Global styles
│   │   └── main.tsx          # Entry point
│   ├── public/               # Static assets
│   │   └── econest_hero.png
│   └── index.html
├── server/                   # Backend (optional)
├── shared/                   # Shared utilities
├── package.json
├── vite.config.ts
├── vitest.config.ts
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/econest-landing.git
cd econest-landing

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Visit `http://localhost:3000` to see the landing page.

## Development

### Available Scripts

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Build for GitHub Pages
pnpm run build:pages

# Run tests
pnpm exec vitest

# Type check
pnpm run check

# Format code
pnpm run format
```

## Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name:
   ```typescript
   base: '/YOUR_REPO_NAME/',
   ```

2. Build the project:
   ```bash
   pnpm run build:pages
   ```

3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. Enable GitHub Pages in repository settings:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, Folder: /docs

5. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

For detailed instructions, see `GITHUB_DEPLOYMENT_GUIDE.md`

## Customization

### Update Branding

Edit `client/src/const.ts`:
```typescript
export const APP_TITLE = "Your Product Name";
export const APP_LOGO = "your-logo-url";
```

### Change Colors

Edit `client/src/index.css` and update the color variables in the `:root` section.

### Modify Content

Edit `client/src/pages/Home.tsx` to update:
- Headlines and descriptions
- Features and benefits
- FAQ items
- Form fields

### Add Form Backend

The form currently shows a success message. To collect emails:

1. **Formspree** (Recommended for GitHub Pages):
   ```bash
   npm install @formspree/react
   ```
   Then update the form in `Home.tsx`

2. **Firebase**:
   - Set up Firebase project
   - Add authentication and Firestore
   - Update form submission handler

## Testing

Run all tests:
```bash
pnpm exec vitest
```

Run tests in watch mode:
```bash
pnpm exec vitest --watch
```

Run tests with coverage:
```bash
pnpm exec vitest --coverage
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images and assets
- Code splitting with Vite
- Lazy loading for images
- Minified CSS and JavaScript

## SEO

- Semantic HTML structure
- Meta tags (can be enhanced)
- Open Graph tags (can be added)
- Structured data (can be implemented)

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## License

MIT License - feel free to use this project for your own purposes.

## Support

For questions or issues:
1. Check `QUICK_START.md` for quick reference
2. See `GITHUB_DEPLOYMENT_GUIDE.md` for deployment help
3. Review component tests in `client/src/pages/Home.test.tsx`

## Next Steps

After deployment, consider:

1. **Set up form backend** to collect real email signups
2. **Add analytics** (Google Analytics, Plausible, etc.)
3. **Optimize SEO** with meta tags and structured data
4. **Add custom domain** via GitHub Pages settings
5. **Implement email notifications** for form submissions
6. **Add A/B testing** for CTA optimization

---

Built with ❤️ for eco-conscious apartment dwellers.
