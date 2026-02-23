import Hero from '../components/Hero';
import FeaturesSection from '../components/FeaturesSection';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      
      {/* Why Choose Us Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Why Choose Easy2Contact?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We're committed to delivering the most accurate and actionable business intelligence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                <Shield className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Verified Data</h3>
              <p className="text-muted-foreground">
                All contacts are verified and regularly updated to ensure maximum accuracy.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/30">
                <Zap className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Instant Access</h3>
              <p className="text-muted-foreground">
                Get immediate access to millions of contacts with our powerful search tools.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Expert Support</h3>
              <p className="text-muted-foreground">
                Our dedicated team is here to help you succeed every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-700 p-12 text-center text-white md:p-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Ready to Grow Your Business?
            </h2>
            <p className="mb-8 text-lg text-teal-50 md:text-xl">
              Join hundreds of companies already using Easy2Contact to accelerate their growth.
            </p>
            <Link
              to="/lead-generation"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-teal-700 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
