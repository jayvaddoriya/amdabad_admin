import { FSButton, FSHelmet, FSInput, FSModal, FSTable } from "../../components"
import { DashboardLayout } from "../../layouts"
import { SVGIcon } from "../../utils"
import { tableColumnDataUsers } from "../../components/FSTable/FSTableDataContents/FSTableDataSource"
import { Avatar, Button, Image } from "antd"
import styles from '../../components/FSTable/FSTable.module.css'
import clsx from "clsx"
import { useState } from "react"
import { roundedTrash } from "../../assets/images"

const FSUsers = () => {
  const [showUserDeleteModal, setShowUserDeleteModal] = useState(false);

  const tableColumnTitleUsers = [
    {
      key: 'id',
      title: 'No.',
      dataIndex: 'id',
    },
    {
      key: 'userName',
      title: 'User Name',
      dataIndex: 'userName',
      width: '22%',
      sorter: (a, b) => a.userName.length - b.userName.length,
      render:(_, record)=>( 
        <div className={clsx(styles.fsProductData)}>
          <div className={clsx(styles.fsProductImage)}>
            <Avatar src={<Image src={record.avatar} preview={false} />} size={48}/>
          </div>
          <div className={clsx(styles.fsProductText)}>
            <span className={clsx(styles.fsProductName)}>{record.name}</span>
          </div>
        </div>
      )
    },
    {
      key: 'phoneNumber',
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      width: '15%',
      render: (text) => text || "-",
    },
    {
      key: 'email',
      title: 'Email',
      dataIndex: 'email',
      width: '20%',
      render: (text) => text || "-",
    },
    {
      key: 'registerDate',
      title: 'Register Date',
      dataIndex: 'registerDate',
      width: '15%',
      // render: (text) => {
      //   return text ? getUtcToLocalDate(text, dateFormat) : "-"
      // },
    },
    {
      key: 'location',
      title: 'Location',
      dataIndex: 'location',
      width: '15%',
    },
    {
      key: 'action',
      title: 'Action',
      dataIndex: 'action',
      width: '100px',
      align: 'right',
      render: (_, record) => (
        <div className={clsx(styles.fsTableActionButtons)}>
          <Button
            type="link"
            className={clsx(styles.fsActionButtonIcon, styles.fsPreviewButton, "mr-4")}
            style={{ color: "#524EB7" }}
            icon={SVGIcon.FSicon_Linear_Eye_Open}
          />
          <Button onClick={() => setShowUserDeleteModal(true)} type="link" icon={SVGIcon.FSicon_Linear_Trash} className={clsx(styles.fsActionButtonIcon,styles.fsTrashButton)}/>
        </div>
      ),
    },
  ];
  
  return (
    <>
      <FSHelmet title="Users | Nitinn Toss Book" />
      <DashboardLayout contentWrapperClass={`fs-body-padding`}>
        <div>
          <div className="fs-page-section-header">
            <div className="fs-page-section-header-title">
              <h2 className="fw-600">
                All Users
              </h2>
            </div>
            <div>
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
            </div>
          </div>

          <div className="fs-table-container">
            <div className="">
              <FSTable
                id="fsTable"
                name="FS Table"
                dataTestId="fs-table"
                tableColumn={tableColumnTitleUsers}
                tableDataSource={tableColumnDataUsers}
                defaultPageSize={10}
                showPagination={tableColumnDataUsers.length > 10}
                responsive={true}
                scroll={{
                  x: 1099,
                }}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
      <FSModal
        onModalOpen={showUserDeleteModal}
        id="manageProfileModal"
        name="Manage Profile Modal"
        dataTestId="manage-profile-modal"
        width={400}
        closable={false}
        modalHandleCancel={() => setShowUserDeleteModal(false) }
        isCentered
        modalBodyContent={
          <>
            <div className="fs-modal-content">
              <div className="fs-modal-card-header text-center mb-4">
                <img src={roundedTrash} alt="" width={120} height={120} className="mb-4" />
                <h3 className="fw-600 mb-1">Delete User</h3>
                <p className="text-color-gray">Are you sure that you want to delete <strong className="fw-500">“Selena Grande”</strong> ?</p>
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
                  onClick={() => setShowUserDeleteModal(false) }
                >
                  Cancel
                </FSButton>
              </div>
            </div>
          </>
        }
      />
    </>
  )
}

export default FSUsers