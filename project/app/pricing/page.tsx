'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  XCircle, 
  Star,
  ArrowRight,
  Users,
  Zap,
  Shield,
  Crown,
  DollarSign,
  Clock,
  MessageCircle,
  Globe
} from 'lucide-react';

const pricingPlans = [
  {
    name: 'Starter',
    price: '$999',
    period: '/month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Basic Software Development',
      '5 User Licenses',
      'Email Support',
      'Basic Analytics',
      'Standard Security',
      'Monthly Updates'
    ],
    notIncluded: [
      'Advanced Features',
      'Priority Support',
      'Custom Integrations',
      'Dedicated Account Manager'
    ],
    icon: Users,
    badge: 'Popular',
    badgeColor: 'bg-green-500',
    buttonText: 'Get Started',
    popular: false
  },
  {
    name: 'Professional',
    price: '$2,499',
    period: '/month',
    description: 'Ideal for growing businesses with advanced needs',
    features: [
      'Full Software Development Suite',
      '25 User Licenses',
      'Priority Email & Phone Support',
      'Advanced Analytics & Reporting',
      'Enhanced Security Features',
      'Weekly Updates',
      'Custom Integrations',
      'Training Sessions'
    ],
    notIncluded: [
      'Dedicated Account Manager',
      '24/7 Support',
      'Custom Development'
    ],
    icon: Zap,
    badge: 'Most Popular',
    badgeColor: 'bg-red-500',
    buttonText: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with complex requirements',
    features: [
      'Complete Technology Stack',
      'Unlimited User Licenses',
      '24/7 Priority Support',
      'Advanced Analytics & AI',
      'Enterprise Security',
      'Daily Updates',
      'Custom Development',
      'Dedicated Account Manager',
      'On-site Training',
      'SLA Guarantee',
      'Custom Integrations',
      'White-label Solutions'
    ],
    notIncluded: [],
    icon: Crown,
    badge: 'Enterprise',
    badgeColor: 'bg-purple-500',
    buttonText: 'Contact Sales',
    popular: false
  }
];

const additionalServices = [
  {
    name: 'Custom Development',
    price: '$150',
    period: '/hour',
    description: 'Tailored software solutions for your specific needs',
    features: ['Custom Features', 'API Development', 'Database Design', 'UI/UX Design']
  },
  {
    name: 'Consulting Services',
    price: '$200',
    period: '/hour',
    description: 'Expert technology consulting and strategy',
    features: ['Technology Assessment', 'Architecture Planning', 'Security Audits', 'Performance Optimization']
  },
  {
    name: 'Training & Support',
    price: '$500',
    period: '/day',
    description: 'Comprehensive training and ongoing support',
    features: ['User Training', 'Admin Training', 'Documentation', 'Ongoing Support']
  },
  {
    name: 'Maintenance & Updates',
    price: '$1,000',
    period: '/month',
    description: 'Regular maintenance and feature updates',
    features: ['Bug Fixes', 'Security Updates', 'Feature Updates', 'Performance Monitoring']
  }
];

export default function PricingPage() {
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
              <Link href="/products" className="text-gray-300 hover:text-red-400 transition-colors">
                Products
              </Link>
              <Link href="/pricing" className="text-white hover:text-red-400 transition-colors">
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
            Simple, <span className="text-red-500">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features with flexible options to scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-red-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className={plan.badgeColor}>
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <plan.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <p className="text-gray-300">{plan.description}</p>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4 mb-8">
                    <h4 className="text-white font-semibold">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="text-white font-semibold mt-6">Not included:</h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-500">
                              <XCircle className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Need something specific? We offer additional services to meet your unique requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:border-red-500 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{service.name}</CardTitle>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-red-500">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and services
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Can I change my plan later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Do you offer custom pricing for large organizations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Absolutely! Our Enterprise plan is designed for large organizations and includes custom pricing based on your specific needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Is there a free trial available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Yes, we offer a 14-day free trial for our Professional plan. No credit card required to start your trial.
                </p>
              </CardContent>
            </Card>
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
            Choose the perfect plan for your business or contact us for a custom solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-red-700">
              Contact Sales
              <MessageCircle className="ml-2 h-4 w-4" />
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
              <h3 className="text-white font-semibold mb-4">Pricing</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Starter Plan</li>
                <li>Professional Plan</li>
                <li>Enterprise Plan</li>
                <li>Custom Solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Help Center</li>
                <li>Contact Support</li>
                <li>Training</li>
                <li>Documentation</li>
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
