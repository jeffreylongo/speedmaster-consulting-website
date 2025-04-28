# GitHub and Netlify Deployment Guide

This guide will help you deploy your Speedmaster Consulting website to GitHub and Netlify.

## GitHub Deployment Steps

### Step 1: Download the Project
First, download all the project files from Replit by using the Download project option in the menu (click the three dots next to your project name and select "Download as zip").

### Step 2: Initialize Git in the Downloaded Project
```bash
# Navigate to your downloaded project folder
cd path/to/downloaded/project

# Initialize Git
git init

# Add all files to Git
git add .

# Create initial commit
git commit -m "Initial commit of Speedmaster Consulting website"
```

### Step 3: Connect to GitHub Repository
```bash
# Add the remote GitHub repository
git remote add origin https://github.com/jeffreylongo/speedmaster-consulting-website.git

# Option 1: Push using HTTPS (you'll be prompted for username and password/token)
git push -u origin main

# Option 2: Push using your GitHub token (more secure)
git remote set-url origin https://YOUR_GITHUB_TOKEN@github.com/jeffreylongo/speedmaster-consulting-website.git
git push -u origin main
```

If the repository already has code and you want to force push:
```bash
git push -u origin main --force
```

Note: Replace `YOUR_GITHUB_TOKEN` with your actual GitHub personal access token.

## Netlify Deployment

### Option 1: Deploy via Netlify UI
1. Log in to your Netlify account
2. Click "Add new site" > "Import an existing project"
3. Select GitHub and select the speedmaster-consulting-website repository
4. Configure the build settings:
   - Build command: `ng build`
   - Publish directory: `dist/speedmaster-consulting-website`
5. Click "Deploy site"

### Option 2: Deploy via Netlify CLI
1. Install Netlify CLI:
```bash
npm install netlify-cli -g
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize Netlify site:
```bash
netlify init
```

4. Select "Create & configure a new site"
5. Choose your team and site name
6. Deploy the site:
```bash
netlify deploy --prod
```

## Build Configuration Notes

- The Angular configuration is set up with the proper build and output paths
- The Netlify configuration is already set up in the netlify.toml file
- If you encounter any issues with Angular routes, the netlify.toml file includes the proper redirect rules

## Important Files
- `angular.json`: Contains build configuration for Angular
- `netlify.toml`: Contains Netlify deployment configuration
- `src/app/app.module.ts`: Main app module configuration
- `src/app/app-routing.module.ts`: Routing configuration

## Post-Deployment Verification
After deploying to Netlify:
1. Verify that all routes work correctly (try navigating to /about, /services, /contact)
2. Check that the contact form sends emails properly
3. Verify that all images and assets are loading correctly
4. Test the site on multiple devices and browsers