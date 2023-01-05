import { FC } from 'react'

export const HeroText: FC = () => {
  return (
    <p className="2xl:text-3xl md:text-2xl text-lg font-light relative z-10 lg:text-start text-center">
      I help individuals and organizations transform product ideas&nbsp;
      <br className="hidden lg:block" />
      and designs into amazing user experiences
    </p>
  )
}
