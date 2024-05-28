import { CodeIcon, LayersIcon } from "@radix-ui/react-icons";
import { MotionInView } from "@/components/Motion";

export default function Skills() {
  return (
    <>
     
      <div className="grid grid-cols-12 mt-12 gap-6 sm:gap-0" id="skills">
        <MotionInView
          initial="hidden"
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="col-span-12 bg-violet-900/20 sm:col-span-4 sm:col-start-3 border border-primary rounded-l-[40px] rounded-r-[40px] sm:rounded-r-[0px] py-10 px-10"
        >
          <div className="text-center">
            <div className="rounded-full bg-gradient-to-r to-primary from-purple-500 w-16 h-16 flex items-center justify-center mx-auto">
              <CodeIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="font-semibold text-2xl mt-6">Frontend Engineer</h3>
            <p className="text-lg pt-4">
              I thrive on crafting ideas from scratch into interactive realities
              in the browser.
            </p>
            <p className="text-lg pt-4 text-primary">Dev tools</p>

            <ul className="mt-2 flex flex-col gap-2">
              <li>React</li>
              <li>Next.js (App Router)</li>
              <li>Tailwind CSS</li>
              <li>Styled Components</li>
              <li>Redux</li>
              <li>Zustand</li>
              <li>Framer Motion</li>
              <li>Vercel</li>
            </ul>
          </div>
        </MotionInView>
        <MotionInView
          initial="hidden"
          transition={{ delay: 0.2, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="col-span-12 sm:col-span-4 border border-primary sm:border-l-0 rounded-r-[40px] rounded-l-[40px] sm:rounded-l-[0px]  py-10 px-10"
        >
          <div className="text-center">
            <div className="rounded-full bg-gradient-to-r to-primary from-purple-500 w-16 h-16 flex items-center justify-center mx-auto">
              <LayersIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="font-semibold text-2xl mt-6">UI/UX Designer</h3>
            <p className="text-lg pt-4">
              I prioritize clarity and thoughtful user interactions in my
              designs.
            </p>
            <p className="text-lg pt-4 text-primary">Design tools</p>

            <ul className="mt-2 flex flex-col gap-2">
              <li>Sketch</li>
              <li>Figma</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
              <li>Pen & Peper</li>
            </ul>
          </div>
        </MotionInView>
      </div>
    </>
  );
}
