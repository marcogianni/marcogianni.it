import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <div className="w-full h-[calc(100vh-3.5em-3em)] flex items-center content-center">
      <div>
        <div className="text-6xl font-semibold">Hello</div>
        <div className="text-2xl mt-4">
          My name is Marco, I&apos;m a frontend engineer from Italy. Interested
          in blockchain, web, design and user experience.{" "}
          <span className="opacity-50">
            I&apos;m currently spending my time with the wonderful people at
            Over the Reality.
          </span>
        </div>

        <Button className="mt-6">Visit LinkedIn Profile</Button>
      </div>
    </div>
  );
}
