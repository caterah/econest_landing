# EcoNest Landing Page - Quick Start Guide

## Quick Command Reference

### 1. Clone Your Repository
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 2. Copy Project Files
Copy all files from this export into your repository root.

### 3. Install Dependencies
```bash
pnpm install
```

### 4. Run Locally (Development)
```bash
pnpm run dev
```
Visit: `http://localhost:3000`

### 5. Build for GitHub Pages
```bash
pnpm run build:pages
```
This creates a `docs/` folder ready for deployment.

### 6. Push to GitHub
```bash
git add .
git commit -m "Add EcoNest landing page"
git push origin main
```

### 7. Enable GitHub Pages
1. Go to repository **Settings**
2. Navigate to **Pages** (left sidebar)
3. Select **Deploy from a branch**
4. Choose: Branch `main`, Folder `/docs`
5. Click **Save**

### 8. Access Your Live Site
Your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

## Key Files to Customize

| File | Purpose |
|------|---------|
| `client/src/pages/Home.tsx` | Main landing page component |
| `client/src/const.ts` | App title and logo |
| `client/src/index.css` | Color scheme and styling |
| `vite.config.ts` | Build configuration (set `base` path) |
| `package.json` | Project metadata and scripts |

---

## Important Configuration

### Update vite.config.ts
```typescript
base: '/YOUR_REPO_NAME/', // Change to your repo name
```

### Update package.json
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
}
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| 404 errors | Check GitHub Pages settings and `/docs` folder |
| Images not loading | Verify `base` path in vite.config.ts |
| Styles missing | Hard refresh browser (Ctrl+Shift+R) |
| Form not working | Set up backend API or form service |

---

## Next: Set Up Form Backend

The waitlist form currently shows a success message. To actually collect emails:

1. **Option A: Formspree** (Easiest)
   - Sign up at https://formspree.io/
   - Update form action in `Home.tsx`

2. **Option B: Netlify Forms**
   - Deploy on Netlify instead of GitHub Pages
   - Add `netlify` attribute to form

3. **Option C: Firebase**
   - Set up Firebase project
   - Add Firestore collection for emails

---

## Support

For detailed instructions, see: `GITHUB_DEPLOYMENT_GUIDE.md`
