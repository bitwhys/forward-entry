"use client"

import React from "react"
import { signIn } from "next-auth/react"

import Button from "@/components/button"

export type AuthFormProps = {
  signUp: boolean
}

const AuthForm = ({ signUp }: AuthFormProps) => {
  return (
    <form
      className="relative mx-auto max-w-[23.5rem] rounded-3xl bg-gradient-to-b p-0.25 gradient-lime lg:m-0 lg:max-w-[27.5rem] lg:flex-1 xl:mr-12"
      action=""
    >
      <div className="rounded-[1.4375rem] bg-background px-9 py-10 lg:px-16 lg:py-[3.25rem]">
        {signUp && (
          <div className="relative mb-4 lg:mb-5">
            <span className="absolute left-0 top-4 block w-6 text-gray-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M224,128a95.76,95.76,0,0,1-31.8,71.37A72,72,0,0,0,128,160a40,40,0,1,0-40-40,40,40,0,0,0,40,40,72,72,0,0,0-64.2,39.37h0A96,96,0,1,1,224,128Z"
                  opacity="0.2"
                ></path>
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
              </svg>
            </span>
            <input
              className="border-n-1/15 focus:border-n-1/30 h-14 w-full border-b bg-transparent pl-12 font-light outline-none transition-colors placeholder:text-gray-10"
              type="text"
              placeholder="Name"
            />
          </div>
        )}
        <div className="relative mb-4 lg:mb-5">
          <span className="absolute left-0 top-4 block w-6 text-gray-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,56l-96,88L32,56Z" opacity="0.2"></path>
              <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
            </svg>
          </span>
          <input
            className="border-n-1/15 focus:border-n-1/30 h-14 w-full border-b bg-transparent pl-12 font-light outline-none transition-colors placeholder:text-gray-10"
            type="text"
            placeholder="Email"
          />
        </div>
        <Button className="w-full" white>
          {signUp ? "Sign up now" : "Sign in"}
        </Button>
        <div className="mt-10">
          <div className="caption mb-6 text-center text-gray-10">Or start your Brainwave with</div>
          <div className="flex justify-center">
            <button
              id="sign-in-with-github"
              className="mx-3 flex h-12 w-12 items-center justify-center rounded-full border border-gray-10 text-gray-10 transition-colors hover:border-gray-11"
              onClick={() => signIn("github")}
            >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                  opacity="0.2"
                ></path>
                <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
              </svg>
            </button>
            <button
              id="sign-in-with-google"
              className="mx-3 flex h-12 w-12 items-center justify-center rounded-full border border-gray-10 text-gray-10 transition-colors hover:border-gray-11"
              onClick={() => signIn("google")}
            >
              <svg width="24" height="24">
                <path
                  fill="currentColor"
                  d="M23.049 10h-10.5v4.5h5.951c-.951 3-3.3 4-5.999 4a6.5 6.5 0 0 1-5.33-2.768 6.5 6.5 0 0 1-.787-5.954 6.5 6.5 0 0 1 4.428-4.057 6.5 6.5 0 0 1 5.863 1.302l3.27-3.117a11 11 0 0 0-9.931-2.623 11 11 0 0 0-7.768 6.721A11 11 0 0 0 3.414 18.21 11 11 0 0 0 12.501 23c6.066 0 11.55-4 10.548-13z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-6 -right-12 hidden xl:flex">
        <div className="w-6 rounded-r-3xl bg-gray-3"></div>
        <div className="my-12 w-6 rounded-r-3xl bg-gray-2"></div>
      </div>
    </form>
  )
}

export default AuthForm
