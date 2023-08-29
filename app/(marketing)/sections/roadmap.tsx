import { roadmap } from "@/mocks/roadmap"

import { cn } from "@/lib/utils"
import Button from "@/components/button"
import Heading from "@/components/heading"
import Image from "@/components/image"
import Section from "@/components/section"
import Tagline from "@/components/tagline"

export const RoadMapSection = () => (
  <Section className="overflow-hidden">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item, index) => (
          <div
            className={cn(
              `p-0.25  rounded-[2.5rem] md:flex`,
              { "md:translate-y-[7rem]": index % 2 !== 0 },
              item.colorful ? "gradient-lime bg-gradient-to-b" : "bg-gray-2"
            )}
            key={item.id}
          >
            <div
              className={cn(
                "xl:p-15 relative overflow-hidden  rounded-[2.4375rem] p-8",
                item.colorful ? "bg-gray-2" : "bg-gray-3"
              )}
            >
              <div className="absolute left-0 top-0 max-w-full">
                <Image className="w-full" src="/images/grid.png" width={550} height={550} alt="Grid" />
              </div>
              <div className="z-1 relative">
                <div className="mb-8 flex max-w-[27rem] items-center justify-between md:mb-20">
                  <Tagline>{item.date}</Tagline>
                  <div className="bg-n-1 text-n-8 flex items-center rounded px-4 py-1">
                    <Image
                      className="mr-2.5"
                      src={item.status === "done" ? "/images/icons/check.svg" : "/images/icons/loading-01.svg"}
                      width={16}
                      height={16}
                      alt={item.status === "done" ? "Done" : "In progress"}
                    />
                    <div className="tagline">{item.status === "done" ? "Done" : "In progress"}</div>
                  </div>
                </div>
                <div className="mb-8 md:mb-20">
                  <div className="-mx-15 -my-10">
                    <Image className="w-full" src={item.imageUrl} width={628} height={426} alt={item.title} />
                  </div>
                </div>
                <h4 className="h4 mb-4">{item.title}</h4>
                <p className="body-2 text-n-4">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
        {/*<div className="pointer-events-none absolute -left-[30.375rem] top-[18.25rem] w-[56.625rem] opacity-60 mix-blend-color-dodge">*/}
        {/*  <div className="absolute left-1/2 top-1/2 h-[58.85rem] w-[58.85rem] -translate-x-3/4 -translate-y-1/2">*/}
        {/*    <Image className="w-full" src="/images/gradient.png" width={942} height={942} alt="Gradient" />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div className="md:mt-15 mt-12 flex justify-center xl:mt-20">
        <Button>Our roadmap</Button>
      </div>
    </div>
  </Section>
)
