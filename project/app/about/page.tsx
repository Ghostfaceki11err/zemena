'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  CheckCircle,
  ArrowRight,
  Code,
  Smartphone,
  Shield,
  Database
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Abebe Kebede',
    role: 'CEO & Founder',
    image: '/Zemenay Logo Red.png',
    description: 'Visionary leader with 10+ years in tech industry'
  },
  {
    name: 'Tigist Haile',
    role: 'CTO',
    image: '/Zemenay Logo Red.png',
    description: 'Expert in software architecture and cloud solutions'
  },
  {
    name: 'Yohannes Assefa',
    role: 'Lead Developer',
    image: '/Zemenay Logo Red.png',
    description: 'Full-stack developer specializing in modern web technologies'
  },
  {
    name: 'Rahel Tesfaye',
    role: 'UX/UI Designer',
    image: '/Zemenay Logo Red.png',
    description: 'Creative designer focused on user experience excellence'
  }
];

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Constantly pushing boundaries with cutting-edge technology'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with clients to achieve shared goals'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Delivering the highest quality solutions in every project'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Creating solutions that make a difference worldwide'
  }
];

const technologies = [
  { name: 'React & Next.js', icon: Code },
  { name: 'Mobile Development', icon: Smartphone },
  { name: 'Cybersecurity', icon: Shield },
  { name: 'Cloud Solutions', icon: Database }
];

export default function AboutPage() {
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
              <Link href="/about" className="text-white hover:text-red-400 transition-colors">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-red-500">Zemenay Tech</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a passionate team of technology enthusiasts dedicated to transforming businesses through innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To empower businesses with cutting-edge technology solutions that drive growth, 
                  efficiency, and innovation. We believe in making technology accessible and 
                  beneficial for organizations of all sizes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the leading technology partner in Ethiopia and beyond, known for 
                  delivering exceptional digital solutions that create lasting impact and 
                  drive sustainable business transformation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-colors">
                <CardHeader className="text-center">
                  <value.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <CardTitle className="text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The talented individuals behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <p className="text-red-500 font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Technology Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We work with the latest technologies to deliver cutting-edge solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-colors">
                <CardHeader className="text-center">
                  <tech.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <CardTitle className="text-white">{tech.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-red-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-red-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-red-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-red-100">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              View Our Work
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
