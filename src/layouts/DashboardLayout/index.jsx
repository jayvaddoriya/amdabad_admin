import { FSHeader, FSSidebar } from "../../components"
import clsx from "clsx";
import styles from './DashboardLayout.module.css';

export const DashboardLayout = ({ children, layoutWrapperClass, bodyWrapperClass, contentWrapperClass }) => {
  return (
    <div className={clsx(layoutWrapperClass)}>
      <FSHeader />
      <div className={clsx(bodyWrapperClass, styles.FSBody)}>
        <FSSidebar />
        <div className={clsx(contentWrapperClass, styles.FSContentBody)}>
          {children}
        </div>
      </div>
    </div>
  )
}