import {Avatar, Button, Col, Image, Row, Switch} from "antd";
import {FSButton, FSHelmet, FSInput, FSModal, FSTable} from "../../components";
import {DashboardLayout} from "../../layouts";
import {SVGIcon} from "../../utils";
import {tableColumnDataCategories} from "../../components/FSTable/FSTableDataContents/FSTableDataSource";
import styles from "../../components/FSTable/FSTable.module.css";
import clsx from "clsx";
import { useState } from "react";
import { roundedTrash } from "../../assets/images";

const FSCategories = () => {
  const [showCategoryDeleteModal, setShowCategoryDeleteModal] = useState(false);
  const [showCategoryEditModal, setShowCategoryEditModal] = useState(true);

  const tableColumnTitleCategories = [
    {
      key: "id",
      title: "No.",
      dataIndex: "id"
    },
    {
      key: "categoryName",
      title: "Category Name",
      dataIndex: "categoryName",
      width: "80%",
      render: (_, record) => (
        <>
          <div className={clsx(styles.fsProductData)}>
            <div className={clsx(styles.fsProductImage)}>
              <Avatar src={<Image src={record.avatar} preview={false} />} size={48} />
            </div>
            <div className={clsx(styles.fsProductText)}>
              <span className={clsx(styles.fsProductName)}>{record.name}</span>
            </div>
          </div>
        </> 
      )
    },
    {
      key: "action",
      title: "Action",
      dataIndex: "action",
      width: "15%",
      align: "right",
      render: (_, record) => (
        <div className={clsx(styles.fsTableActionButtons)}>
          <Button
            type="link"
            className={clsx(styles.fsActionButtonIcon, styles.fsPreviewButton, "mr-3")}
            style={{ color: "#524EB7" }}
            icon={SVGIcon.FSicon_Linear_Edit}
          />
          <Button onClick={() => setShowCategoryDeleteModal(true)} type="link" icon={SVGIcon.FSicon_Linear_Trash} className={clsx(styles.fsActionButtonIcon,styles.fsTrashButton, "mr-3")}/>
          <Switch defaultChecked className="fs-switch" />
        </div>
      )
    }
  ];
  return (
    <>
      <FSHelmet title="Categories | Nitinn Toss Book" />
      <DashboardLayout contentWrapperClass={`fs-body-padding`}>
        <div>
          <div className="fs-page-section-header">
            <div className="fs-page-section-header-title">
              <h2 className="fw-600"> All Categories</h2>
            </div>
            <div>
              <Row gutter={[12, 0]}>
                <Col>
                  <FSInput
                    id="fsInputSearch"
                    name="Fs Input Search"
                    dataTestId="fs-input-search"
                    placeholder="Search here..."
                    isSmall
                    isDark
                    isSearch
                    prefix={SVGIcon.FSicon_Linear_Search}
                  />
                </Col>
                <Col>
                  <FSButton
                    id="fsButtonAddCategory"
                    name="Fs Button Add Category"
                    dataTestId="fs-button-add-category"
                    isBordered
                    isExtraSmall
                    isHoverShineDark
                    icon={SVGIcon.FSicon_Linear_Plus}
                  >
                    Add Category
                  </FSButton>
                </Col>
              </Row>
            </div>
          </div>

          <div className="fs-table-container">
            <FSTable
              id="fsTable"
              name="FS Table"
              dataTestId="fs-table"
              tableColumn={tableColumnTitleCategories}
              tableDataSource={tableColumnDataCategories}
              defaultPageSize={10}
              showPagination={tableColumnDataCategories.length > 10}
              responsive={true}
              scroll={{
                x: 270
              }}
            />
          </div>
        </div>
      </DashboardLayout>
      <FSModal
        onModalOpen={showCategoryDeleteModal}
        id="CategoryDeleteModal"
        name="CategoryDeleteModal"
        dataTestId="CategoryDeleteModal"
        width={400}
        closable={false}
        modalHandleCancel={() => setShowCategoryDeleteModal(false) }
        isCentered
        modalBodyContent={
          <>
            <div className="fs-modal-content">
              <div className="fs-modal-card-header text-center mb-4">
                <img src={roundedTrash} alt="" width={120} height={120} className="mb-4" />
                <h3 className="fw-600 mb-1">Delete Category</h3>
                <p className="text-color-gray">Are you sure that you want to delete <strong className="fw-500">“Furniture”</strong> ?</p>
              </div>
              <div className="fs-modal-card-contents">
                <div className="form-btn">
                  <FSButton
                    id="fsButtonSave"
                    name="Fs Button Save"
                    dataTestId="fs-button-save"
                    isLarge
                    isHoverShineLight
                    isDanger
                  >
                    Delete Now
                  </FSButton>
                </div>
                <FSButton
                  id="fsButtonSave"
                  name="Fs Button Save"
                  dataTestId="fs-button-save"
                  isLarge
                  isCancel
                  onClick={() => setShowCategoryDeleteModal(false) }
                >
                  Cancel
                </FSButton>
              </div>
            </div>
          </>
        }
      />
      <FSModal
        onModalOpen={showCategoryEditModal}
        id="CategoryEditModal"
        name="CategoryEditModal"
        dataTestId="CategoryEditModal"
        width={600}
        closable={false}
        modalHandleCancel={() => setShowCategoryEditModal(false) }
        isCentered
        modalBodyContent={
          <>
            <div className="fs-modal-content">
              <div className="fs-modal-card-header text-center mb-4">
                <h3 className="fw-600 mb-1">Edit Category</h3>
              </div>
              <div className="fs-modal-card-contents">
                <label htmlFor="CategoryName" className="h6 text-color-gray mb-4 d-block">Category Name</label>
                <FSInput id="CategoryName" name="CategoryName" dataTestId="CategoryName" isDark isLarge placeholder="Name"/>
                <div className="form-btn mt-6">
                  <FSButton
                    id="fsButtonSave"
                    name="Fs Button Save"
                    dataTestId="fs-button-save"
                    isLarge
                    isHoverShineLight
                  >
                    Delete Now
                  </FSButton>
                </div>
                <FSButton
                  id="fsButtonSave"
                  name="Fs Button Save"
                  dataTestId="fs-button-save"
                  isLarge
                  isCancel
                  onClick={() => setShowCategoryEditModal(false) }
                >
                  Cancel
                </FSButton>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};
export default FSCategories;
