'use client'
// FIXME: should this be a client component
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { navigation } from "@/constants/navigation"
import { disablePageScroll, enablePageScroll } from "scroll-lock"

import Button from "../button"
import Image from "../image"
import Logo from "../logo"

type HeaderProps = {}

const Header = ({}: HeaderProps) => {
  const [openNavigation, setOpenNavigation] = useState<boolean>(false)

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleClick = () => {
    enablePageScroll()
    setOpenNavigation(false)
  }

  useEffect(() => {
    enablePageScroll()
    setOpenNavigation(false)
  }, [])

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full ${
        openNavigation ? "bg-n-8" : " bg-n-8/90 backdrop-blur-sm"
      } border-n-6 lg:bg-n-8/90 border-b lg:backdrop-blur-sm`}
    >
      <div className="lg:px-7.5 flex h-[4.75rem] items-center px-5 lg:h-[5.25rem] xl:px-10">
        <Logo className="xl:mr-8" />
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } bg-n-8 fixed bottom-0 left-0 right-0 top-[4.8125rem] lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div className="z-2 relative m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <Link
                className={`text-n-1 hover:text-color-1 relative block text-2xl uppercase transition-colors ${
                  item.onlyMobile ? "lg:hidden" : ""
                } lg:-mr-0.25 px-6 py-6 md:py-8 lg:text-xs lg:font-semibold ${
                  item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:hover:text-n-1 lg:leading-5 xl:px-12`}
                href={item.url}
                onClick={() => item.url.startsWith(pathname) && handleClick()}
                key={item.id}
              >
                {item.title}
                <div
                  className={`w-0.25 bg-n-6 absolute bottom-0 left-0 hidden h-1.5 lg:block ${
                    pathname === item.url ? "lg:bg-n-1 lg:h-3" : ""
                  }`}
                ></div>
                <div
                  className={`w-0.25 bg-n-6 absolute bottom-0 right-0 hidden h-1.5 lg:block ${
                    pathname === item.url ? "lg:bg-n-1 lg:h-3" : ""
                  }`}
                ></div>
              </Link>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0 lg:hidden">
            <div className="absolute inset-0 opacity-[.03]">
              <Image
                className="h-full w-full object-cover"
                src="/images/header/background.jpg"
                width={688}
                height={953}
                alt="Background"
              />
            </div>
            <div className="border-n-2/10 absolute left-1/2 top-1/2 aspect-square w-[51.375rem] -translate-x-1/2 -translate-y-1/2 rounded-full border">
              <div className="border-n-2/10 absolute left-1/2 top-1/2 aspect-square w-[36.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
              <div className="border-n-2/10 absolute left-1/2 top-1/2 aspect-square w-[23.125rem] -translate-x-1/2 -translate-y-1/2 rounded-full border"></div>
            </div>
            <div className="w-0.25 bg-n-6 absolute left-5 top-0 h-full"></div>
            <div className="w-0.25 bg-n-6 absolute right-5 top-0 h-full"></div>
            <div className="absolute left-16 top-[4.4rem] h-3 w-3 rounded-full bg-gradient-to-b from-[#DD734F] to-[#1A1A32]"></div>
            <div className="absolute right-16 top-[12.6rem] h-3 w-3 rounded-full bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32]"></div>
            <div className="absolute left-12 top-[26.8rem] h-6 w-6 rounded-full bg-gradient-to-b from-[#88E5BE] to-[#1A1A32]"></div>
          </div>
        </nav>
        <Link
          className={`button text-n-1/50 hover:text-n-1 mr-8 hidden transition-colors lg:block ${
            searchParams.has("new") ? "lg:text-n-1" : ""
          }`}
          href="/login?new=true"
        >
          New account
        </Link>
        <Button className="hidden lg:flex" href="/login">
          Sign in
        </Button>
        <Button className="ml-auto lg:hidden" onClick={toggleNavigation} px="px-3">
          <svg className="overflow-visible" width="20" height="12" viewBox="0 0 20 12">
            <rect
              className="origin-center transition-all"
              y={openNavigation ? "5" : "0"}
              width="20"
              height="2"
              rx="1"
              fill="white"
              transform={`rotate(${openNavigation ? "45" : "0"})`}
            />
            <rect
              className="origin-center transition-all"
              y={openNavigation ? "5" : "10"}
              width="20"
              height="2"
              rx="1"
              fill="white"
              transform={`rotate(${openNavigation ? "-45" : "0"})`}
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}

export default Header
