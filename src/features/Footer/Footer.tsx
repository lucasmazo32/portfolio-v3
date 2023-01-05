import { FC, useEffect, useRef } from 'react'
import { updateGoToContact } from '../../app/app'
import { useAppDispatch } from '../../app/hooks'
import { ReactComponent as EmailIcon } from '../../assets/email.svg'

export const Footer: FC = () => {
  const footerRef = useRef<HTMLDivElement>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (footerRef.current) {
      const curr = footerRef.current
      dispatch(
        updateGoToContact(() => {
          curr.scrollIntoView({ behavior: 'smooth' })
        }),
      )
    }
  }, [footerRef.current])

  return (
    <footer
      ref={footerRef}
      className="mt-6 xl:px-28 px-4 xl:py-10 py-6"
    >
      <span className="md:text-4xl text-2xl">Want to hire me?</span>
      <h2 className="md:text-9xl text-6xl font-bold">Let&apos;s Talk</h2>
      <a
        href="mailto:lucasmazo32@gmail.com"
        className="md:hidden flex items-center text-2xl mt-2"
      >
        Contact me by email <EmailIcon className="ml-2 h-6" />
      </a>
      <div className="flex md:flex-row flex-col-reverse justify-between md:mt-44 mt-14">
        <a
          href="https://www.adancareta.com/"
          target="_blank"
          rel="noreferrer"
          className="underline w-36"
        >
          Designed by Adan
        </a>
        <a
          href="mailto:lucasmazo32@gmail.com"
          className="md:flex hidden items-center text-2xl"
        >
          Contact me by email
          <EmailIcon className="ml-2 h-6" />
        </a>
        <a
          href="https://github.com/lucasmazo32"
          target="_blank"
          rel="noreferrer"
          className="w-36 md:text-right font-bold text-left"
        >
          Github
        </a>
      </div>
    </footer>
  )
}
