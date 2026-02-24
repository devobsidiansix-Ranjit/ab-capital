"use client"

import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Clock, Phone, Mail, FileText, Building, TrendingUp, Users, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { trackingConfig, getConversionValue } from '@/lib/tracking-config'
import ReviewMarquee from '@/components/review-marquee'

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const [service, setService] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [conversionTracked, setConversionTracked] = useState(false)

  const trackConversion = useCallback(() => {
    // Google Ads Conversion Tracking
    if (typeof window !== 'undefined' && window.gtag) {
      const conversionValue = getConversionValue(service)
      
      window.gtag('event', 'conversion', {
        send_to: `${trackingConfig.googleAds.conversionId}/${trackingConfig.googleAds.conversionLabel}`,
        value: conversionValue,
        currency: trackingConfig.conversion.currency,
        transaction_id: `form_${Date.now()}`,
      })
    }

    // Google Analytics Event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submission', {
        event_category: 'engagement',
        event_label: service,
        value: getConversionValue(service),
      })
    }

    // Facebook Pixel (if available)
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: service,
        content_category: 'form_submission',
        value: getConversionValue(service),
        currency: trackingConfig.conversion.currency,
      })
    }

    // LinkedIn Insight Tag (if available)
    if (typeof window !== 'undefined' && window.lintrk) {
      window.lintrk('track', {
        conversion_id: trackingConfig.linkedIn.conversionId,
        value: getConversionValue(service),
        currency: trackingConfig.conversion.currency,
      })
    }
  }, [service])

  useEffect(() => {
    // Get form data from URL parameters
    const serviceParam = searchParams.get('service')
    const nameParam = searchParams.get('name')
    
    if (serviceParam) setService(serviceParam)
    if (nameParam) setName(nameParam)

    // Track conversion after component mounts
    if (!conversionTracked) {
      trackConversion()
      setConversionTracked(true)
    }
  }, [searchParams, conversionTracked, trackConversion])

  const getNextSteps = (service: string) => {
    const steps = {
      'Business Setup': [
        'Document verification and review',
        'Business name approval',
        'License application processing',
        'Bank account setup assistance',
        'Expected completion: 5-7 business days'
      ],
      'Business Advices': [
        'Initial consultation scheduling',
        'Business analysis and planning',
        'Strategy development',
        'Implementation roadmap',
        'Expected response: 24-48 hours'
      ],
      'Financial Forecast and Projections': [
        'Financial data collection',
        'Market analysis and research',
        'Forecast model development',
        'Report preparation and review',
        'Expected delivery: 3-5 business days'
      ],
      'Dubai Customs Registration': [
        'Document preparation',
        'Application submission',
        'Customs approval process',
        'Registration completion',
        'Expected timeline: 2-3 business days'
      ],
      'Tax Residency Certificate': [
        'Document verification',
        'Application submission',
        'Government processing',
        'Certificate issuance',
        'Expected timeline: 7-10 business days'
      ]
    }
    
    return steps[service as keyof typeof steps] || steps['Business Setup']
  }

  const getRelatedServices = (currentService: string) => {
    const allServices = [
      { name: 'Business Setup', icon: Building, description: 'Complete business formation services' },
      { name: 'Business Advices', icon: TrendingUp, description: 'Strategic business consulting' },
      { name: 'Financial Forecast and Projections', icon: FileText, description: 'Financial planning and analysis' },
      { name: 'Dubai Customs Registration', icon: Award, description: 'Customs and trade services' },
      { name: 'Tax Residency Certificate', icon: Users, description: 'Tax and residency solutions' }
    ]
    
    return allServices.filter(service => service.name !== currentService)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#1D6880]/10 to-[#1D6880]/20 py-16 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Company Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-[#1D6880]/20">
            <div className="w-8 h-8 bg-[#1D6880] rounded-full flex items-center justify-center">
              <Building className="h-5 w-5 text-white" />
            </div>
            <span className="text-[#1D6880] font-semibold">AB Capital Company Formation</span>
          </div>
        </div>

        {/* Success Header */}
        <div className="text-center mb-16">
          <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 mb-8 shadow-lg">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-5xl font-bold text-[#1D6880] mb-6">
            Thank You, {name || 'there'}!
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your request for <span className="font-semibold text-[#1D6880]">{service || 'our services'}</span> has been received successfully. 
            Our dedicated team of experts will review your requirements and contact you within 24 hours with personalized next steps.
          </p>
        </div>

        {/* Service Confirmation */}
        {service && (
          <Card className="mb-10 border-0 bg-gradient-to-r from-[#1D6880]/5 to-[#1D6880]/10 shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-[#1D6880] flex items-center gap-3 text-xl">
                <div className="p-2 bg-[#1D6880]/20 rounded-lg">
                  <Building className="h-6 w-6 text-[#1D6880]" />
                </div>
                <span className="bg-[#1D6880] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {service}
                </span>
                <span className="text-[#1D6880]">Service Requested</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[#1D6880] text-lg leading-relaxed">
                We&apos;ve received your inquiry about <span className="font-semibold">{service.toLowerCase()}</span>. 
                Our specialized team of experts will review your requirements and contact you within 24 hours with a customized action plan.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Next Steps */}
        <Card className="mb-10 border-0 bg-white shadow-xl">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center gap-3 text-2xl text-[#1D6880]">
              <div className="p-2 bg-[#1D6880]/20 rounded-lg">
                <Clock className="h-6 w-6 text-[#1D6880]" />
              </div>
              What Happens Next?
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Here&apos;s your personalized roadmap for the coming days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {getNextSteps(service).map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#1D6880]/5 to-[#1D6880]/10 rounded-xl border-l-4 border-[#1D6880]">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#1D6880] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 text-lg leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-10 border-0 bg-gradient-to-r from-[#1D6880]/5 to-[#1D6880]/10 shadow-xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-2xl text-[#1D6880]">Need Immediate Assistance?</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Our dedicated team of experts is here to support you every step of the way
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl border border-[#1D6880]/20 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-[#1D6880] rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Call Us</p>
                  <p className="text-[#1D6880] font-medium">+971-523655193</p>
                  <p className="text-gray-600 text-sm">Available 24/7 for urgent inquiries</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-white rounded-xl border border-[#1D6880]/20 hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-[#1D6880] rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">Email Us</p>
                  <p className="text-[#1D6880] font-medium">info@abcapital.ae</p>
                  <p className="text-gray-600 text-sm">Response within 2 hours</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

                 {/* Related Services */}
         <Card className="border-0 bg-white shadow-xl">
           <CardHeader className="pb-6">
             <CardTitle className="text-2xl text-[#1D6880]">Explore More Services</CardTitle>
             <CardDescription className="text-lg text-gray-600">
               While you wait, discover other premium services that might interest you
             </CardDescription>
           </CardHeader>
           <CardContent>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {getRelatedServices(service).map((relatedService, index) => (
                 <div key={index} className="group p-6 border border-[#1D6880]/20 rounded-xl hover:border-[#1D6880] hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-[#1D6880]/5">
                   <div className="flex items-center gap-3 mb-4">
                     <div className="p-2 bg-[#1D6880]/20 rounded-lg group-hover:bg-[#1D6880]/30 transition-colors">
                       <relatedService.icon className="h-6 w-6 text-[#1D6880]" />
                     </div>
                     <h3 className="font-semibold text-gray-900 text-lg">{relatedService.name}</h3>
                   </div>
                   <p className="text-gray-600 mb-4 leading-relaxed">{relatedService.description}</p>
                   <Button 
                     onClick={() => window.location.href = '/'}
                     variant="outline" 
                     size="sm" 
                     className="w-full border-[#1D6880] text-[#1D6880] hover:bg-[#1D6880]/10 hover:border-[#1D6880] transition-colors"
                   >
                     Learn More
                   </Button>
                 </div>
               ))}
             </div>
           </CardContent>
         </Card>

         {/* Client Testimonials */}
         <ReviewMarquee />

        {/* Return to Home */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-[#1D6880] hover:bg-[#1D6880]/90 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Return to Homepage
          </Button>
          <p className="text-gray-500 mt-4 text-sm">
            Thank you for choosing AB Capital for your business needs
          </p>
        </div>

        {/* Professional Footer */}
        <div className="mt-20 pt-12 border-t border-[#1D6880]/20">
          <div className="text-center">
            <div className="flex justify-center items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-[#1D6880] rounded-full animate-pulse"></div>
                <span className="text-sm">24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-[#1D6880] rounded-full animate-pulse"></div>
                <span className="text-sm">Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-[#1D6880] rounded-full animate-pulse"></div>
                <span className="text-sm">Fast Response</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 AB Capital Company Formation. All rights reserved. | 
              <span className="text-[#1D6880] hover:text-[#1D6880]/80 cursor-pointer ml-1">Privacy Policy</span> | 
              <span className="text-[#1D6880] hover:text-[#1D6880]/80 cursor-pointer ml-1">Terms of Service</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

