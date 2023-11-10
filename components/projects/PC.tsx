import ProjectDescription from "@/components/projects/ProjectDescription";
import Image from "next/image";

export default function PC() {
  return (
    <div className="grid grid-cols-12 mt-12 gap-8">
      <div className="col-span-4 relative">
        <Image
          className="project-image"
          alt="Piercarlo Carcereri"
          width={2000}
          height={2000}
          src="/images/PiercarloCarcereri.webp"
        />
        <ProjectDescription url="https://piercarlocarcereri.it/">
          Piercarlo Carcereri: Brand identity for an oil and wine producer. In
          this screenshot the logo and bottle labels for wine and oil.
        </ProjectDescription>
      </div>
      <div className="col-span-4 relative">
        <Image
          className="project-image"
          alt="Wine Label"
          width={1652}
          height={2362}
          src="/images/WineLabel.webp"
        />
      </div>
      <div className="col-span-4 relative">
        <Image
          className="project-image"
          alt="Oil Label"
          width={1652}
          height={2988}
          src="/images/OilLabel.webp"
        />
      </div>
    </div>
  );
}
