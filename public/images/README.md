# Image Directory Structure

## Folder Organization

```
public/images/
├── hero/           — Hero section images & backgrounds
├── portfolio/      — Portfolio/work project images
├── avatars/        — Team member & testimonial avatars
└── README.md       — This file
```

## How to Add Images

### 1. **Place Images**
- Drop image files into the appropriate subfolder in `public/images/`
- Supported formats: `.jpg`, `.png`, `.webp`, `.svg`, `.gif`

### 2. **Reference in JSX**

#### Using HTML img tag:
```jsx
<img src="/images/hero/my-image.jpg" alt="Description" />
```

#### Using Next.js Image component (recommended for optimization):
```jsx
import Image from 'next/image';

<Image 
  src="/images/portfolio/project-thumb.jpg" 
  alt="Project name"
  width={800}
  height={600}
  priority
/>
```

## Path Examples

| Location | Path |
|----------|------|
| Hero section image | `/images/hero/hero-graphic.jpg` |
| Portfolio project | `/images/portfolio/salaro-website.jpg` |
| Team avatar | `/images/avatars/john-doe.jpg` |

## Best Practices

✓ **Naming**: Use lowercase with hyphens (e.g., `project-name.jpg`)  
✓ **Optimization**: Use `.webp` format when possible  
✓ **Size**: Optimize images before uploading (use TinyPNG, Squoosh)  
✓ **Alt text**: Always include descriptive alt text for accessibility  
✓ **Next.js Image**: Prefer `Image` component for auto-optimization

## Examples in Your Files

### app/page.js (Home hero):
```jsx
<img src="/images/hero/home-hero.jpg" alt="Home hero" />
```

### app/work/page.js (Portfolio projects):
```jsx
<img src="/images/portfolio/project-name.jpg" alt="Project thumbnail" />
```

### app/contact/page.js (Team avatars):
```jsx
<img src="/images/avatars/team-member.jpg" alt="Team member" />
```
