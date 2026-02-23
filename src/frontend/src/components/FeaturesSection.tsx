import { Database, Target, TrendingUp } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: '/assets/generated/icon-search.dim_64x64.png',
      iconComponent: Target,
      title: 'Lead Discovery',
      description: 'Find and connect with your ideal customers using our advanced search filters and AI-powered matching algorithms.',
    },
    {
      icon: '/assets/generated/icon-data.dim_64x64.png',
      iconComponent: Database,
      title: 'Data Intelligence',
      description: 'Access comprehensive business intelligence with verified contact information, company insights, and market analytics.',
    },
    {
      icon: '/assets/generated/icon-growth.dim_64x64.png',
      iconComponent: TrendingUp,
      title: 'Business Growth',
      description: 'Accelerate your sales pipeline with targeted outreach, automated workflows, and real-time performance tracking.',
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Everything You Need to Grow
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Powerful tools and insights to help you find, connect, and convert your ideal customers.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.iconComponent;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                
                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
