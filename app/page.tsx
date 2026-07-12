import { Hero } from '@/components/sections/hero';
import { StatsCounter } from '@/components/sections/stats-counter';
import { WhyChooseBento } from '@/components/sections/why-choose-bento';
import { PracticeAreas } from '@/components/sections/practice-areas';
import { ProcessStepper } from '@/components/sections/process-stepper';
import { Timeline } from '@/components/sections/timeline';
import { CaseResults } from '@/components/sections/case-results';
import { Testimonials } from '@/components/sections/testimonials';
import { KnowledgeCenterGrid } from '@/components/sections/knowledge-center-grid';
import { AttorneyProfile } from '@/components/sections/attorney-profile';
import { ContactSplit } from '@/components/sections/contact-split';
import { UsaMap } from '@/components/sections/usa-map';
import { StickyCTA } from '@/components/shared/sticky-cta';

export default function Home() {
  return (
    <>
      <Hero />
      <StickyCTA />
      <StatsCounter />
      <WhyChooseBento />
      <PracticeAreas />
      <Timeline />
      <ProcessStepper />
      <UsaMap />
      <CaseResults />
      <Testimonials />
      <KnowledgeCenterGrid />
      <AttorneyProfile />
      {/* <ContactSplit /> */}
    </>
  );
}
