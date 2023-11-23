import { motion, cubicBezier } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Tool from "@/components/Tool";

const easing = cubicBezier(0.35, 0.17, 0.3, 0.86); // default easing

interface Props {
  id: string;
  title: string;
  period: string;
  selected?: boolean;
  tools: string[];
  children: React.ReactNode;
}

export default function Experience(props: Props) {
  const { title, id, period, selected = false, tools = [], children } = props;

  if (!selected) return null;

  return (
    <motion.div
      key={id}
      transition={{ duration: 0.4, ease: easing }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      className="w-full"
    >
      <ScrollArea className="h-auto sm:h-[350px] w-full">
        <div className="text-2xl text-medium">{title}</div>
        <div className="text-lg text-medium opacity-50">{period}</div>
        <div className="mt-4 flex gap-1 flex-wrap">
          {tools.map((title, index) => (
            <Tool title={title} key={index} />
          ))}
        </div>
        <Separator className="mt-6" />
        {children}
      </ScrollArea>
    </motion.div>
  );
}
