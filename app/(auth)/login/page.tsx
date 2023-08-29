"use client"

import { useSearchParams } from "next/navigation"

import Button from "@/components/button"
import Image from "@/components/image"
import Section from "@/components/section"
import AuthForm from "@/app/(auth)/login/auth-form"

const LoginPage = ({}) => {
  const searchParams = useSearchParams()
  const signUp = searchParams.has("new")

  return (
    <Section className="flex min-h-[calc(100vh-4.8125rem)] overflow-hidden lg:min-h-[calc(100vh-5.3125rem)]">
      <div className="container relative z-2 m-auto max-w-[68rem] lg:flex lg:justify-between">
        <div className="mx-auto mb-12 max-w-[32.875rem] text-center md:mb-16 lg:m-0 lg:flex lg:max-w-[23.75rem] lg:flex-col lg:justify-around lg:text-left">
          <h2 className="h2">Join the AI revolution with Brainwave</h2>
          <p className="body-2 mt-4 hidden text-gray-10 md:block">
            Get started with Brainwave - AI chat app today and experience the power of AI in your conversations!
          </p>
        </div>
        <AuthForm signUp={signUp} />
      </div>
      <div className="pointer-events-none absolute inset-x-5 bottom-5 z-4 hidden h-0.25 bg-separator md:block lg:inset-x-7.5 lg:bottom-7.5 xl:inset-x-10 xl:bottom-10"></div>
      <svg
        className="pointer-events-none absolute bottom-[0.9375rem] left-[0.9375rem] z-4 hidden md:block lg:bottom-[1.5625rem] lg:left-[1.5625rem] xl:bottom-[2.1875rem] xl:left-[2.1875rem]"
        width="11"
        height="11"
        fill="none"
      >
        <path
          d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
          fill="hotpink"
        />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-[0.9375rem] right-[0.9375rem] z-4 hidden md:block lg:bottom-[1.5625rem] lg:right-[1.5625rem] xl:bottom-[2.1875rem] xl:right-[2.1875rem]"
        width="11"
        height="11"
        fill="none"
      >
        <path
          d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
          fill="#ada8c4"
        />
      </svg>
    </Section>
  )
}

export default LoginPage
