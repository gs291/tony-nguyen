"use client";

import type { NavItem } from "@/config/site";

interface NavDrawerProps {
  monogram: string;
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}

export default function NavDrawer({
  monogram,
  items,
  isOpen,
  onClose,
}: NavDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <nav
        className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-surface-container border-r border-white/10 z-[70] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "drawer-open" : "drawer-enter"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-container-margin border-b border-white/10">
          <span className="font-display text-headline-lg-mobile text-primary font-bold tracking-tight">
            {monogram}
          </span>
          <button
            aria-label="Close Menu"
            className="text-on-surface-variant hover:text-surface-tint transition-colors active:scale-95"
            onClick={onClose}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Nav links */}
        <div className="flex flex-col p-container-margin gap-4">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-body-md text-on-surface hover:text-surface-tint transition-colors py-2 flex items-center gap-3"
              onClick={onClose}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
