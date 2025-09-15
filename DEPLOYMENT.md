# Deployment Guide for drewdez.me

This guide will walk you through deploying your React portfolio to Cloudflare Pages with your custom domain.

## 🚀 Quick Start

### 1. Prepare Your Repository

First, initialize Git and push to GitHub:

\`\`\`bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
\`\`\`

### 2. Connect to Cloudflare Pages

1. **Log in to Cloudflare Dashboard**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages" in the sidebar

2. **Create a New Project**
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your GitHub repository

3. **Configure Build Settings**
   - **Framework preset**: React
   - **Build command**: \`npm run build\`
   - **Build output directory**: \`dist\`
   - **Root directory**: \`/\` (leave empty)

4. **Environment Variables** (Optional)
   - \`NODE_ENV\`: \`production\`

5. **Deploy**
   - Click "Save and Deploy"
   - Your site will be available at \`https://your-project-name.pages.dev\`

### 3. Custom Domain Setup (drewdez.me)

#### Option A: Domain already in Cloudflare

1. **Add Custom Domain**
   - In your Pages project, go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter \`drewdez.me\`
   - Click "Continue"

2. **DNS Configuration**
   - Cloudflare will automatically create the necessary DNS records
   - Verify the records in the DNS tab of your domain

#### Option B: Domain not in Cloudflare

1. **Add Site to Cloudflare**
   - In Cloudflare Dashboard, click "Add a site"
   - Enter \`drewdez.me\`
   - Choose a plan (Free is fine)
   - Import DNS records

2. **Update Nameservers**
   - Copy the Cloudflare nameservers
   - Update nameservers at your domain registrar
   - Wait for propagation (can take up to 24 hours)

3. **Add Custom Domain**
   - Follow steps from Option A

### 4. SSL/TLS Configuration

1. **SSL/TLS Settings**
   - Go to SSL/TLS → Overview
   - Set encryption mode to "Full (strict)"

2. **Edge Certificates**
   - Go to SSL/TLS → Edge Certificates
   - Enable "Always Use HTTPS"
   - Enable "Automatic HTTPS Rewrites"

### 5. Performance Optimization

1. **Caching**
   - Go to Caching → Configuration
   - Set Browser Cache TTL to "1 month"

2. **Speed Optimization**
   - Go to Speed → Optimization
   - Enable "Auto Minify" for CSS, JS, and HTML
   - Enable "Brotli" compression

3. **Page Rules** (Optional)
   - Create rule for \`drewdez.me/*\`
   - Settings: Cache Level = Cache Everything, Browser Cache TTL = 1 month

## 🔄 Automatic Deployments

### GitHub Integration

Your site will automatically deploy when you push to the main branch:

\`\`\`bash
# Make changes to your code
git add .
git commit -m "Update portfolio content"
git push origin main
\`\`\`

### Preview Deployments

- Pull requests will create preview deployments
- Each commit gets a unique preview URL
- Perfect for testing changes before merging

## 📝 Content Updates

### Updating Personal Information

1. **Hero Section** (\`src/components/Hero.tsx\`)
   - Update name, location, bio
   - Add your social media links

2. **Experience** (\`src/components/Experience.tsx\`)
   - Add your work experience
   - Update education details
   - Include technologies used

3. **Skills** (\`src/components/Skills.tsx\`)
   - Update with your actual skills
   - Adjust proficiency levels
   - Add new technologies

4. **Projects** (\`src/components/Projects.tsx\`)
   - Add your real projects
   - Include live URLs and GitHub links
   - Upload project screenshots

5. **Contact** (\`src/components/Contact.tsx\`)
   - Update contact information
   - Add your real email and phone
   - Update social media links

### Resume Update

Replace \`public/andrew_hernandez_swe_resume.pdf\` with your updated resume.

## 🔧 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check for TypeScript errors: \`npm run build\`
   - Verify all dependencies are installed
   - Check the build logs in Cloudflare Pages

2. **404 Errors**
   - Ensure \`_redirects\` file is in the root directory
   - Check SPA fallback configuration

3. **Domain Not Working**
   - Verify DNS records are correct
   - Check SSL certificate status
   - Wait for DNS propagation (up to 24 hours)

4. **Images Not Loading**
   - Ensure images are in \`public/\` directory
   - Use relative paths starting with \`/\`

### Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Cloudflare Community](https://community.cloudflare.com/)
- [React Documentation](https://react.dev/)

## 📊 Analytics (Optional)

### Google Analytics

1. Create a Google Analytics account
2. Add tracking code to \`index.html\`
3. Configure goals and conversions

### Cloudflare Analytics

- Built-in analytics available in Cloudflare Dashboard
- Go to Analytics → Web Analytics
- No code changes needed

## 🚀 Next Steps

1. **Test Your Site**
   - Check all links work
   - Test on mobile devices
   - Verify contact form functionality

2. **SEO Optimization**
   - Submit sitemap to Google Search Console
   - Optimize meta descriptions
   - Add structured data

3. **Performance Monitoring**
   - Use Lighthouse for performance audits
   - Monitor Core Web Vitals
   - Optimize images if needed

4. **Backup**
   - Keep your repository backed up
   - Export Cloudflare configuration if needed

---

Your portfolio is now live at **https://drewdez.me**! 🎉
