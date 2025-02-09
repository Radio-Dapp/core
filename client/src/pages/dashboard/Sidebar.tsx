import { Image, Tooltip } from "@heroui/react";
import Icon from "../../shared/components/Icon";
import Link from "../../shared/components/Link";
import type { icons } from "lucide-react";
import ThemeSwitch from "../../shared/components/ThemeSwitch";
// import ThemeSwitch from "../../shared/components/ThemeSwitch";


type sidebarItems = {
  name: string;
  iconName: keyof typeof icons;
  to: string;
};

const sidebarItems: sidebarItems[] = [
  {
    name: "Home",
    iconName: "House",
    to: "/dashboard/home",
  },
  {
    name: "Explore",
    iconName: "Telescope",
    to: "/dashboard/explore",
  },
  {
    name: "Create",
    iconName: "SquarePlus",
    to: "/dashboard/create",
  },
  {
    name: "Your Funds",
    iconName: "ChartPie",
    to: "/dashboard/account",
  },
  {
    name: "Support",
    iconName: "CircleHelp",
    to: "/dashboard/support",
  },
  {
    name: "Settings",
    iconName: "Settings",
    to: "/dashboard/settings",
  },
]

function Sidebar() {
  return (
    <div className="fixed bg-background glass h-screen border-r flex-col items-center justify-between hidden sm:flex z-30">
      <section className="flex flex-col w-[6.5rem] items-center ">
        <Link to="/">
          <Image src={
            "/icons/logo_icon.png"
          } alt="logo" className="py-4 px-2 w-[5.5rem]" isBlurred disableSkeleton />
        </Link>

        {/* <hr className="w-full mx-auto border-t border-border" /> */}
      </section>

      <section className="flex items-center justify-center w-full h-full ">
        <ul className="flex flex-col items-center justify-center gap-6">
          {sidebarItems.map((item, index) => (
            <li className="btn-icon" key={index}>
              <Link to={item.to}>
                <Icon name={item.iconName} className="w-6" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6 items-center justify-center w-full py-4 mb-2">
        <ThemeSwitch />

        <Link to="/dashboard/profile">
          <Tooltip content="Profile">
            <Image src={
              "/images/user.png"
            } alt="user" className="w-[2.1rem] border rounded-full bg-grey-200" />
          </Tooltip>
        </Link>
      </section>
    </div>
  )
}

export default Sidebar;