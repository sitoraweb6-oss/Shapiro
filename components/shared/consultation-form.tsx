'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  caseType: z.string().min(1, "Please select a case type"),
  description: z.string().min(10, "Please provide more details"),
});

type FormData = z.infer<typeof formSchema>;

export function ConsultationForm({ variant = 'hero' }: { variant?: 'hero' | 'contact' }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 ${
        variant === 'hero' ? 'bg-white/60 backdrop-blur-2xl border border-white shadow-[0_32px_64px_-12px_rgba(10,27,79,0.15)] rounded-2xl relative overflow-hidden' : 'bg-surface shadow-[0_32px_64px_-12px_rgba(10,27,79,0.15)] rounded-2xl relative overflow-hidden'
      }`}>
        <CheckCircle2 className="w-16 h-16 text-success mb-6" />
        <h3 className="font-display text-display-m text-primary mb-2">Request Received</h3>
        <p className="text-body-m text-muted">
          Our intake team is reviewing your information. We will call you at the number provided shortly.
        </p>
      </div>
    );
  }

  return (
    <div className={`p-8 sm:p-10 ${
      variant === 'hero' ? 'bg-white/60 backdrop-blur-2xl border border-white shadow-[0_32px_64px_-12px_rgba(10,27,79,0.15)] rounded-2xl relative overflow-hidden' : 'bg-surface shadow-[0_32px_64px_-12px_rgba(10,27,79,0.15)] rounded-2xl relative overflow-hidden'
    }`}>
      {variant === 'hero' && <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary"></div>}
      <h3 className="font-display text-2xl text-primary mb-2">Check Your Eligibility</h3>
      <p className="text-[13px] text-muted mb-8 font-medium">Speak directly with a senior legal advisor within 24 hours.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] uppercase font-bold text-muted mb-1.5 tracking-wider">First Name</label>
            <input
              {...register('firstName')}
              className={`w-full bg-bg border ${errors.firstName ? 'border-accent' : 'border-border'} rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/10 focus:border-secondary transition-all`}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] uppercase font-bold text-muted mb-1.5 tracking-wider">Last Name</label>
            <input
              {...register('lastName')}
              className={`w-full bg-bg border ${errors.lastName ? 'border-accent' : 'border-border'} rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/10 focus:border-secondary transition-all`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] uppercase font-bold text-muted mb-1.5 tracking-wider">Phone</label>
            <input
              {...register('phone')}
              type="tel"
              className={`w-full bg-bg border ${errors.phone ? 'border-accent' : 'border-border'} rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/10 focus:border-secondary transition-all`}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] uppercase font-bold text-muted mb-1.5 tracking-wider">Email</label>
            <input
              {...register('email')}
              type="email"
              className={`w-full bg-bg border ${errors.email ? 'border-accent' : 'border-border'} rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/10 focus:border-secondary transition-all`}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] uppercase font-bold text-muted mb-1.5 tracking-wider">Case Type</label>
          <select
            {...register('caseType')}
            className={`w-full bg-bg border ${errors.caseType ? 'border-accent' : 'border-border'} rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/10 focus:border-secondary transition-all appearance-none text-muted`}
          >
            <option value="">Select a practice area...</option>
            <option value="mass-tort">Mass Tort</option>
            <option value="medical-device">Medical Device</option>
            <option value="drug-injury">Drug Injury</option>
            <option value="environmental">Environmental Exposure</option>
            <option value="other">Other / Unsure</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] uppercase font-bold text-muted mb-1.5 tracking-wider">Brief Description</label>
          <textarea
            {...register('description')}
            rows={4}
            className={`w-full bg-bg border ${errors.description ? 'border-accent' : 'border-border'} rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/10 focus:border-secondary transition-all resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-4 rounded-md font-bold uppercase tracking-widest text-[13px] shadow-lg hover:shadow-xl transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Confidential Inquiry'}
        </button>
      </form>
      <p className="text-[10px] text-center text-[#98A2B3] mt-6 leading-relaxed italic">
        No attorney-client relationship is formed until a written contract is signed.
      </p>
    </div>
  );
}
