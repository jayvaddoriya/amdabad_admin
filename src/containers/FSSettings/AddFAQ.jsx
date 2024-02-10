import { Button } from "antd";
import { FSButton, FSHelmet, FSInput, FSTextArea } from "../../components";
import { DashboardLayout } from "../../layouts";
import styles from "./FSSettings.module.css";
import { Link } from "react-router-dom";
import { SVGIcon } from "../../utils";

const AddFAQ = () => {
  return (
    <>
      <FSHelmet title="Settings | Nitinn Toss Book" />
      <DashboardLayout contentWrapperClass={`fs-body-padding`}>
        <div>
          <div className="fs-page-section-header mb-6">
            <div className="fs-page-section-header-title">
              <h2 className="fw-600">Add FAQ’s</h2>
            </div>
            <FSButton isSmall isBordered className={`w-auto ${styles.tabBtn}`}>Save</FSButton>
          </div>

          <div className="fs-page-body-container">
            <Link className={`d-inline-flex align-items-center mb-8 ${styles.backLink}`}> <span className="d-flex align-items-center justify-content-center mr-2">{SVGIcon.leftArrow}</span> Back</Link>
            <div className="mb-6">
              <div className="mb-6">
                <span className={`h6 ${styles.label}`}>Question</span>
                <FSInput id="quetion" placeholder="Write here" isLarge isDark />
              </div>
              <FSTextArea label="Answer" placeholder="Write here" />
            </div>
            <Button type="link" className={styles.anotherBtn}>+Add Another</Button>
          </div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default AddFAQ;