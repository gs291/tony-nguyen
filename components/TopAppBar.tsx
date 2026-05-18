"use client";

interface TopAppBarProps {
  monogram: string;
  showMenu?: boolean;
  onMenuToggle: () => void;
  onShare: () => void;
}

export default function TopAppBar({
  monogram,
  showMenu = true,
  onMenuToggle,
  onShare,
}: TopAppBarProps) {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/10 flex justify-between items-center px-container-margin py-4">
      {showMenu ? (
        <button
          aria-label="Menu"
          className="text-on-surface-variant hover:text-surface-tint transition-colors active:scale-95"
          onClick={onMenuToggle}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      ) : (
        <div className="w-6" />
      )}

      <div className="font-display text-headline-lg-mobile text-primary font-bold tracking-tight">
        {monogram}
      </div>

      <button
        aria-label="Share"
        className="text-on-surface-variant hover:text-surface-tint transition-colors active:scale-95"
        onClick={onShare}
      >
        <span className="material-symbols-outlined">share</span>
      </button>
    </header>
  );
}
