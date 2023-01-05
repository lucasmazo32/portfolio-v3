import { FC } from 'react'
import { ExperienceCard } from './ExperienceCard'
import NovaLogo from '../../assets/nova.png'
import BFLogo from '../../assets/bf.png'
import SimpleshowLogo from '../../assets/simpleshow.png'

export const Experiences: FC = () => {
  return (
    <div className="grid lg:grid-cols-3 xl:mx-28 mx-4 gap-8">
      <ExperienceCard
        logo={BFLogo}
        company="Blankfactor"
        position="FrontEnd Developer"
        experience={[
          'Work for different projects using multiple programing languages and frameworks (Dart, Flutter, JavaScript, React).',
          'Rewrite a native app on Flutter and use different components for Android and iOS to give it a native feel.',
        ]}
      />
      <ExperienceCard
        logo={NovaLogo}
        company="Nova"
        position="Mobile Software Engineer"
        experience={[
          'Analyze, test, and fix critical functions in the app.',
          'Analyze analytics data and understand the conversion rate of the app.',
          'Work with the design team to understand the design, suggest new edge cases, and implement the screens.',
        ]}
      />
      <ExperienceCard
        logo={SimpleshowLogo}
        company="simpleshow"
        position="Freelance FrontEnd Developer"
        experience={[
          'Create interactive web pages following a storyboard, using JS and SCSS.',
        ]}
      />
    </div>
  )
}
