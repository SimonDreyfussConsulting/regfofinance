# RegularFolkFinance - Next.js 14 Static Site

A modern personal finance website built with Next.js 14, featuring the Community Guide brand system.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel (Recommended)

1. Push this code to your GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically detect this is a Next.js app and configure everything correctly.

## Deploy to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: RegularFolkFinance Next.js site"

# Connect to your repo
git remote add origin https://github.com/SimonDreyfussConsulting/regfofinance.git
git branch -M main
git push -u origin main
```

## Project Structure

```
app/
  ├── page.tsx              # Homepage
  ├── credit-cards/         # Credit cards comparison
  ├── personal-loans/       # Personal loans comparison
  ├── reverse-mortgages/    # Reverse mortgage guide
  ├── globals.css           # Global styles (Community Guide brand)
  └── layout.tsx            # Root layout
components/
  └── Navigation.tsx        # Responsive navigation
public/
  └── images/               # All images and logos
```

## Features

- ✅ Static Site Generation (SSG) for perfect SEO
- ✅ Responsive navigation (separate desktop/mobile)
- ✅ Community Guide brand system
- ✅ Real content with actual user quotes
- ✅ Optimized for Vercel deployment
- ✅ Fast page loads with Next.js 14
- ✅ TypeScript for type safety

## Adding New Pages

Create a new folder in `app/` with a `page.tsx` file:

```tsx
// app/new-page/page.tsx
export default function NewPage() {
  return <div>Your content here</div>;
}
```

The page will automatically be available at `/new-page`.

## Customization

- **Colors**: Edit `app/globals.css` (CSS variables)
- **Navigation**: Edit `components/Navigation.tsx`
- **Content**: Edit individual page files in `app/`
- **Images**: Add to `public/images/`

## SEO Optimization

Each page includes:
- Proper meta tags
- Semantic HTML
- Optimized images
- Fast loading times

## Support

For questions or issues, contact team@regularfolkfinance.com

## License

© 2025 RegularFolkFinance. All rights reserved.
