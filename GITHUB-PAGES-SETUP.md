
# GitHub Pages Setup Instructions

## Automatic Deployment
This repository is configured with GitHub Actions for automatic deployment to GitHub Pages.

## Preview URL
Once enabled, your site will be available at:
**https://joniwoods.github.io/joniwoods-transformation**

## Enable GitHub Pages

1. Go to your repository: https://github.com/JoniWoods/joniwoods-transformation
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The site will automatically deploy when you push to the `main` branch

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
- Check the **Actions** tab for build logs if deployment fails
- Ensure Pages is enabled in repository settings
- Allow 5-10 minutes for changes to propagate after deployment
