import { Button, Drawer } from 'antd'
import { useSidebar } from '../../contexts/SidebarProvider/SidebarProvider'
import { SVGIcon } from '../../utils'
import styles from './FSSidebar.module.css'
import { FSMenu } from './FSMenu'
import {clsx} from 'clsx'

export const FSSidebar = () => {
  const { navMenuOpen, setNavMenuOpen } = useSidebar();

  return (
    <>
      <aside className={clsx(styles.FSSidebar)}>
        <div className={clsx(styles.FSSidebarMenuContainer)}>
          <FSMenu />
        </div>
      </aside >

      <Drawer
        open={navMenuOpen}
        placement="left"
        rootClassName={clsx(styles.FSNavMenuDrawer)}
        closable={false}
      >
        <div className="d-flex flex-column align-start justify-start">
          <div className={clsx(styles.FSNavMenuDrawerHeader)}>
            <Button
              type="text"
              onClick={() => setNavMenuOpen(false)}
              className={clsx( styles.FSHeaderCloseDrawerButton, "flex-center contain-image flex-auto-0 mr-3")}
            >
              {SVGIcon.FSicon_Linear_Close}
            </Button>
            <div className="h2 fw-700">Nitinn Toss Book</div>
          </div>
          <div className={clsx(styles.FSSidebarMenuContainer)}>
            <FSMenu />
          </div>
        </div>
      </Drawer>
    </>
  )
}