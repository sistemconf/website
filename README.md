# SISTEM 2026 - Technology Conference Website

A modern, responsive conference website built with React, Vite, and React Router. This website showcases the SISTEM 2026
technology conference with a complete suite of pages for attendees.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Multi-page Navigation**: React Router for smooth page transitions
- **Dynamic Content**: Markdown-based Code of Conduct and FAQ pages
- **Modern UI**: Clean, professional design with gradient accents
- **Fast Performance**: Built with Vite for optimal build times
- **Accessibility**: Semantic HTML and proper ARIA labels

## Pages

1. **Home** - Landing page with hero section, feature highlights, and navigation cards
2. **Schedule** - Full conference schedule with day-by-day breakdown
3. **Speakers** - Speaker profiles with session assignments
4. **Team** - Meet the organizing committee
5. **Code of Conduct** - Community guidelines (loaded from markdown)
6. **FAQ** - Frequently asked questions (loaded from markdown)

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Marked** - Markdown parser for dynamic content
- **CSS Grid & Flexbox** - Modern responsive layouts

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Top navigation bar
│   ├── Navigation.css
│   ├── Footer.jsx         # Footer component
│   └── Footer.css
├── pages/
│   ├── Home.jsx           # Landing page
│   ├── Home.css
│   ├── Schedule.jsx       # Conference schedule
│   ├── Schedule.css
│   ├── Speakers.jsx       # Speaker list
│   ├── Speakers.css
│   ├── Team.jsx          # Team page
│   ├── Team.css
│   ├── CodeOfConduct.jsx  # CoC page
│   ├── CodeOfConduct.css
│   ├── FAQ.jsx           # FAQ page
│   └── FAQ.css
├── utils/
│   └── markdownLoader.js   # Markdown loading utility
├── assets/
│   ├── text/
│   │   ├── coc.md         # Code of Conduct markdown
│   │   └── faq.md         # FAQ markdown
│   └── branding/
│       └── SISTEM2026_Logo.png
├── App.jsx                # Main app with routes
├── App.css
├── main.jsx              # React entry point
├── index.css             # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/sistemconf/website.git
cd website
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1d4ed8;
    --secondary-color: #10b981;
    --dark-bg: #0f172a;
    --light-bg: #f8fafc;
    --text-dark: #1e293b;
    --text-light: #64748b;
}
```

### Content

- **Schedule**: Edit `src/pages/Schedule.jsx` to update conference dates and sessions
- **Speakers**: Edit `src/pages/Speakers.jsx` to add/remove speakers
- **Team**: Edit `src/pages/Team.jsx` to update team members
- **Code of Conduct**: Edit `src/assets/text/coc.md`
- **FAQ**: Edit `src/assets/text/faq.md`

## Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Medium**: 768px - 1024px
- **Large**: > 1024px

## Features to Consider Adding

- Event registration integration
- Sponsor showcase page
- Image galleries for speakers/committee
- Blog or news section
- Ticket purchasing system
- Social media integration
- Dark mode toggle
- Search functionality

## Performance

The website is optimized for performance:

- Lazy loading of markdown content
- Efficient CSS Grid layouts
- Minimal JavaScript bundle
- Fast dev server with Vite
- Optimized images

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## Contact

For questions about the conference, visit our website or contact us at:

- Email: info@sistemconf.com
- Twitter: @sistemconf

---

Built with ❤️ for the SISTEM 2026 Conference

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it,
see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check
out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information
on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
