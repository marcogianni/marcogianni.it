import { Button } from "@/components/ui/button";

export default function Intro() {
  return (
    <div className="w-full h-[calc(100vh-3.5em-3em)] flex items-center content-center">
      <div>
        <div className="text-2xl">
          <p>
            My name is Marco, I&apos;m a frontend engineer from Italy.
            Interested in blockchain, web, design and user experience.
          </p>
          <p className="pt-2">
            Graduated from the University of Udine, specializing in Web and
            Multimedia Technologies.
          </p>
          <p className="pt-2 opacity-50">
            I&apos;m currently spending my time with the wonderful people at
            Over the Reality.
          </p>
          <Button size="lg" className="mt-6">
            Visit LinkedIn Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
