import type { NavigationItem } from "@/types/content";

export const navigation: NavigationItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const mobileNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  ...navigation,
];
