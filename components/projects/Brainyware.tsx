import Image from "next/image";
import ProjectDescription from "@/components/projects/ProjectDescription";

export default function Brainyware() {
  return (
    <div className="grid grid-cols-12 mt-12 gap-8">
      <div className="col-span-9 relative">
        <Image
          className="project-image"
          alt="Brainyware Doc Chat"
          width={3580}
          height={1850}
          src="/images/brainyware-filesystem.webp"
        />
        <ProjectDescription url="https://demo.brainyware.ai/">
          Brainyware: A web app created with Next.js that allows you to upload
          documents in PDF and TXT format and organise them into folders. You
          can start a conversation with the AI by selecting the documents to
          query.
        </ProjectDescription>
      </div>
      <div className="col-span-3 relative">
        <Image
          className="project-image"
          alt="Brainyware Intro"
          width={756}
          height={1656}
          src="/images/brainyware-mobile.webp"
        />
      </div>
    </div>
  );
}
