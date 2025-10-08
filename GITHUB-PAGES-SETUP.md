
# GitHub Pages Setup Instructions

> **⚠️ REPOSITORY ARCHIVED** - This repository is archived and read-only. These setup instructions remain for reference. The live site continues to be available at https://joniwoods.github.io/joniwoods-transformation/. See [ARCHIVE.md](ARCHIVE.md) for details.

## Automatic Deployment
This repository is configured with GitHub Actions for automatic deployment to GitHub Pages.

## Preview URL
Once enabled, your site will be available at:
**https://joniwoods.github.io/joniwoods-transformation**

## Enable GitHub Pages

1. Go to your repository: https://github.com/JoniWoods/joniwoods-transformation
2. **IMPORTANT**: Make sure your repository is **PUBLIC** (GitHub Pages requires public repos for free accounts)
3. Click on **Settings** tab
4. Scroll down to **Pages** section in the left sidebar
5. Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
6. The site will automatically deploy when you push to the `main` branch

## Build Process
The GitHub Actions workflow will:
- Install dependencies with Yarn
- Build the Next.js application with static export
- Deploy to GitHub Pages automatically

## Manual Trigger
You can also trigger a deployment manually:
1. Go to the **Actions** tab in your repository
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button

## Troubleshooting

### Common Issues:
1. **404 Error**: 
   - Ensure repository is **PUBLIC**
   - Check that GitHub Pages source is set to **GitHub Actions** (not branch)
   - Verify the deployment completed successfully in Actions tab

2. **Build Failures**:
   - Check the **Actions** tab for detailed build logs
   - Look for any Node.js or dependency installation errors

3. **Still Getting 404**:
   - Wait 5-10 minutes after enabling Pages (DNS propagation)
   - Try accessing: `https://joniwoods.github.io/joniwoods-transformation/`
   - Clear browser cache or try incognito mode

4. **Repository Visibility**:
   - Go to Settings → General → scroll to "Danger Zone"
   - Make sure "Change repository visibility" shows "Public"

### Check Deployment Status:
1. Go to **Actions** tab in your repository
2. Look for "Deploy to GitHub Pages" workflow
3. Green checkmark = successful deployment
4. Red X = failed deployment (click for details)
