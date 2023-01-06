import { FC, useEffect, useRef } from 'react'
import { Card } from 'react-daisyui'
import { updateGoToExperience } from '../../app/app'
import { useAppDispatch } from '../../app/hooks'
import StanzaImage from '../../assets/stanza.png'

export const CurrentExperience: FC = () => {
  const experienceCraftRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (experienceCraftRef.current) {
      const curr = experienceCraftRef.current
      dispatch(
        updateGoToExperience(() => {
          curr.scrollIntoView({ behavior: 'smooth' })
        }),
      )
    }
  }, [experienceCraftRef.current])

  return (
    <Card
      ref={experienceCraftRef}
      className="current-card xl:p-24 px-4 py-10 xl:flex-row items-center xl:mx-28 mx-4 xl:mt-24 my-10 xl:mb-28"
    >
      <div className="xl:mb-0 mb-8 text-neutral">
        <h3>Senior FrontEnd Engineer</h3>
        <h4 className="text-5xl font-bold mt-6">Stanza</h4>
        <h5 className="text-xl mt-2">
          React, TypeScript, TailwindCSS, DaisyUI, Redux
        </h5>
        <p className="xl:text-xl text-lg mt-6">
          Lead the team to a new technology change, from deprecated to React 18,
          using hooks, context and redux toolkit.
          <br />
          Improve the performance on the deprecated site from 10 fps when
          loading to 60 fps.
          <br />
          Work closely with product and design team, to understand the business
          requirements and prioritize and scope work accordingly, for me and my
          peers.
        </p>
      </div>
      <img
        src={StanzaImage}
        className="xl:ml-8"
      />
    </Card>
  )
}
