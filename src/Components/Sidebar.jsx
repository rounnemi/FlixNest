//import { Dashboard, Search, Signup, User } from "../Assets/icons";
import SidebarItem from "./SidebarItem";

import {
  faUser,
  faSearch,
  faDashboard,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const data = [
    {
      name: "User",
      icon: faUser,
    },
    {
      name: "Search",
      icon: faSearch,
    },
    {
      name: "Dashboard",
      icon: faDashboard,
    },
    {
      name: "User",
      icon: faUser,
    },
    {
      name: "SignIn",
      icon: faSignIn,
    },
  ];

  return (
    <aside
      id="default-sidebar"
      className="  rounded-2xl z-40 w-64 h-full  transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div
        class="h-full px-3 py-4 overflow-y-auto bg-gray-500 dark:bg-gray-800 rounded-2xl"
        style={{
          background: "rgba(170, 172, 176, 0.9)",
          color: "rgba(170, 172, 176, 0.9)",
        }}
        x
      >
        <ul class="space-y-2 font-medium text-xs">
          {data.map(({ id, name, icon }) => (
            <SidebarItem key={id} name={name} icon={icon} />
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
