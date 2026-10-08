import { Stagger, StaggerItem } from "@/components/Motion";

interface Props {
  eyebrow: string;
  title: string;
}

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <Stagger className="mx-auto mb-12 sm:mb-16 flex max-w-2xl flex-col items-center text-center">
      <StaggerItem
        as="p"
        distance={8}
        className="text-sm font-medium uppercase tracking-[0.2em] text-primary"
      >
        {eyebrow}
      </StaggerItem>
      <StaggerItem
        as="h2"
        distance={12}
        blur={4}
        className="mt-3 text-4xl sm:text-5xl font-medium tracking-tight"
      >
        {title}
      </StaggerItem>
    </Stagger>
  );
}
