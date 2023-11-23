import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
}

export default function Tool(props: Props) {
  const { title } = props;
  return (
    <Badge variant="outline" className="text-sm">
      {title}
    </Badge>
  );
}
