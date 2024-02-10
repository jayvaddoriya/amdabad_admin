import { Avatar, Button, Dropdown } from "antd";
import { SVGIcon } from "../../utils/SVGIcon";
import styles from './FSHeader.module.css';
import { useSidebar } from "../../contexts/SidebarProvider/SidebarProvider";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FSManageProfileModal } from "./FSManageProfileModal";

export const FSHeader = () => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const { setNavMenuOpen } = useSidebar();
  const items = [
    {
      key: 'ProfileDetails',
      label: (
        <div>
          <h3 className="word-break">Selena Grande</h3>
          <h6 className="word-break">selenagrande123@mail.com</h6>
        </div>
      ),
    },
    {
      key: 'ManageProfile',
      label: (
        <div role="button" className="d-flex align-center justify-start" onClick={() => setProfileModalOpen(true)}>
          <span className={clsx(styles.FSHeaderDropdownNavIcon, "flex-center contain-image flex-auto-0")}>{SVGIcon.FSicon_Linear_User}</span>
          <span className="ml-3">Manage Profile</span>
        </div>
      ),
    },
    {
      key: 'Logout',
      label: (
        <Link to={'/'} className={clsx(styles.FSHeaderDropdownLogout, "d-flex align-center justify-start")}>
          <span className={clsx(styles.FSHeaderDropdownNavIcon, "flex-center contain-image flex-auto-0")}>{SVGIcon.FSicon_Linear_LogOut}</span>
          <span className="ml-3">Logout</span>
        </Link>
      ),
    },
  ];

  return (<>
    <header className={clsx(styles.FSHeader)}>
      <div className="d-flex align-center">
        <Button
          type="text"
          className={clsx(styles.FSSidebarToggleButton, "flex-center contain-image flex-auto-0 mr-3")}
          onClick={() => { setNavMenuOpen(true); }}
        >
          {SVGIcon.FSicon_Linear_Hamburger}
        </Button>
        <div className="h2 fw-700">Nitinn Toss Book</div>
      </div>
      <div className="d-flex align-center justify-end">
        <div className="d-flex flex-column align-end">
          <span className="h4 text-color-black">Selena Grande</span>
          <span className="h6 text-color-gray">selenagrande123@mail.com</span>
        </div>

        <Dropdown
          arrow
          menu={{ items }}
          trigger={['click']}
          placement="bottomRight"
          className="ml-3"
          rootClassName={clsx(styles.FSProfileDropdown)}
          dropdownAlign={{ offset: [40, 4] }}
        >
          <Button type="text" className={styles.FSProfileDropdownButton}>
            <span className="d-flex align-center justify-end">
              <Avatar
                size={40}
                src="https://i.pravatar.cc/150?img=2"
                className={styles.FSHeaderProfileAvatar}
              />
              <span className={clsx( styles.FSProfileDropdownIcon, "flex-center contain-image flex-auto-0")}>
                {SVGIcon.FSicon_Linear_Arrow_Down}
              </span>
            </span>
          </Button>
        </Dropdown>
      </div>
    </header>
    <FSManageProfileModal
      profileModalOpen={profileModalOpen}
      profileModalCancel={() => setProfileModalOpen(false) }
    />
  </>)
}