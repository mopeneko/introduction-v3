import { NavLink as MantineNavLink } from "@mantine/core";
import { useLocation } from "react-router-dom";

type NavLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

export const NavLink = ({ href, icon, label }: NavLinkProps) => {
  const location = useLocation();

  const isActive = (href: string) => href === location.pathname;

  return (
    <MantineNavLink
      href={href}
      leftSection={icon}
      label={label}
      active={isActive(href)}
    />
  );
};
