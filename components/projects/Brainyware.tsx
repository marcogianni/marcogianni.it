import Image from "next/image";
import { MotionInView } from "@/components/Motion";
import ProjectDescription from "@/components/projects/ProjectDescription";
import Video from "@/components/Video";

export default function Brainyware() {
  return (
    <div className="grid grid-cols-12 mt-12 gap-8">
      <div className="col-span-12 sm:col-span-9 relative">
        <MotionInView
          initial="hidden"
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Video
            url="https://dokenp1dkkukw6ax.public.blob.vercel-storage.com/brainy-EfOSWbK3mRIBQBb6NTyHVlSLP2xa2y.mp4"
            poster="/images/brainyware-filesystem.webp"
          />
        </MotionInView>
        <ProjectDescription url="https://demo.brainyware.ai/">
          Brainyware: A web app created with Next.js that allows you to upload
          documents in PDF and TXT format and organise them into folders. You
          can start a conversation with the AI by selecting the documents to
          query.
        </ProjectDescription>
      </div>
      <div className="col-span-12 sm:col-span-3 relative">
        <MotionInView
          initial="hidden"
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Image
            className="project-image"
            alt="Brainyware Intro"
            width={756}
            height={1656}
            src="/images/brainyware-mobile.webp"
          />
        </MotionInView>
      </div>
    </div>
  );
}
