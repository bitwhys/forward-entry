"use client"

// FIXME: should this be a client component
import { useState } from "react"
import { ImageProps, default as NextImage } from "next/image"

const Image = ({ className, ...props }: ImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <NextImage
      className={`inline-block align-top opacity-0 transition-opacity ${loaded && "opacity-100"} ${className}`}
      onLoadingComplete={() => setLoaded(true)}
      {...props}
    />
  )
}

export default Image
