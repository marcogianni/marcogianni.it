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
      className="col-span-4 flex flex-col gap-4 cursor-pointer"
      onClick={() => handleSelect(id)}
    >
      <div
        className={cn(
          "w-full text-xl p-4 rounded-md flex items-center justify-between transition-colors",
          selected === id ? "bg-secondary" : "border"
        )}
      >
        <span>{title}</span>
        <ChevronRightIcon className="h-6 w-6" />
      </div>
    </div>
  );
}
