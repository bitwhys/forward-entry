import type { ReactNode } from "react"
import Header from "@/components/header"

type LayoutProps = {
  children: ReactNode
}

const AuthLayout = ({ children }: LayoutProps) => (
  <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
    <Header />
    {children}
  </div>
)

export default AuthLayout
