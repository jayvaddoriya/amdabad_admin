import { NavLink } from 'react-router-dom'
import { SVGIcon } from '../../../utils';
import { useSidebar } from '../../../contexts/SidebarProvider/SidebarProvider';
import styles from "./FSMenu.module.css";
import clsx from 'clsx';

const fsNavLinkList = [
  {
    path: "/dashboard",
    text: "Dashboard",
    icon: SVGIcon.FSicon_Linear_Dashboard,
  },
  {
    path: "/users",
    text: "Users",
    icon: SVGIcon.FSicon_Linear_User,
  },
  {
    path: "/categories",
    text: "Categories",
    icon: SVGIcon.FSicon_Linear_Shapes,
  },
  {
    path: "/products",
    text: "Products",
    icon: SVGIcon.FSicon_Linear_Cube,
  },
  {
    path: "/sell-history",
    text: "Sell History",
    icon: SVGIcon.FSicon_Linear_Document,
  },
  {
    path: "/settings",
    text: "Settings",
    icon: SVGIcon.FSicon_Linear_Setting,
  }
]

export const FSMenu = () => {
  const { setNavMenuOpen } = useSidebar();
  return (
    <ul className={clsx(styles.FSSidebarMenu)}>
      {fsNavLinkList.map((sidebarNavItems, sidebarNavIndex) => {
        return (
          <li key={sidebarNavIndex} className={clsx(styles.FSSidebarMenuItem)}>
            <NavLink
              to={sidebarNavItems.path}
              className={clsx(styles.FSSidebarMenuLink)}
              onClick={() => setNavMenuOpen(false)}
            >
              <span className={clsx(styles.FSSidebarNavIcon, 'flex-center contain-image flex-auto-0')}>
                {sidebarNavItems.icon}
              </span>
              <span className={`flex-center contain-image flex-auto-0`}>
                {sidebarNavItems.text}
              </span>
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
};