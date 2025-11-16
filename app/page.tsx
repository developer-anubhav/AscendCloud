"use client"
import React, { useState } from 'react';
import { Cloud, Shield, Zap, Database, Users, ArrowRight, Menu, X, Check,} from 'lucide-react';

export default function AscendCloud() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Performance",
      description: "99.99% uptime SLA with global CDN and edge computing capabilities"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Scalable Infrastructure",
      description: "Auto-scaling resources that grow with your business needs"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Dedicated enterprise support team available around the clock"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      features: ["100GB Storage", "5 Team Members", "Basic Support", "API Access"],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      features: ["1TB Storage", "25 Team Members", "Priority Support", "Advanced Analytics", "Custom Integrations"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Unlimited Storage", "Unlimited Team Members", "Dedicated Support", "Custom Solutions", "SLA Guarantee"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Cloud className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Ascend Cloud</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-blue-500/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-gray-300 hover:text-white transition">Features</a>
              <a href="#pricing" className="block text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#contact" className="block text-gray-300 hover:text-white transition">Contact</a>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Now with AI-Powered Analytics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ascend Cloud
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Built for Scale
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform your business with secure, scalable cloud infrastructure trusted by industry leaders worldwide
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition transform hover:scale-105">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm border border-white/20 transition">
              Schedule Demo
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "99.99%", label: "Uptime" },
              { value: "500K+", label: "Users" },
              { value: "150+", label: "Countries" },
              { value: "24/7", label: "Support" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to build, deploy, and scale with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition transform hover:scale-105"
              >
                <div className="bg-blue-500/10 w-16 h-16 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-blue-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-linear-to-r from-blue-500 to-cyan-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-blue-400 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-linear-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Join thousands of companies already using CloudEnterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white transition">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 border-t border-blue-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Cloud className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-white">CloudEnterprise</span>
              </div>
              <p className="text-gray-400 text-sm">
                Building the future of enterprise cloud infrastructure
              </p>
            </div>
            
            {[
              { title: "Product", links: ["Features", "Pricing", "Security", "Roadmap"] },
              { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
              { title: "Support", links: ["Documentation", "API", "Status", "Contact"] }
            ].map((column, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-white mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-blue-500/20 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 CloudEnterprise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}