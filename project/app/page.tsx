'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions for your business needs',
    color: 'text-blue-400'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    color: 'text-green-400'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern, responsive web applications and websites',
    color: 'text-purple-400'
  },
  {
    icon: Shield,
    title: 'Cybersecurity Solutions',
    description: 'Protect your digital assets with advanced security',
    color: 'text-red-400'
  }
];

const features = [
  '24/7 Technical Support',
  'Agile Development Methodology',
  'Cloud Infrastructure Solutions',
  'API Integration Services',
  'Database Design & Optimization',
  'UI/UX Design Excellence'
];

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
              <Link href="/" className="text-white hover:text-red-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors">
                About Us
              </Link>
              <Link href="/products" className="text-gray-300 hover:text-red-400 transition-colors">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transforming Ideas Into
            <span className="text-red-500"> Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Zemenay Tech Solutions delivers cutting-edge technology solutions that drive business growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-colors">
                <CardHeader>
                  <service.icon className={`h-8 w-8 ${service.color} mb-2`} />
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zemenay Tech?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="text-center">
                <Users className="h-16 w-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300 mb-6">
                  Our team of experienced developers, designers, and consultants work together to deliver exceptional results.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-500">50+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-500">25+</div>
                    <div className="text-sm text-gray-400">Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-500">5+</div>
                    <div className="text-sm text-gray-400">Years</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Let's discuss how we can help transform your business with technology.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
            Contact Us Today
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Software Development</li>
                <li>Mobile Apps</li>
                <li>Web Development</li>
                <li>Cybersecurity</li>
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