# O-Kab E-commerce Project

This repository contains both the original shop HTML template and its Next.js conversion.

## 📁 Project Structure

```
o-kab/
├── frontend/          # Next.js conversion (Modern React application)
│   ├── app/          # Next.js app directory
│   ├── public/       # Static assets (CSS, JS, images, fonts)
│   └── package.json  # Dependencies
│
└── shop/             # Original HTML template
    ├── css/          # SASS/CSS files
    ├── js/           # jQuery and plugins
    ├── images/       # All images
    ├── fonts/        # Font files
    └── *.html        # HTML pages
```

## 🚀 Quick Start

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Shop (Original HTML)

Simply open `shop/index.html` in your browser.

## 📖 Documentation

- **Frontend Documentation**: See [frontend/README.md](frontend/README.md)
- **Conversion Details**: See [frontend/CONVERSION_README.md](frontend/CONVERSION_README.md)

## 🎯 What's Included

### Frontend (Next.js Application)
- ✅ Complete React/TypeScript conversion
- ✅ Next.js 16 with App Router
- ✅ All original functionality preserved
- ✅ Revolution Slider integration
- ✅ Product filtering with Isotope
- ✅ Responsive design
- ✅ Shopping cart
- ✅ Product quick view

### Shop (Original Template)
- ✅ Multiple demo variations
- ✅ E-commerce pages (cart, checkout, product details)
- ✅ Blog layouts
- ✅ Portfolio pages
- ✅ Contact forms
- ✅ RTL support
- ✅ Dark mode variants

## 🛠️ Technologies

### Frontend
- Next.js 16.1.6
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- jQuery (for legacy plugins)

### Shop
- HTML5
- SASS/CSS3
- jQuery 2.1.1
- Bootstrap
- Revolution Slider
- Multiple jQuery plugins

## 📦 Features

- **Responsive Design**: Works on all devices
- **Product Management**: Grid and list views with filtering
- **Shopping Cart**: Add to cart, wishlist functionality
- **User Account**: Login, registration, account management
- **Blog**: Multiple blog layouts
- **SEO Friendly**: Proper meta tags and structure
- **Performance**: Optimized images and code

## 🚀 Deployment

### Frontend (Vercel - Recommended)
```bash
cd frontend
vercel
```

### Frontend (Other Platforms)
```bash
cd frontend
npm run build
# Deploy the .next folder
```

## 📝 Development

### Adding New Pages
1. Create a new file in `frontend/app/`
2. Follow the existing component structure
3. Import and use existing components

### Modifying Styles
- Global styles: `frontend/app/globals.css`
- Original styles: `frontend/public/css/`

### Adding Components
Create new components in `frontend/app/components/`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project contains a conversion of a commercial template. Please refer to the original template's license for usage rights.

## 🔗 Links

- **Repository**: https://github.com/rupeshmutkule/o-kab
- **Frontend Demo**: [Deploy to see live demo]
- **Original Shop**: Open `shop/index.html` locally

## 📧 Support

For questions or issues:
- Open an issue on GitHub
- Check the documentation in `frontend/README.md`

---

**Note**: The frontend folder contains a modern Next.js conversion while maintaining pixel-perfect design from the original shop template.
