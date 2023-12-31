import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";

interface Props {
  id: string;
  title: string;
  selected: string;
  handleSelect: (id: string) => void;
}

export default function Selector(props: Props) {
  const { id, title, selected = "", handleSelect } = props;

  return (
    <div
      className="flex w-full flex-col cursor-pointer"
      onClick={() => handleSelect(id)}
    >
      <div
        className={cn(
          "text-md sm:text-xl py-2 sm:py-4 px-4 sm:px-6 rounded-md border hover:bg-secondary/80 flex items-center justify-between transition-colors duration-500",
          selected === id && "bg-secondary"
        )}
      >
        <span>{title}</span>
        <ChevronRightIcon className="h-6 w-6" />
      </div>
    </div>
  );
}
