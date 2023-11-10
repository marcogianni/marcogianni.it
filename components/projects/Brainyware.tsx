import { MotionInView } from "@/components/Motion";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Brainyware() {
  return (
    <div className="grid grid-cols-12 mt-12 gap-8">
      <div className="col-span-9 relative">
        <Image
          className="rounded-lg shadow-xl border border-gray-500"
          alt="Brainyware Doc Chat"
          width={3580}
          height={1850}
          src="/images/brainyware-filesystem.webp"
        />
        <p className="text-xl mt-6">
          Creation of a brand identity for an oil and wine producer. In this
          screenshot the logo and bottle labels for wine and oil.
          <a
            className="mt-3 block"
            href="https://demo.brainyware.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon className="h-6 w-6" />
          </a>
        </p>
      </div>
      <div className="col-span-3 relative">
        <Image
          className="rounded-lg shadow-xl border border-gray-500"
          alt="Brainyware Intro"
          width={756}
          height={1656}
          src="/images/brainyware-mobile.webp"
        />
      </div>
    </div>
  );
}
