import Footer from "../footer"
import Header from "../header"

type LayoutProps = {
  hideFooter?: boolean
  children: React.ReactNode
}

const Layout = ({ hideFooter, children }: LayoutProps) => (
  <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
    <Header />
    {children}
    {hideFooter ? null : <Footer />}
  </div>
)

export default Layout
