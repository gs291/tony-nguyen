import type { SocialLink } from "@/config/site";
import LinkCard from "./LinkCard";

interface LinkListProps {
  links: SocialLink[];
}

export default function LinkList({ links }: LinkListProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      {links.map((link) => (
        <LinkCard key={link.label} link={link} />
      ))}
    </div>
  );
}
