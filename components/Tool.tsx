interface Props {
  title: string;
}

export default function Tool(props: Props) {
  const { title } = props;
  return (
    <li className="inline-flex items-center rounded-full border border-border/80 bg-secondary/40 px-3 py-1 text-sm font-medium text-secondary-foreground">
      {title}
    </li>
  );
}
