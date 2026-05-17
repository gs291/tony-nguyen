import { ArrowRight } from "lucide-react";
import type { SocialLink } from "@/config/site";

interface LinkCardProps {
  link: SocialLink;
}

export default function LinkCard({ link }: LinkCardProps) {
  const Icon = link.icon;

  if (link.primary) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full primary-cta rounded-xl py-4 px-6 flex items-center justify-between group active:scale-95 transition-transform"
      >
        <div className="flex items-center gap-3">
          <Icon className="text-black" size={24} />
          <span className="font-display text-[18px] font-bold text-black">
            {link.label}
          </span>
        </div>
        <ArrowRight
          size={20}
          className="text-black opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2.5 group-hover:translate-x-0"
        />
      </a>
    );
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full glass-card rounded-xl py-4 px-6 flex items-center justify-between group"
    >
      <div className="flex items-center gap-3">
        <Icon
          className="text-on-surface-variant group-hover:text-surface-tint transition-colors"
          size={24}
        />
        <span className="font-body text-body-md text-on-surface font-semibold">
          {link.label}
        </span>
      </div>
      <ArrowRight
        size={20}
        className="text-surface-tint opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2.5 group-hover:translate-x-0"
      />
    </a>
  );
}
