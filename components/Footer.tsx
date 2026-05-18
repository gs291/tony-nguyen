import Link from "next/link";

interface FooterProps {
  name: string;
  copyrightYear: number;
}

export default function Footer({ name, copyrightYear }: FooterProps) {
  return (
    <footer className="w-full py-section-gap bg-transparent flex flex-col items-center gap-unit text-center mt-8 relative z-10">
      <div className="flex gap-4 mb-2">
        <Link
          href="/privacy"
          className="font-mono text-label-sm text-on-surface-variant hover:text-surface-tint transition-colors"
        >
          Privacy
        </Link>
        <Link
          href="/terms"
          className="font-mono text-label-sm text-on-surface-variant hover:text-surface-tint transition-colors"
        >
          Terms
        </Link>
      </div>
      <p className="font-mono text-label-sm uppercase text-on-surface-variant">
        © {copyrightYear} {name.toUpperCase()}
      </p>
    </footer>
  );
}
