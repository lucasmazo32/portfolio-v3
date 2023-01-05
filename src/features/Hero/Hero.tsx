import { FC } from 'react'
import { HeroHeader } from './HeroHeader'
import { HeroImage } from './HeroImage'
import { HeroText } from './HeroText'

export const Hero: FC = () => {
  return (
    <section className="lg:pt-[212px] pt-10 lg:px-28 px-4 relative">
      <HeroImage />
      <HeroHeader />
      <HeroText />
    </section>
  )
}
