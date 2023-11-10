import { MotionInView } from "@/components/Motion";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function PC() {
  return (
    <div className="grid grid-cols-12 mt-12 gap-8">
      <div className="col-span-4 relative">
        <Image
          className="rounded-lg shadow-xl border border-gray-500"
          alt="Piercarlo Carcereri"
          width={2000}
          height={2000}
          src="/images/PiercarloCarcereri.webp"
        />
        <p className="text-xl mt-6">
          Piercarlo Carcereri: Brand identity for an oil and wine producer. In
          this screenshot the logo and bottle labels for wine and oil.
          <a
            className="mt-3 block"
            href="https://piercarlocarcereri.it/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon className="h-6 w-6" />
          </a>
        </p>
      </div>
      <div className="col-span-4 relative">
        <Image
          className="rounded-lg shadow-xl border border-gray-500"
          alt="Wine Label"
          width={1652}
          height={2362}
          src="/images/WineLabel.webp"
        />
      </div>
      <div className="col-span-4 relative">
        <Image
          className="rounded-lg shadow-xl border border-gray-500"
          alt="Oil Label"
          width={1652}
          height={2988}
          src="/images/OilLabel.webp"
        />
      </div>
    </div>
  );
}
