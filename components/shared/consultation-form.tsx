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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const getContainerClasses = () => {
    const base = "p-8 sm:p-10 rounded-2xl relative overflow-hidden transition-all duration-500";
    if (variant === 'hero') {
      return `${base} bg-white/70 backdrop-blur-[32px] border border-white/60 shadow-[0_24px_60px_-12px_rgba(10,27,79,0.25)] hover:shadow-[0_32px_72px_-12px_rgba(10,27,79,0.3)] group/form`;
    }
    return `${base} bg-surface shadow-[0_16px_40px_-8px_rgba(10,27,79,0.1)] hover:shadow-[0_24px_50px_-8px_rgba(10,27,79,0.15)] group/form`;
  };

  const getInputClasses = (fieldName: keyof FormData) => {
    const isError = errors[fieldName];
    const isFocused = focusedField === fieldName;
    return `w-full bg-white/50 border ${isError ? 'border-accent/50' : 'border-border/60'} rounded-lg px-4 py-3.5 text-[14px] text-text 
            shadow-[0_2px_10px_rgba(0,0,0,0.02)]
            hover:border-secondary/40 hover:bg-white/80
            focus:outline-none focus:ring-4 ${isError ? 'focus:ring-accent/10 focus:border-accent' : 'focus:ring-secondary/15 focus:border-secondary'} 
            focus:bg-white
            transition-all duration-300`;
  };

  if (isSubmitted) {
    return (
      <div className={`flex flex-col items-center justify-center h-full min-h-[500px] text-center p-8 ${getContainerClasses()}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-success/5 to-transparent pointer-events-none" />
        <CheckCircle2 className="w-16 h-16 text-success mb-6 animate-in zoom-in duration-500" />
        <h3 className="font-display text-display-m text-primary mb-2">Request Received</h3>
        <p className="text-body-m text-muted max-w-sm">
          Our intake team is reviewing your information. We will call you at the number provided shortly.
        </p>
      </div>
    );
  }

  return (
    <div className={getContainerClasses()}>
      {variant === 'hero' && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-80"></div>
      )}
      
      {/* Subtle background glow effect inside the form */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none rounded-2xl" />

      <div className="relative z-10">
        <h3 className="font-display text-3xl text-primary mb-2 font-medium tracking-tight group-hover/form:text-secondary transition-colors duration-500">
          Check Your Eligibility
        </h3>
        <p className="text-[14px] text-muted mb-8 font-normal">
          Speak directly with a senior legal advisor within 24 hours.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5 group/input">
              <label className="block text-[11px] uppercase font-bold text-muted tracking-[0.1em] transition-colors group-focus-within/input:text-secondary">First Name</label>
              <input
                {...register('firstName')}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => setFocusedField(null)}
                className={getInputClasses('firstName')}
              />
            </div>
            <div className="space-y-1.5 group/input">
              <label className="block text-[11px] uppercase font-bold text-muted tracking-[0.1em] transition-colors group-focus-within/input:text-secondary">Last Name</label>
              <input
                {...register('lastName')}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => setFocusedField(null)}
                className={getInputClasses('lastName')}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5 group/input">
              <label className="block text-[11px] uppercase font-bold text-muted tracking-[0.1em] transition-colors group-focus-within/input:text-secondary">Phone</label>
              <input
                {...register('phone')}
                type="tel"
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className={getInputClasses('phone')}
              />
            </div>
            <div className="space-y-1.5 group/input">
              <label className="block text-[11px] uppercase font-bold text-muted tracking-[0.1em] transition-colors group-focus-within/input:text-secondary">Email</label>
              <input
                {...register('email')}
                type="email"
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className={getInputClasses('email')}
              />
            </div>
          </div>

          <div className="space-y-1.5 group/input">
            <label className="block text-[11px] uppercase font-bold text-muted tracking-[0.1em] transition-colors group-focus-within/input:text-secondary">Case Type</label>
            <div className="relative">
              <select
                {...register('caseType')}
                onFocus={() => setFocusedField('caseType')}
                onBlur={() => setFocusedField(null)}
                className={`${getInputClasses('caseType')} appearance-none pr-10`}
              >
                <option value="">Select a practice area...</option>
                <option value="mass-tort">Mass Tort</option>
                <option value="medical-device">Medical Device</option>
                <option value="drug-injury">Drug Injury</option>
                <option value="environmental">Environmental Exposure</option>
                <option value="other">Other / Unsure</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-muted">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <div className="space-y-1.5 group/input">
            <label className="block text-[11px] uppercase font-bold text-muted tracking-[0.1em] transition-colors group-focus-within/input:text-secondary">Brief Description</label>
            <textarea
              {...register('description')}
              rows={3}
              onFocus={() => setFocusedField('description')}
              onBlur={() => setFocusedField(null)}
              className={`${getInputClasses('description')} resize-none`}
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative overflow-hidden w-full bg-primary text-white py-4.5 rounded-lg font-bold uppercase tracking-[0.15em] text-[13px] shadow-[0_8px_24px_-8px_rgba(10,27,79,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(10,27,79,0.5)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Submit Confidential Inquiry'}</span>
              <span className="absolute inset-0 bg-white/20 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </button>
          </div>
        </form>
        
        <p className="text-[11px] text-center text-muted/70 mt-6 leading-relaxed">
          No attorney-client relationship is formed until a written contract is signed. Your information is confidential.
        </p>
      </div>
    </div>
  );
}
