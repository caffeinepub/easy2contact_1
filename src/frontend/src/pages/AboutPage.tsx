import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Accuracy First',
      description: 'We prioritize data quality and verification to ensure you get the most reliable information.',
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your growth is our mission. We provide dedicated support to help you achieve your goals.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We continuously improve our platform with cutting-edge technology and AI-powered insights.',
    },
    {
      icon: TrendingUp,
      title: 'Results Driven',
      description: 'We measure our success by the tangible results we deliver to our customers.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            About Easy2Contact
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-teal-50 md:text-xl">
            Empowering businesses with intelligent contact data and lead generation solutions since 2020.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              At Easy2Contact, we believe that every business deserves access to high-quality contact data and
              lead generation tools. Our mission is to democratize business intelligence and make it easy for
              companies of all sizes to find and connect with their ideal customers.
            </p>
            <p className="text-lg text-muted-foreground">
              We've built a platform that combines cutting-edge technology with human expertise to deliver the
              most accurate and actionable business intelligence available. Our team is dedicated to helping you
              accelerate your growth and achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                    <IconComponent className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-teal-600">500+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-teal-600">10M+</div>
              <div className="text-muted-foreground">Verified Contacts</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-teal-600">95%</div>
              <div className="text-muted-foreground">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-teal-600">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Choose Us?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We're more than just a data provider—we're your partner in growth.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-3 text-xl font-semibold">Verified & Accurate Data</h3>
              <p className="text-muted-foreground">
                Our proprietary verification system ensures that every contact in our database is accurate and
                up-to-date. We continuously monitor and update our data to maintain the highest quality standards.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-3 text-xl font-semibold">AI-Powered Insights</h3>
              <p className="text-muted-foreground">
                Leverage the power of artificial intelligence to find your ideal customers. Our advanced algorithms
                analyze millions of data points to deliver the most relevant leads for your business.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="mb-3 text-xl font-semibold">Dedicated Support</h3>
              <p className="text-muted-foreground">
                Our expert team is here to help you succeed. From onboarding to ongoing support, we're committed to
                ensuring you get the most value from our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
