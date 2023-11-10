import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface Props {
  children: React.ReactNode;
  url: string;
}

export default function ProjectDescription(props: Props) {
  return (
    <div className="text-xl mt-4">
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
