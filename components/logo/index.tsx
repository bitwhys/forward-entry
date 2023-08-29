import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
}

const Logo = ({ className }: LogoProps) => (
  <Link className={cn("block w-[11.875rem]", className)} href="/">
    <Image src="/logomark.svg" width={155} height={32} priority={true} alt="Brainwave" />
  </Link>
)

export default Logo
