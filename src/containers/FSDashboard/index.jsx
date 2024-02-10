import { FSHelmet, FSStatistic } from "../../components"
import { DashboardLayout } from "../../layouts"
import { SVGIcon } from "../../utils"
import styles from "./FSDashboard.module.css"
import clsx from "clsx"

const FSDashboard = () => {

  return (
    <>
      <FSHelmet title="Dashboard | Nitinn Toss Book" />
      <DashboardLayout contentWrapperClass={`fs-body-padding`}>
        <div className={styles.FSDashboardStatisticCardBar}>
          <div className={styles.FSDashboardStatisticCardCol}>
            <FSStatistic
              isOnlyStatistics={true}
              isCardBlock={true}
              icon={SVGIcon.FSicon_Solid_User}
              iconWrapperClass={clsx(styles.FSDashboardIconWrapper, "border-rounded-corners ground-color-red")}
              label="Total User"
              numbers="21.5k"
            />
          </div>
          <div className={styles.FSDashboardStatisticCardCol}>
            <FSStatistic
              isOnlyStatistics={true}
              isCardBlock={true}
              icon={SVGIcon.FSicon_Solid_UserAdd}
              iconWrapperClass={clsx(styles.FSDashboardIconWrapper, "border-rounded-corners ground-color-yellow")}
              label={<>New User <span className="h6">(This Month)</span></>}
              numbers="1.7k"
            />
          </div>
          <div className={styles.FSDashboardStatisticCardCol}>
            <FSStatistic
              isOnlyStatistics={true}
              isCardBlock={true}
              icon={SVGIcon.FSicon_Solid_Cube}
              iconWrapperClass={clsx(styles.FSDashboardIconWrapper, "border-rounded-corners ground-color-blue")}
              label={<>New Products <span className="h6">(This Month)</span></>}
              numbers="2.5k"
            />
          </div>
          <div className={styles.FSDashboardStatisticCardCol}>
            <FSStatistic
              isOnlyStatistics={true}
              isCardBlock={true}
              icon={SVGIcon.FSicon_Solid_Shapes}
              iconWrapperClass={clsx(styles.FSDashboardIconWrapper, "border-rounded-corners ground-color-blue-sky")}
              label="Total Categories"
              numbers="23"
            />
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default FSDashboard