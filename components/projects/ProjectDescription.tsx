import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Tool from "../Tool";

interface Props {
  children: React.ReactNode;
  url: string;
  tools?: string[];
}

export default function ProjectDescription(props: Props) {
  return (
    <div className="text-md sm:text-xl mt-4">
      <div className="my-2 flex gap-1 flex-wrap">
        {props.tools?.map((title, index) => (
          <Tool title={title} key={index} />
        ))}
      </div>
      <p>{props.children}</p>
      <a
        className="mt-3 block"
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLinkIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
