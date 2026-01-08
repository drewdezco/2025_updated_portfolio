# How to Add GIFs to Your Projects

## Step 1: Create/Record Your GIFs

You can create GIFs using various tools:
- **Screen recording tools**: OBS Studio, LICEcap, ScreenToGif, or built-in screen recording
- **Online tools**: Giphy, EZGIF, or CloudConvert
- **Code tools**: Use tools like `ffmpeg` to convert videos to GIFs

**Tips for good project GIFs:**
- Keep file sizes reasonable (aim for under 5MB if possible)
- Show key functionality and workflows
- Keep duration short (5-15 seconds is ideal)
- Use a consistent resolution (e.g., 1280x720 or 1920x1080)

## Step 2: Place GIFs in the Public Folder

1. Create a `gifs` folder inside your `public` directory (optional but recommended)
2. Add your GIF files there, e.g.:
   ```
   public/
     gifs/
       cyber-security-tool-demo.gif
       data-quality-toolkit-demo.gif
       playwright-tests-demo.gif
   ```

## Step 3: Add GIF URLs to Project Data

In `src/components/Projects.tsx` or `src/pages/AllProjects.tsx`, add the `gifUrl` property:

```typescript
{
  id: '1',
  title: 'Cyber Security Tool Integration',
  description: '...',
  impact: '...',
  technologies: ['Python', 'Splunk', ...],
  gifUrl: '/gifs/cyber-security-tool-demo.gif', // Add this line
  featured: true
}
```

**Note:** In Vite, files in the `public` folder are served from the root (`/`), so:
- File at `public/gifs/demo.gif` → Use `/gifs/demo.gif`
- File at `public/demo.gif` → Use `/demo.gif`

## Step 4: Test

After adding GIFs, restart your dev server and check that they display correctly on the All Projects page.

## Alternative: External URLs

You can also host GIFs externally (e.g., on GitHub, Imgur, or Cloudflare) and use the full URL:

```typescript
gifUrl: 'https://example.com/path/to/demo.gif'
```

