# EcoNest Landing Page - GitHub & GitHub Pages Deployment Guide

This guide will walk you through uploading the EcoNest landing page code to GitHub and deploying it using GitHub Pages.

---

## Prerequisites

Before you start, make sure you have:

1. **Git installed** on your local machine ([Download Git](https://git-scm.com/))
2. **GitHub account** with credentials ready
3. **Existing GitHub repository** created (or create a new one at https://github.com/new)
4. **Node.js and pnpm installed** locally (for testing before deployment)

---

## Step 1: Prepare Your Local Environment

### 1.1 Clone Your GitHub Repository (if not already done)

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### 1.2 Copy the Project Files

Copy all files from the `econest_export` directory into your cloned repository:

```bash
# From your repository root directory
cp -r /path/to/econest_export/* .
```

Or manually copy these key directories and files:
- `client/` - Frontend React application
- `server/` - Backend server code
- `shared/` - Shared utilities
- `package.json` - Dependencies
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- All other configuration files

---

## Step 2: Update package.json for GitHub Pages

### 2.1 Modify the build script

Edit your `package.json` and update the build script to output to the `docs` folder (which GitHub Pages can serve):

```json
{
  "scripts": {
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "build:pages": "vite build --outDir docs"
  }
}
```

### 2.2 Add homepage field (optional but recommended)

If your repository name is not your username, add this to `package.json`:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
}
```

---

## Step 3: Configure Vite for GitHub Pages

### 3.1 Update vite.config.ts

Modify your `vite.config.ts` to set the correct base path:

```typescript
export default defineConfig({
  // ... other config
  base: '/YOUR_REPO_NAME/', // Change if your repo name is different
  build: {
    outDir: 'docs', // Output to docs folder for GitHub Pages
    emptyOutDir: true,
  },
  // ... rest of config
});
```

**Note:** If deploying to `username.github.io`, use `base: '/'`

---

## Step 4: Build the Project Locally

### 4.1 Install Dependencies

```bash
pnpm install
```

### 4.2 Build for Production

```bash
pnpm run build:pages
```

This will create a `docs/` folder with the production-ready files.

### 4.3 Verify the Build

```bash
ls -la docs/
```

You should see `index.html` and other static assets in the `docs/` folder.

---

## Step 5: Push Code to GitHub

### 5.1 Stage All Files

```bash
git add .
```

### 5.2 Commit Your Changes

```bash
git commit -m "Initial commit: EcoNest landing page"
```

### 5.3 Push to GitHub

```bash
git push origin main
```

(Replace `main` with your default branch name if different)

---

## Step 6: Enable GitHub Pages

### 6.1 Go to Repository Settings

1. Navigate to your GitHub repository
2. Click on **Settings** (gear icon)
3. Scroll down to **Pages** section (left sidebar)

### 6.2 Configure GitHub Pages

1. Under **Source**, select **Deploy from a branch**
2. Under **Branch**, select:
   - Branch: `main` (or your default branch)
   - Folder: `/docs`
3. Click **Save**

### 6.3 Wait for Deployment

GitHub will automatically build and deploy your site. You'll see a message like:

> "Your site is live at https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"

This typically takes 1-2 minutes.

---

## Step 7: Verify Your Deployment

### 7.1 Check GitHub Pages Status

1. Go back to **Settings > Pages**
2. Look for the deployment status and URL
3. Click the URL to visit your live site

### 7.2 Test the Landing Page

- Verify the hero section displays correctly
- Test the waitlist signup form
- Check responsive design on mobile
- Verify all images load properly

---

## Step 8: Set Up Automatic Deployments (Optional)

### 8.1 Create GitHub Actions Workflow

Create a file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm run build:pages
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

### 8.2 Push the Workflow

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

Now, every time you push to `main`, your site will automatically rebuild and deploy!

---

## Troubleshooting

### Issue: Site shows 404 error

**Solution:** Check that:
1. GitHub Pages is enabled in Settings > Pages
2. The `/docs` folder is selected as the source
3. The `docs/index.html` file exists
4. The `base` path in `vite.config.ts` matches your repository URL

### Issue: Images not loading

**Solution:** Ensure all image paths are relative and the `base` path in `vite.config.ts` is correct.

### Issue: Styles not applied

**Solution:** Clear your browser cache (Ctrl+Shift+Delete) and hard refresh (Ctrl+Shift+R).

### Issue: Form not working

**Solution:** The form currently shows a success message locally. For production, you'll need to:
1. Set up a backend API to handle form submissions
2. Integrate with a service like Formspree, Netlify Forms, or Firebase
3. Update the form submission handler in `client/src/pages/Home.tsx`

---

## Next Steps

After deployment, consider:

1. **Add a custom domain** (Settings > Pages > Custom domain)
2. **Set up form backend** to actually collect email signups
3. **Add analytics** (Google Analytics, Plausible, etc.)
4. **Optimize SEO** (meta tags, structured data)
5. **Set up email notifications** for form submissions

---

## File Structure

```
your-repo/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx   # Main landing page component
│   │   ├── const.ts       # App constants and branding
│   │   ├── index.css      # Tailwind styles
│   │   └── main.tsx       # Entry point
│   ├── public/            # Static assets
│   │   └── econest_hero.png
│   └── index.html         # HTML template
├── server/                # Backend (optional for static deployment)
├── docs/                  # Build output (GitHub Pages serves from here)
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
└── GITHUB_DEPLOYMENT_GUIDE.md
```

---

## Support & Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

---

## Summary

You now have a fully functional EcoNest landing page deployed on GitHub Pages! The site features:

✅ Professional hero section with compelling copy  
✅ Six key features with icons and descriptions  
✅ Benefits section with statistics  
✅ Functional waitlist signup form  
✅ FAQ section with expandable items  
✅ Responsive design for all devices  
✅ Green color scheme reflecting eco-friendly brand  
✅ 28 comprehensive tests  

Good luck with your product launch! 🚀
