import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ThumbsUp, Shield, Award, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const benefits = ["Foreign Ownership", "World-Class Infrastructure", "Efficient Regulations", "Global Trade and Connectivity", "Strong Legal Framework", "Strategic Free Zones", "Residency Options", "Diverse Business Opportunities"]
const whyABC = ["Transparent Processes", "Expert Guidance", "Low operations", "Time and Cost Efficiency", "Customer-Centric Approach","Clear Communication", "Focus on Results"]

export default function GovernmentAgenciesSection() {
  return (
    <section className='py-20 bg-white'>
      <div className='w-[90%] sm:w-[80%] mx-auto'>
        {/* Government Agencies Logos */}
        <div className='mb-16'>
          <div className='flex items-center gap-6 justify-center w-full flex-wrap'>
           
            <div className='p-4'>
              <Image
                src="/assets/images/dubai-economy.jpg" 
                alt="Dubai Economy"
                width={120}
                height={120}
                className='object-contain'
              />
            </div>
           
            <div className='p-4'>
              <Image
                src="/assets/images/duqe.png" 
                alt="DUQE"
                width={120}
                height={120}
                className='object-contain'
              />
            </div>
            <div className='p-4'>
              <Image
                src="/assets/images/ifza.png" 
                alt="IFZA"
                width={120}
                height={120}
                className='object-contain'
              />
            </div>
            <div className='p-4'>
              <Image
                src="/assets/images/jafza.png" 
                alt="JAFZA"
                width={120}
                height={120}
                className='object-contain'
              />
            </div>
            <div className='p-4'>
              <Image
                src="/assets/images/maydan.png" 
                alt="Maydan"
                width={120}
                height={120}
                className='object-contain'
              />
            </div>
            <div className='p-4'>
              <Image
                src="/assets/images/sharjah.png" 
                alt="Sharjah"
                width={120}
                height={120}
                className='object-contain'
              />
            </div>
            <div className='p-4'>
              <Image
                src="/assets/images/dmcc.jpeg" 
                alt="DMCC"
                width={120}
                height={120}
                className='object-contain'
              />
            </div>
            <div className='p-4'>
              <Image
                src="/assets/images/kezad.jpeg" 
                alt="KEZAD"
                width={120}
                height={120}
                className='object-contain'
              />
            </div>
            <div className='p-4'>
              <Image
                src="/assets/images/spc.jpeg" 
                alt="SPC"
                width={120}
                height={120}
                className='object-contain'
              />
            </div>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className='flex lg:gap-12 gap-8 flex-col lg:flex-row'>
          <Card className='flex-1 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <CardHeader className='text-center pb-6'>
              <div className='mx-auto w-12 h-12 bg-[#1E6981] rounded-full flex items-center justify-center mb-4'>
                <ThumbsUp className='text-white w-6 h-6' />
              </div>
              <h3 className='font-bold text-xl text-gray-900 mb-2'>Benefits</h3>
              <p className='text-gray-600'>setting up of businesses in UAE</p>
            </CardHeader>
            <CardContent className='space-y-6'>
              <ul className="space-y-3 text-gray-700">
                {benefits.map((item, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <div className='w-2 h-2 bg-[#1E6981] rounded-full mt-2 flex-shrink-0'></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={'#form'} className='block mt-8'>
                <Button className='bg-[#1E6981] hover:bg-[#025a5c] w-full font-semibold py-3'>
                  Get Quote
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className='flex-1 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <CardHeader className='text-center pb-6'>
              <div className='mx-auto w-12 h-12 bg-[#1E6981] rounded-full flex items-center justify-center mb-4'>
                <ThumbsUp className='text-white w-6 h-6' />
              </div>
              <h3 className='font-bold text-xl text-gray-900 mb-2'>Why AB Capital?</h3>
              <p className='text-gray-600'>setting up of businesses in UAE</p>
            </CardHeader>
            <CardContent className='space-y-6'>
              <ul className="space-y-3 text-gray-700">
                {whyABC.map((item, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <div className='w-2 h-2 bg-[#1E6981] rounded-full mt-2 flex-shrink-0'></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={'#form'} className='block mt-8'>
                <Button className='bg-[#1E6981] hover:bg-[#025a5c] w-full font-semibold py-3'>
                  Free Consultation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
