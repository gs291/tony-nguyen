import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 font-mono text-label-sm text-on-surface-variant hover:text-surface-tint transition-colors group"
    >
      <ArrowLeft
        size={14}
        className="group-hover:-translate-x-1 transition-transform"
      />
      Back to Home
    </Link>
  );
}
