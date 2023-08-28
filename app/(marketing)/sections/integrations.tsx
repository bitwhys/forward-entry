import { apps, content, text } from "@/mocks/collaboration"

import Button from "@/components/button"
import Image from "@/components/image"
import Section from "@/components/section"

type IntegrationsSectionProps = {}

export const IntegrationsSection = ({}: IntegrationsSectionProps) => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">AI chat app for seamless collaboration</h2>
          <ul className="mb-10 max-w-[22.5rem] md:mb-14">
            {content.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Image src="/images/check.svg" width={24} height={24} alt="Check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && <p className="body-2 text-n-4 mt-3">{item.text}</p>}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="mt-15 lg:ml-auto lg:mt-0 xl:w-[37.5rem]">
          <div className="relative lg:mx-auto lg:w-[22.5rem]">
            <p className="body-2 text-n-4 mb-4 md:mb-16 lg:mb-32">{text}</p>
            <div className="border-n-6 relative left-1/2 flex aspect-square w-[22.5rem] -translate-x-1/2 scale-75 rounded-full border md:scale-100">
              <div className="border-n-6 m-auto flex aspect-square w-60 rounded-full border">
                <div className="bg-conic-gradient m-auto aspect-square w-[5.75rem] rounded-full p-[0.1875rem]">
                  <div className="bg-n-8 flex h-full w-full items-center justify-center rounded-full">
                    <Image src="/images/brainwave-symbol.svg" width={48} height={48} alt="Brainwave" />
                  </div>
                </div>
              </div>
              <ul>
                {apps.map((app, index) => (
                  <li
                    className={`absolute left-1/2 top-0 -ml-[1.625rem] h-1/2 ${index === 1 && "rotate-[45deg]"} ${
                      index === 2 && "rotate-[90deg]"
                    } ${index === 3 && "rotate-[135deg]"} ${index === 4 && "rotate-[180deg]"} ${
                      index === 5 && "rotate-[225deg]"
                    } ${index === 6 && "rotate-[270deg]"} ${index === 7 && "rotate-[315deg]"} origin-bottom`}
                    key={app.id}
                  >
                    <div
                      className={`bg-n-7 border-n-1/15 relative -top-[1.625rem] flex h-[3.25rem] w-[3.25rem] rounded-xl border ${
                        index === 1 && "-rotate-[45deg]"
                      } ${index === 2 && "-rotate-[90deg]"} ${index === 3 && "-rotate-[135deg]"} ${
                        index === 4 && "-rotate-[180deg]"
                      } ${index === 5 && "-rotate-[225deg]"} ${index === 6 && "-rotate-[270deg]"} ${
                        index === 7 && "-rotate-[315deg]"
                      }`}
                    >
                      <Image className="m-auto" src={app.icon} width={app.width} height={app.height} alt={app.title} />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="pointer-events-none absolute right-full top-1/2 -mt-1 mr-10 hidden w-[32.625rem] xl:block">
                <Image src="/images/collaboration/curve-1.svg" width={522} height={182} alt="Curve 1" />
              </div>
              <div className="pointer-events-none absolute left-full top-1/2 -mt-1 ml-10 hidden w-[10.125rem] xl:block">
                <Image src="/images/collaboration/curve-2.svg" width={162} height={76} alt="Curve 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
