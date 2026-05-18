"use client";

import { useState, useCallback } from "react";
import siteConfig from "@/config/site";
import { TopAppBar, NavDrawer, Toast, Footer } from "@/components";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  const handleShare = useCallback(() => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2000);
      })
      .catch((err) => console.error("Failed to copy link:", err));
  }, []);

  const hasNav = siteConfig.nav.length > 0;

  return (
    <>
      {hasNav && (
        <NavDrawer
          monogram={siteConfig.monogram}
          items={siteConfig.nav}
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
      )}
      <Toast message="Link Copied!" visible={toastVisible} />
      <TopAppBar
        monogram={siteConfig.monogram}
        showMenu={hasNav}
        onMenuToggle={toggleMenu}
        onShare={handleShare}
      />

      {children}

      <Footer
        name={siteConfig.name}
        copyrightYear={siteConfig.copyrightYear}
      />
    </>
  );
}
