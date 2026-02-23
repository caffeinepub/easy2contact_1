import { Check, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function ServicesPage() {
  const services = [
    {
      title: 'Contact Data Services',
      description: 'Access our comprehensive database of verified business contacts.',
      features: [
        'Over 10 million verified contacts',
        'Real-time data updates',
        'Advanced search filters',
        'Export to CRM systems',
        'Email verification',
        'Phone number validation',
      ],
    },
    {
      title: 'Lead Generation',
      description: 'Find and connect with your ideal customers efficiently.',
      features: [
        'AI-powered lead matching',
        'Custom search criteria',
        'Industry-specific targeting',
        'Company size filtering',
        'Geographic targeting',
        'Job title and role filters',
      ],
    },
    {
      title: 'Business Intelligence',
      description: 'Gain insights into companies and market trends.',
      features: [
        'Company profiles and insights',
        'Market analysis reports',
        'Competitive intelligence',
        'Industry trends tracking',
        'Revenue and growth data',
        'Technology stack information',
      ],
    },
  ];

  const packages = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '500 contact credits/month',
        'Basic search filters',
        'Email support',
        'CSV export',
      ],
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing sales teams',
      features: [
        '2,000 contact credits/month',
        'Advanced search filters',
        'Priority email support',
        'CRM integration',
        'API access',
        'Custom reports',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific needs',
      features: [
        'Unlimited contact credits',
        'All advanced features',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'Training and onboarding',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-teal-50 md:text-xl">
            Comprehensive solutions to help you find, connect, and convert your ideal customers.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:gap-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                  <p className="mb-6 text-lg text-muted-foreground">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`flex items-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="h-64 w-full rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Choose Your Plan
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Flexible pricing options to match your business needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-xl ${
                  pkg.popular ? 'border-primary shadow-lg' : 'border-border'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>

                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/lead-generation"
                  className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-border bg-background hover:bg-accent'
                  }`}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
