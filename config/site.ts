import {
  Play,
  Camera,
  MessagesSquare,
  ShoppingCart,
  Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react"; 

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SocialLink {
  /** Display label shown on the card */
  label: string;
  /** Destination URL */
  href: string;
  /** Lucide icon component */
  icon: LucideIcon;
  /** If true, renders as the white primary CTA style */
  primary?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string; // Material Symbols icon name
}

export interface SiteConfig {
  /** Display name (rendered in uppercase) */
  name: string;
  /** Handle shown below the name */
  handle: string;
  /** Monogram for the top bar */
  monogram: string;
  /** URL to the profile/avatar image */
  avatarUrl: string;
  /** Alt text for the avatar */
  avatarAlt: string;
  /** Copyright year */
  copyrightYear: number;
  /** Social / link-in-bio cards */
  links: SocialLink[];
  /** Drawer navigation items */
  nav: NavItem[];
}

/* ------------------------------------------------------------------ */
/*  Configuration – edit this object to update the page                */
/* ------------------------------------------------------------------ */

const siteConfig: SiteConfig = {
  name: "Tony Nguyen",
  handle: "@tonynguyenn28",
  monogram: "TN",
  avatarUrl: "/tony.jpeg",
  avatarAlt: "Tony Nguyen Portrait",
  copyrightYear: 2026,

  links: [
    {
      label: "TikTok",
      href: "https://tiktok.com/@tonynguyenn28",
      icon: Play,
      primary: true,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/Natsu_nguyen58",
      icon: Camera,
    },
    {
      label: "Discord",
      href: "https://discord.gg/9KUgTWyFS3",
      icon: MessagesSquare,
    },
    {
      label: "Merch Shop",
      href: "https://merch.tonynguyen.com",
      icon: ShoppingCart,
    },
    {
      label: "Work with me",
      href: "mailto:Tony.nguyen1239@gmail.com",
      icon: Mail,
    },
  ],

  nav: [
    { label: "Home", href: "/", icon: "home" },
    { label: "Gallery", href: "/gallery", icon: "photo_library" },
    { label: "About", href: "/about", icon: "person" },
    { label: "Contact", href: "/contact", icon: "mail" },
  ],
};

export default siteConfig;
