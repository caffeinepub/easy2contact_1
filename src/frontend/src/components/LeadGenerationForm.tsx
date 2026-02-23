import { useState } from 'react';
import { useActor } from '../hooks/useActor';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function LeadGenerationForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    criteria: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      await actor.submitContactForm(
        formData.name,
        formData.email,
        formData.company,
        '', // message field empty for lead generation
        formData.criteria
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactRequests'] });
      setShowSuccess(true);
      setFormData({ name: '', email: '', company: '', criteria: '' });
      setTimeout(() => setShowSuccess(false), 5000);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto max-w-2xl">
      {showSuccess && (
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-teal-50 p-4 text-teal-800 dark:bg-teal-900/20 dark:text-teal-200">
          <CheckCircle2 className="h-5 w-5" />
          <p className="font-medium">Your lead generation request has been submitted successfully!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Acme Inc."
          />
        </div>

        <div>
          <label htmlFor="criteria" className="mb-2 block text-sm font-medium">
            Lead Search Criteria *
          </label>
          <textarea
            id="criteria"
            name="criteria"
            required
            value={formData.criteria}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            placeholder="Describe your ideal customer profile, industry, location, company size, job titles, etc."
          />
        </div>

        <button
          type="submit"
          disabled={submitMutation.isPending}
          className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitMutation.isPending ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Submitting...
            </span>
          ) : (
            'Submit Request'
          )}
        </button>

        {submitMutation.isError && (
          <p className="text-sm text-destructive">
            An error occurred. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
