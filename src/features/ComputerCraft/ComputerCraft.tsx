import { FC } from 'react'
import ComputerIcon from '../../assets/computer.png'

export const ComputerCraft: FC = () => {
  return (
    <div className="flex xl:flex-row flex-col xl:mt-40 mt-6 xl:ml-20 xl:mr-28 mx-4 items-center">
      <img
        src={ComputerIcon}
        className="xl:w-[500px] w-96"
      />
      <div className="xl:ml-8 xl:mt-0 mt-6 h-fit">
        <h3 className="xl:text-4xl text-2xl">
          I&apos;ve years of experience building, growing and delivering awesome
          products. Passionate about web technologies. I love working at the
          intersection of creativity and user friendly interfaces.
        </h3>
        <h4 className="mt-4 xl:max-w-xs">
          When I&apos;m not building or exploring new web experiences, I&apos;m
          probably playing video games, reading or sharing time with my family.
        </h4>
      </div>
    </div>
  )
}
