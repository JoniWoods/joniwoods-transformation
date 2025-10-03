
# Cloudflare Pages Deployment Checklist
## Joni Woods Next.js Site

**Date:** October 3, 2025  
**Repository:** `https://github.com/JoniWoods/joniwoods-transformation`

---

## ✅ Visual Updates Complete

The following visual changes have been successfully implemented and tested:

1. ✅ Banner spacing reduced to zero below the banner
2. ✅ Hero section aligned to top (`items-start` instead of `items-center`)
3. ✅ Hero top padding reduced to 6px (desktop) and 8px (large screens)
4. ✅ All changes tested and working correctly

---

## 🔧 Required Cloudflare Configuration Steps

### STEP 1: Clean Up Repository Files

**Files to DELETE via GitHub:**

1. `/static-html-site/` (entire folder)
   - This is an old abandoned HTML site
   - Navigate to the folder in GitHub
   - Delete the entire directory

2. `/app/prisma/` (folder inside app directory)
   - Not being used in the current implementation
   - Navigate to `app/prisma` in GitHub
   - Delete the entire directory

**How to delete via GitHub web interface:**
- Go to `https://github.com/JoniWoods/joniwoods-transformation`
- Navigate to each folder
- Click the folder name
- Click "..." (three dots) → "Delete directory"
- Commit with message: "Remove unused files for Cloudflare deployment"

---

### STEP 2: Update next.config.js

**File:** `/app/next.config.js`

**Current Line 6:**
```javascript
output: process.env.NEXT_OUTPUT_MODE,
```

**Change to:**
```javascript
output: 'export',  // Force static export for Cloudflare Pages
```

**Complete updated file should look like:**

```javascript
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'export',  // Force static export for Cloudflare Pages
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
```

**How to update:**
1. Go to GitHub: `https://github.com/JoniWoods/joniwoods-transformation`
2. Navigate to `app/next.config.js`
3. Click the pencil icon (Edit this file)
4. Change line 6 as shown above
5. Commit changes: "Configure Next.js for static export"

---

### STEP 3: Configure Cloudflare Pages Build Settings

**Navigate to:**
Cloudflare Dashboard → Pages → joniwoods-transformation → Settings → Builds & deployments

**Set these EXACT values:**

| Setting | Value |
|---------|-------|
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `cd app && npm install && npm run build` |
| Build output directory | `app/out` |
| Root directory | (leave blank) |
| Node version | `18` or higher |

**Important Notes:**
- The build command includes `cd app &&` because the Next.js project is in the `/app` subdirectory
- The output directory is `app/out` (not just `out`) for the same reason

---

### STEP 4: Set Environment Variables

**Navigate to:**
Cloudflare Dashboard → Pages → joniwoods-transformation → Settings → Environment variables

**Add these variables for Production:**

1. **NODE_VERSION**
   - Value: `18`
   - Click "Add variable"

2. **NEXT_DIST_DIR** (optional)
   - Value: `.next`
   - This ensures consistent build directory

---

### STEP 5: Trigger Deployment

**Option A: Automatic (Recommended)**
1. After pushing your changes to GitHub (Steps 1-2)
2. Cloudflare will automatically detect the changes
3. A new deployment will start automatically
4. Wait 3-5 minutes for completion

**Option B: Manual Redeploy**
1. Go to: Pages → joniwoods-transformation → Deployments
2. Click "Retry deployment" on the latest build
3. Or click "Create deployment" for a fresh build

---

### STEP 6: Verify Deployment

**Check that the main site loads:**
- URL: `https://joniwoods-transformation.pages.dev/`
- Should show: Joni Woods homepage with book banner at top
- Hero section aligned to top with tight spacing
- All navigation links working
- Images loading correctly

**Check build logs if issues occur:**
- Go to Deployments tab
- Click on the deployment
- View "Build log" for any errors

---

## 🐛 Common Issues & Solutions

### Issue: Build fails with "Cannot find module"
**Solution:** 
- Check that build command includes `npm install`
- Verify all dependencies are in package.json
- Current command: `cd app && npm install && npm run build`

### Issue: 404 error on deployed site
**Solution:**
- Verify build output directory is set to `app/out`
- Check that `output: 'export'` is in next.config.js
- Look for errors in build log about static export

### Issue: Images not loading
**Solution:**
- Already configured with `images: { unoptimized: true }`
- If still issues, check that images are in `app/public/images/`
- Verify image paths start with `/images/` not `./images/`

### Issue: Styles not loading
**Solution:**
- Tailwind CSS should compile during build
- Check build logs for PostCSS errors
- Verify `postcss.config.js` exists in app directory

---

## 📋 Deployment Checklist

Before clicking Deploy:

- [ ] Deleted `/static-html-site/` folder from repository
- [ ] Deleted `/app/prisma/` folder from repository
- [ ] Updated `app/next.config.js` with `output: 'export'`
- [ ] Set Cloudflare Framework preset to "Next.js (Static HTML Export)"
- [ ] Set Build command to `cd app && npm install && npm run build`
- [ ] Set Build output directory to `app/out`
- [ ] Added NODE_VERSION=18 environment variable
- [ ] Committed all changes to GitHub main branch
- [ ] Triggered deployment (automatic or manual)
- [ ] Waited for build to complete (3-5 minutes)
- [ ] Verified site loads at `*.pages.dev` URL
- [ ] Tested navigation and all sections
- [ ] Verified images load correctly
- [ ] Checked hero alignment and banner spacing

---

## 🎉 Expected Result

After completing all steps:

✅ Main site deploys successfully to Cloudflare Pages  
✅ Book banner displays full width at top  
✅ Hero section aligned to top with minimal spacing  
✅ All images optimized and loading  
✅ Navigation working correctly  
✅ Mobile responsive design intact  
✅ Fast global CDN delivery  
✅ Total cost: $0 (Cloudflare free tier)

---

## 📞 Support

If you encounter issues:

1. **Check Build Logs:** Cloudflare Dashboard → Pages → Deployments → View build log
2. **Check Error Messages:** Look for specific error codes or module names
3. **Verify Changes:** Ensure all steps 1-4 are completed exactly as written
4. **GitHub Sync:** Confirm all commits are pushed to main branch

**Current Site Status:**
- ✅ Local preview working: `https://60b614c1e.preview.abacusai.app/`
- ✅ All tests passing
- ✅ Ready for Cloudflare deployment

---

## 📝 Notes

- The Next.js project lives in the `/app` subdirectory, which is why all paths include `app/`
- Static export means no server-side rendering (SSR) - everything pre-rendered at build time
- Cloudflare Pages serves the static files from the `out` directory
- The site will be globally distributed across Cloudflare's CDN for fast loading

---

**Last Updated:** October 3, 2025  
**Project Status:** Ready for Cloudflare Deployment  
**Next Step:** Implement Steps 1-6 above
