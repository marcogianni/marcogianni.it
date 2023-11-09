import { CodeIcon, LayersIcon } from "@radix-ui/react-icons";
import { MotionInView } from "@/components/Motion";

export default function Skills() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <MotionInView
            initial="hidden"
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-semibold text-4xl text-center mx-auto w-6/12"
          >
            I design and code beautifully simple things, and I love what I do.
          </MotionInView>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-12">
        <MotionInView
          initial="hidden"
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="col-span-4 col-start-3 bg-violet-100 text-black rounded-l-[40px] py-10 px-12"
        >
          <div className="text-center">
            <div className="rounded-full bg-gradient-to-r to-primary from-purple-500 w-16 h-16 flex items-center justify-center mx-auto">
              <CodeIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="font-bold text-xl mt-6">Frontend Engineer</h3>
            <p className="text-lg pt-4">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
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
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="col-span-4 bg-slate-100 text-black rounded-r-[40px] py-10 px-12"
        >
          <div className="text-center">
            <div className="rounded-full bg-gradient-to-r to-primary from-purple-500 w-16 h-16 flex items-center justify-center mx-auto">
              <LayersIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="font-bold text-xl mt-6">UI/UX Designer</h3>
            <p className="text-lg pt-4">
              I value simple content structure, clean design patterns, and
              interactions.
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
