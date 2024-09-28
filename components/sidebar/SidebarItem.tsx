import { CiBookmarkCheck , CiCircleList  } from "react-icons/ci";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { SidebarLink } from "./SidebarLink";

const items = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: <MdOutlineDashboardCustomize size={26} />,
  },
  {
    id: 2,
    name: "Rest Todos",
    href: "/dashboard/todos",
    icon: <CiBookmarkCheck size={26} />,
  },
  {
    id: 3,
    name: "Server Actions",
    href: "/dashboard/actions",
    icon: <CiCircleList size={26} />,
  }
];

export const SidebarItem = () => {
  return (
    <ul className="space-y-2 tracking-wide mt-8">
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}

      {items.map((item) => (
        <SidebarLink
          key={item.id}
          name={item.name}
          href={item.href}
          icon={item.icon}
        />
      ))}
    </ul>
  );
};
