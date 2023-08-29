import Image from "@/components/image"

type GeneratingProps = {
  className?: string
}

const Generating = ({ className }: GeneratingProps) => (
  <div className={`bg-n-8/80 flex h-[3.375rem] items-center rounded-[1.6875rem] px-6 ${className || ""} text-base`}>
    <Image className="mr-4 h-5 w-5" src="/images/loading.png" width={20} height={20} alt="Loading" />
    AI is generating|
  </div>
)

export default Generating
