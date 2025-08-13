# Zemenay Tech Solutions - Blog Platform

A modern blog platform built with Next.js 15.4.6, React 18.3.1, and TypeScript.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15.4.6, React 18.3.1, TypeScript
- **Local Storage**: No external database required - runs completely locally
- **Admin Panel**: Full CRUD operations for blog posts
- **Authentication**: Simple local authentication system
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Updates**: Instant updates with local storage

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6
- **Language**: TypeScript
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS
- **Components**: Radix UI + Custom components
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Storage**: Browser localStorage (no external dependencies)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zemenay/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication

The application uses a simple local authentication system:

- **Demo Credentials**:
  - Email: `admin@zemenay.com`
  - Password: `admin123`

## 📝 Blog Management

### Sample Data
The application comes with sample blog posts that are automatically loaded on first run:

1. **Welcome to Zemenay Tech Solutions** (Published)
2. **The Future of Web Development** (Published)
3. **Mobile App Development Best Practices** (Draft)

### Features
- Create, read, update, and delete blog posts
- Draft and published post status
- Rich text content with excerpts
- Automatic slug generation
- Search functionality
- Responsive admin interface

## 🏗️ Project Structure

```
app/
├── admin/           # Admin panel pages
├── login/           # Authentication pages
├── posts/           # Public blog pages
├── layout.tsx       # Root layout
└── page.tsx         # Home page

components/
├── auth/            # Authentication components
├── layout/          # Layout components
├── posts/           # Blog post components
└── ui/              # Reusable UI components

contexts/
└── AuthContext.tsx  # Authentication context

lib/
└── posts.ts         # Blog post management

types/
└── post.ts          # TypeScript type definitions
```

## 🚀 Deployment

The application can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## 🔄 Recent Updates

### Next.js 15.4.6 Upgrade
- Updated from Next.js 13.5.1 to 15.4.6
- Fixed async params handling for dynamic routes
- Updated React to 18.3.1
- Removed deprecated packages
- Fixed TypeScript compatibility issues

### Supabase Removal
- Removed all Supabase dependencies
- Implemented local storage-based data persistence
- Created local authentication system
- Added sample data initialization

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Make sure all dependencies are installed
   ```bash
   npm install
   ```

2. **Local Storage Issues**: Clear browser data if posts don't load
   ```javascript
   localStorage.clear();
   ```

3. **Authentication Issues**: Use the demo credentials provided above

## 📄 License

This project is part of Zemenay Tech Solutions portfolio.

## 🤝 Contributing

For internal development and improvements only.
