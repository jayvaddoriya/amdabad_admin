import React from "react";
import {FSButton, FSInput, FSInputPassword, FSModal} from "..";
import {Col, Row} from "antd";
import {Link} from "react-router-dom";
import {SVGIcon} from "../../utils";

export const FSManageProfileModal = ({profileModalOpen, profileModalCancel}) => {
  return (
    <>
      <FSModal
        onModalOpen={profileModalOpen}
        id="manageProfileModal"
        name="Manage Profile Modal"
        dataTestId="manage-profile-modal"
        width={600}
        closable={true}
        closeIcon={SVGIcon.FSicon_Linear_Close}
        modalHandleCancel={profileModalCancel}
        isCentered
        modalBodyContent={
          <>
            <div className="fs-modal-content">
              <div className="fs-modal-card-header text-center">
                <h3 className="fw-600 mb-6">Manage Profile</h3>
                <div className="fs-profile-img mb-10">
                  <img src="https://i.pravatar.cc/150?img=3" alt="" />
                </div>
              </div>
              <div className="fs-modal-card-contents">
                <Row gutter={[0, 16]} style={{marginBottom: "40px"}}>
                  <Col span={24}>
                    <FSInput
                      id="fsInputEmail"
                      name="Fs Input Email"
                      dataTestId="fs-input-email"
                      placeholder="Email"
                      isLarge
                      isDark
                      prefix={SVGIcon.FSicon_Linear_Envelope}
                    />
                  </Col>
                  <Col span={24}>
                    <FSInputPassword
                      id="fsPasswordInput"
                      name="Fs Password Input"
                      dataTestId="fs-password-input"
                      placeholder="Password"
                      isDark
                      isLarge
                      prefix={SVGIcon.FSicon_Linear_Lock}
                    />
                  </Col>
                </Row>
                <div className="form-btn">
                  <FSButton
                    id="fsButtonSave"
                    name="Fs Button Save"
                    dataTestId="fs-button-save"
                    isLarge
                    isHoverShineLight
                  >
                    Save
                  </FSButton>
                </div>
                <Link to="/" className="fs-link-cancel text-center">
                  Cancel
                </Link>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};
