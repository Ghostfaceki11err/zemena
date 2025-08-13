'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Shield, 
  Database,
  Cloud,
  Zap,
  ArrowRight,
  Star,
  Users,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Zemenay ERP Suite',
    category: 'Enterprise Software',
    description: 'Comprehensive enterprise resource planning solution for modern businesses',
    features: [
      'Financial Management',
      'Inventory Control',
      'Human Resources',
      'Customer Relationship Management',
      'Business Intelligence',
      'Multi-language Support'
    ],
    price: 'Contact Us',
    image: '/Zemenay Logo Red.png',
    icon: Database,
    badge: 'Popular',
    badgeColor: 'bg-red-500'
  },
  {
    id: 2,
    name: 'Zemenay Mobile App Platform',
    category: 'Mobile Development',
    description: 'Cross-platform mobile application development framework',
    features: [
      'React Native Framework',
      'Native Performance',
      'Offline Capability',
      'Push Notifications',
      'Analytics Integration',
      'App Store Deployment'
    ],
    price: 'Contact Us',
    image: '/Zemenay Logo Red.png',
    icon: Smartphone,
    badge: 'New',
    badgeColor: 'bg-green-500'
  },
  {
    id: 3,
    name: 'Zemenay Web Framework',
    category: 'Web Development',
    description: 'Modern web development framework for scalable applications',
    features: [
      'Next.js Integration',
      'TypeScript Support',
      'SEO Optimization',
      'Performance Monitoring',
      'Security Features',
      'Cloud Deployment'
    ],
    price: 'Contact Us',
    image: '/Zemenay Logo Red.png',
    icon: Globe,
    badge: 'Featured',
    badgeColor: 'bg-blue-500'
  },
  {
    id: 4,
    name: 'Zemenay Security Suite',
    category: 'Cybersecurity',
    description: 'Advanced cybersecurity solutions for enterprise protection',
    features: [
      'Threat Detection',
      'Real-time Monitoring',
      'Incident Response',
      'Compliance Management',
      'Penetration Testing',
      'Security Training'
    ],
    price: 'Contact Us',
    image: '/Zemenay Logo Red.png',
    icon: Shield,
    badge: 'Premium',
    badgeColor: 'bg-purple-500'
  },
  {
    id: 5,
    name: 'Zemenay Cloud Platform',
    category: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and platform services',
    features: [
      'Auto-scaling',
      'Load Balancing',
      'Data Backup',
      'Disaster Recovery',
      'Monitoring & Alerts',
      'Cost Optimization'
    ],
    price: 'Contact Us',
    image: '/Zemenay Logo Red.png',
    icon: Cloud,
    badge: 'Enterprise',
    badgeColor: 'bg-orange-500'
  },
  {
    id: 6,
    name: 'Zemenay API Gateway',
    category: 'Integration',
    description: 'High-performance API management and integration platform',
    features: [
      'API Design Tools',
      'Rate Limiting',
      'Authentication',
      'Documentation',
      'Analytics',
      'Developer Portal'
    ],
    price: 'Contact Us',
    image: '/Zemenay Logo Red.png',
    icon: Zap,
    badge: 'Developer',
    badgeColor: 'bg-indigo-500'
  }
];

const categories = [
  { name: 'All Products', icon: Code, active: true },
  { name: 'Enterprise Software', icon: Database },
  { name: 'Mobile Development', icon: Smartphone },
  { name: 'Web Development', icon: Globe },
  { name: 'Cybersecurity', icon: Shield },
  { name: 'Cloud Solutions', icon: Cloud }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black shadow-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image
                src="/Zemenay Logo Red.png"
                alt="Zemenay Tech Solutions Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h1 className="text-xl font-bold text-white font-zemenay">
                Zemenay Tech Solutions
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-red-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-white hover:text-red-400 transition-colors">
                Products
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-red-400 transition-colors">
                Pricing
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-red-500">Products</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of technology solutions designed to transform your business operations.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${
                  category.active 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <product.icon className="h-12 w-12 text-red-500" />
                    {product.badge && (
                      <Badge className={product.badgeColor}>
                        {product.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white text-xl">{product.name}</CardTitle>
                  <p className="text-gray-400 text-sm">{product.category}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-lg">{product.price}</div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technology and designed for real-world business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
              <p className="text-gray-300">
                All our products are built with the highest standards of quality and performance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
              <p className="text-gray-300">
                Get dedicated support from our team of technology experts whenever you need help.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Implementation</h3>
              <p className="text-gray-300">
                Quick deployment and setup with minimal disruption to your business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Contact our sales team to discuss your requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Request Demo
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-red-700">
              Contact Sales
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/Zemenay Logo Red.png"
                  alt="Zemenay Tech Solutions Logo"
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <span className="text-white font-bold">Zemenay Tech</span>
              </div>
              <p className="text-gray-300">
                Transforming businesses through innovative technology solutions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-300">
                <li>ERP Suite</li>
                <li>Mobile Platform</li>
                <li>Web Framework</li>
                <li>Security Suite</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>info@zemenaytech.com</li>
                <li>+251 911 123 456</li>
                <li>Addis Ababa, Ethiopia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Zemenay Tech Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
