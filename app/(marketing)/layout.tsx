import Footer from "@/components/footer"
import Header from "@/components/header"

type LayoutProps = {
  hideFooter?: boolean
  children: React.ReactNode
}

const MarketingLayout = ({ hideFooter, children }: LayoutProps) => (
  <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
    <Header />
    {children}
    <Footer />
  </div>
)

export default MarketingLayout
