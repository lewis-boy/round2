import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const perks = [
  {
    name: 'Instant Delivery',
    icon: ArrowDownToLine,
    description: "Get your assets delivered to your email in seconds and download them right away."
  },
  {
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description: "Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee"
  },
  {
    name: 'For the Planet',
    icon: Leaf,
    description: "We've pledged 1% of sales to the preservation and restoration of the natural environment."
  },
]

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 max-w-3xl flex flex-col text-center items-center mx-auto'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Your marketplace for high-quality <span className='text-blue-500'>digital assets</span>.</h1>
          <p className='text-muted-foreground max-w-prose text-lg mt-6'>Welcome to DigitalHippo. Every asset on our platform is verified by our team to ensure our highest quality standards.</p>
          <div className='mt-6 gap-4 flex flex-col md:flex-row'>
            <Link href='/' className={buttonVariants()}>Browse Trending</Link>
            <Button variant='ghost'>Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-3 gap-x-8 gap-y-0'>
            {perks.map((perk, i) => (
              <div key={i} className='block relative'>

                <div className='flex justify-center'>
                  <div className='h-16 w-16 rounded-full bg-blue-100 text-blue-900 flex justify-center items-center'>
                    <perk.icon className='w-1/3 h-1/3' />
                  </div>
                </div>

                <div className='text-center mt-6'>
                  <h4 className='font-medium text-base text-gray-900'>{perk.name}</h4>
                  <p className='text-muted-foreground mt-3 text-sm'>{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
