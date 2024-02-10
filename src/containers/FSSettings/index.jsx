import { FSHelmet } from "../../components";
import { DashboardLayout } from "../../layouts";
import styles from "./FSSettings.module.css"

const FSSettings = () => {

  return (
    <>
      <FSHelmet title="Settings | Nitinn Toss Book" />
      <DashboardLayout contentWrapperClass={`fs-body-padding`}>
        <div>
          <div className="fs-page-section-header mb-6">
            <div className="fs-page-section-header-title">
              <h2 className="fw-600">Settings</h2>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};
export default FSSettings;