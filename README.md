# The Jewellery Department (TJD) - Landing Page

A modern and elegant Next.js landing page for The Jewellery Department, featuring a sophisticated design with deep emerald green branding, high-quality imagery, and a premium user experience.

## Features

- ✨ Modern, elegant design with emerald green branding
- 🎨 Responsive layout optimized for all devices
- 🖼️ Hero slider with 3 customizable slides
- 📱 Mobile-friendly navigation
- 🎁 10% discount modal on first visit
- 📧 Newsletter subscription
- 🛍️ Featured collections showcase
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
tjd_new/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── AnnouncementBar.tsx
│   ├── Header.tsx
│   ├── HeroSlider.tsx
│   ├── FeaturedCollections.tsx
│   ├── AboutSection.tsx
│   ├── PopularCollections.tsx
│   ├── NewsletterSection.tsx
│   ├── Footer.tsx
│   └── DiscountModal.tsx
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- `tjd-green`: Primary brand color (#1B5E3E)
- `tjd-green-dark`: Darker shade for hover states
- `tjd-beige`: Light beige background (#F5F1EB)

### Content

Update content in individual component files:
- Hero slides: `components/HeroSlider.tsx`
- Collections: `components/FeaturedCollections.tsx`
- Navigation: `components/Header.tsx`

### Images

Replace placeholder images with your actual product photos. Update image URLs in:
- `components/HeroSlider.tsx`
- `components/FeaturedCollections.tsx`
- `components/PopularCollections.tsx`

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations (available for future use)
- **Lucide React** - Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 The Jewellery Department
