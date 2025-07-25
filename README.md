# AIMosaic - Minds Connected

A sleek, Apple-style landing page showcasing 8 leading AI experts and visionaries who are shaping the future of artificial intelligence.

## Features

### 🎨 Apple-Inspired Design
- **Clean, minimalistic aesthetic** with generous whitespace
- **Premium typography** using Inter font family (similar to San Francisco)
- **Soft shadows and rounded corners** for modern visual appeal
- **Smooth transitions and animations** throughout the interface
- **Responsive design** that works perfectly across all devices

### 👥 Featured AI Experts
The landing page showcases 8 prominent figures in AI:

1. **Kevin Weil** - Former Twitter VP & AI Entrepreneur
2. **Josh Woodward** - Ex-NotebookLM Lead
3. **Sundar Pichai** - Google CEO & AI Visionary
4. **Amanda Askell** - Anthropic Research Scientist
5. **Andrej Karpathy** - AI Researcher & Educator
6. **Elon Musk** - xAI Founder & CEO
7. **Sam Altman** - OpenAI CEO
8. **Demis Hassabis** - Google DeepMind CEO

### 🚀 Interactive Elements
- **Smooth scrolling navigation** with fixed header
- **Hover effects** on expert cards with subtle animations
- **Social media integration** with clickable icons for X (Twitter) and YouTube
- **Category filtering** - Filter experts by company/organization (Google, OpenAI, Anthropic, etc.)
- **Search functionality** - Search experts by name, title, or keywords
- **Bilingual support** - Toggle between English and Chinese
- **Intersection Observer animations** for cards appearing on scroll
- **Keyboard navigation support** for accessibility

### 📱 Responsive Design
- **Desktop-first approach** with mobile optimizations
- **Flexible grid layout** that adapts to different screen sizes
- **Touch-friendly interactions** for mobile devices
- **Optimized typography scaling** across breakpoints

## Technical Implementation

### Structure
- `index.html` - Semantic HTML5 structure
- `styles.css` - Comprehensive CSS with Apple-inspired design system
- `script.js` - Interactive JavaScript functionality and expert data

### Design System
- **Color Palette**: Apple-inspired blacks, grays, and accent blue
- **Typography**: Inter font family with carefully chosen weights and sizes
- **Spacing**: Consistent spacing scale using CSS custom properties
- **Shadows**: Layered shadow system for depth and hierarchy
- **Border Radius**: Consistent rounded corners throughout

### Performance Optimizations
- **Debounced scroll events** for smooth performance
- **CSS custom properties** for maintainable theming
- **Optimized animations** using transform and opacity
- **Lazy loading considerations** for future image implementation

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. No build process required - pure HTML, CSS, and JavaScript

## Customization

### Adding New Experts
Edit the `aiExperts` array in `script.js`:

```javascript
{
    name: "Expert Name",
    title: "Their Title/Company",
    bio: "Brief bio description...",
    avatar: "EN", // Initials for avatar
    social: {
        twitter: "https://twitter.com/username",
        youtube: "https://youtube.com/@username"
    }
}
```

### Styling Modifications
The design system uses CSS custom properties in `:root` for easy theming:

```css
:root {
    --primary-black: #1d1d1f;
    --accent-blue: #007aff;
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    /* ... more variables */
}
```

## Future Enhancements
- Real profile images for experts
- Dark mode toggle
- Search and filter functionality
- Individual expert detail pages
- Blog integration
- Newsletter signup

## License
This project is open source and available under the MIT License.

---

**AIMosaic** - Connecting the minds that are shaping our AI-powered future.
