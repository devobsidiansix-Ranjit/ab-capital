import Footer from '@/components/footer'
import HeroSection from '@/components/hero-section'
import CompanyFormationSection from '@/components/company-formation-section'
import PricingSection from '@/components/pricing-section'
import BusinessStructureSection from '@/components/business-structure-section'
import BusinessLicensesSection from '@/components/business-licenses-section'
import BusinessSetupProcessSection from '@/components/business-setup-process-section'
import GovernmentAgenciesSection from '@/components/government-agencies-section'
import CallToActionSection from '@/components/call-to-action-section'
import Footer1 from '@/components/ui/footer1'
import StatsSection from '@/components/statessection'
import ReviewMarquee from '@/components/review-marquee'


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <CompanyFormationSection />
        <PricingSection />
        <BusinessStructureSection />
        <BusinessLicensesSection />
        <StatsSection />
        <BusinessSetupProcessSection />
        <ReviewMarquee />
        <GovernmentAgenciesSection />
        <CallToActionSection />
      </main>
      <div id='form'>
        <Footer />
      </div>
      <Footer1 />
    </>
  )
}
