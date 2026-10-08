import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Tool from "@/components/Tool";

interface Props {
  title: string;
  period: string;
  tools: string[];
  children: React.ReactNode;
}

export default function Experience(props: Props) {
  const { title, period, tools = [], children } = props;

  return (
    <ScrollArea className="h-auto sm:h-[350px] w-full">
      <h3 className="text-2xl font-medium">{title}</h3>
      <p className="mt-1 text-lg text-muted-foreground">{period}</p>
      <ul className="mt-4 flex gap-2 flex-wrap">
        {tools.map((title) => (
          <Tool title={title} key={title} />
        ))}
      </ul>
      <Separator className="mt-6" />
      <div className="text-muted-foreground [&_li::marker]:text-primary">
        {children}
      </div>
    </ScrollArea>
  );
}
