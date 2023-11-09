import { MotionInView } from "@/components/Motion";
import Image from "next/image";

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
            className="font-semibold text-4xl text-center mx-auto w-6/12"
          >
            Latest Projects
          </MotionInView>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-12 gap-6">
        <div className="col-span-4 relative">
          <Image
            className="rounded-lg"
            alt="Piercarlo Carcereri"
            width={2000}
            height={2000}
            src="/images/PiercarloCarcereri.webp"
          />
        </div>
        <div className="col-span-4 relative">
          <Image
            className="rounded-lg"
            alt="Wine Label"
            width={1652}
            height={2362}
            src="/images/WineLabel.webp"
          />
        </div>
        <div className="col-span-4 relative">
          <Image
            className="rounded-lg"
            alt="Oil Label"
            width={1652}
            height={2988}
            src="/images/OilLabel.webp"
          />
        </div>
      </div>
    </>
  );
}
