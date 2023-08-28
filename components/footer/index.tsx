import Link from "next/link"
import { navigation } from "@/constants/navigation"
import { socials } from "@/constants/socials"

import Image from "../image"
import Logo from "../logo"
import Section from "../section"

type FooterProps = {}

const Footer = ({}: FooterProps) => (
  <Section className="lg:px-7.5 px-5 pb-6 pt-11 lg:pb-12 lg:pt-[6.5rem] xl:px-10" crosses customPaddings>
    <div className="border-n-6 mb-6 flex h-[6.5rem] items-center justify-center border-b lg:justify-start">
      <Logo />
      <nav className="ml-auto hidden items-center justify-center lg:flex">
        {navigation.slice(0, -1).map((item) => (
          <Link
            className={`font-code text-n-1/50 hover:text-n-1 px-12 py-8 text-xs font-semibold uppercase leading-5 transition-colors`}
            href={item.url}
            key={item.id}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="caption text-n-4 hidden lg:block">© {new Date().getFullYear()} UI8</div>
      <div className="-mx-4 flex justify-center">
        {socials.map((item) => (
          <a
            className="bg-n-7 hover:bg-n-6 mx-4 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
            href={item.url}
            target="_blank"
            rel='noreferrer'
            key={item.id}
          >
            <Image src={item.iconUrl} width={16} height={16} alt={item.title} />
          </a>
        ))}
      </div>
    </div>
  </Section>
)

export default Footer
