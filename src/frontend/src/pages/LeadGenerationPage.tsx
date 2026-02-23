import LeadGenerationForm from '../components/LeadGenerationForm';
import { Target, Filter, Zap, CheckCircle2 } from 'lucide-react';

export default function LeadGenerationPage() {
  const benefits = [
    {
      icon: Target,
      title: 'Precise Targeting',
      description: 'Define your ideal customer profile with advanced filters and criteria.',
    },
    {
      icon: Filter,
      title: 'Smart Filtering',
      description: 'Use AI-powered algorithms to find the most relevant leads for your business.',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get immediate access to qualified leads that match your criteria.',
    },
    {
      icon: CheckCircle2,
      title: 'Verified Contacts',
      description: 'All leads are verified and validated to ensure maximum accuracy.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Lead Generation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-teal-50 md:text-xl">
            Find your ideal customers with our intelligent lead generation platform. Tell us what you're looking for, and we'll deliver qualified leads directly to you.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our streamlined process makes it easy to find and connect with your target audience.
            </p>
          </div>

          <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                    <IconComponent className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Form Section */}
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Start Your Search</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below with your lead criteria, and our team will get back to you with a customized list of qualified prospects.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
              <LeadGenerationForm />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
              What You'll Receive
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold">Comprehensive Contact Information</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Full name and job title</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Verified email addresses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Direct phone numbers</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold">Company Intelligence</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Company size and revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Industry and location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Technology stack</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold">Actionable Insights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Lead scoring and prioritization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Buying signals and intent data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>Recommended outreach strategies</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold">Export & Integration</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>CSV and Excel export</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>CRM integration support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span>API access for automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
