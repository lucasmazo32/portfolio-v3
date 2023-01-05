import { FC } from 'react'
import { Card } from 'react-daisyui'

export interface ExperienceCardProps {
  logo: string
  company: string
  position: string
  experience: string[]
}

export const ExperienceCard: FC<ExperienceCardProps> = ({
  logo,
  company,
  position,
  experience,
}) => {
  return (
    <Card className="p-6 bg-base-200">
      <img
        src={logo}
        className="w-6 h-6 mb-6"
      />
      <h3 className="text-4xl font-bold">{company}</h3>
      <span className="text-xl mt-3">{position}</span>
      <div className="flex flex-col mt-8">
        {experience.map((e) => {
          return <span key={e}>{e}</span>
        })}
      </div>
    </Card>
  )
}
