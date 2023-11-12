import { MotionInView } from "@/components/Motion";
import PC from "@/components/projects/PC";
import Brainyware from "@/components/projects/Brainyware";
import OVERMarketplace from "@/components/projects/OVERMarketplace";

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
            className="font-medium text-4xl text-center mx-auto w-6/12"
          >
            Latest Projects
          </MotionInView>
        </div>
      </div>
      <div className="flex flex-col gap-32">
        <PC />
        <Brainyware />
        <OVERMarketplace />
      </div>
    </>
  );
}
