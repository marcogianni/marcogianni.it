import { MotionInView } from "@/components/Motion";
import PC from "@/components/projects/PC";
import Brainyware from "@/components/projects/Brainyware";
import OVERMarketplace from "@/components/projects/OVERMarketplace";
import SofiaArt from "@/components/projects/SofiaArt";
import HomelessPlanets from "@/components/projects/HomelessPlanets";
import OVER from "@/components/projects/OVER";

export default function Project() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-40">
        <div className="col-span-12">
          <MotionInView
            initial="hidden"
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-medium text-4xl text-center mx-auto w-full sm:w-6/12"
          >
            Latest Projects
          </MotionInView>
        </div>
      </div>
      <div className="flex flex-col gap-20 sm:gap-32">
        <OVER />
        <HomelessPlanets />
        <OVERMarketplace />
        <PC />
        <Brainyware />
        <SofiaArt />
      </div>
    </>
  );
}
