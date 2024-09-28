"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarLinkProps = {
  name: string;
  href: string;
  icon: JSX.Element;
};

export const SidebarLink = ({ name, href, icon }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname == href;

  return (
    <li>
      <Link
        href={href}
        className={`${
          isActive ? "bg-gradient-to-r from-sky-600 to-cyan-400 text-white hover:no-underline" : ""
        } hover:underline relative px-4 py-3 flex items-center space-x-4 rounded-xl font-semibold `}
      >
        {icon}
        <span className="-mr-1 font-medium">{name}</span>
      </Link>
    </li>
  );
};
