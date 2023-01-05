import { FC } from 'react'
import Image from '../../assets/illustration.png'

export const HeroImage: FC = () => {
  return (
    <div className="lg:absolute 2xl:left-[800px] xl:left-[640px] lg:left-[624px] left-[640px] xl:top-36 lg:top-44 top-36 z-0">
      <img
        className="xl:h-[494px] lg:h-[380px] md:h-[320px] h-[280px] ring-1 ring-base-200 ring-offset-4 ring-offset-base-100 rounded-full mx-auto"
        src={Image}
        alt="Hero illustration"
      />
    </div>
  )
}
