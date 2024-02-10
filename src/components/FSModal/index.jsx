import { Modal } from 'antd'
import React from 'react'
import styles from './FSModal.module.css'
import clsx from 'clsx'

export const FSModal = ({
  id,
  name,
  width,
  dataTestId,
  onModalOpen,
  modalContainerClass,
  className,
  wrapClassName,
  isCentered,
  isModalClosable,
  isHeaderVisible,
  headerText,
  headerTextPosition,
  modalBodyContent,
  isFooterVisible,
  modalFooterContent,
  modalHandleCancel,
  ...rest
}) => {

  return (
    <>
      <Modal
        width={width}
        id={id}
        name={name}
        dataTestId={dataTestId}
        className={clsx(className, styles.FSModal)}
        open={onModalOpen}
        onCancel={modalHandleCancel}
        closable={isModalClosable}
        centered={isCentered}
        wrapClassName={wrapClassName}
        footer={false} 
        {...rest}
      >
        {headerText && (
          <h6>
            {headerText}
          </h6>
        )}

        <div>
          {modalBodyContent}
        </div>

        {isFooterVisible && (
          <div className="modal-footer-content">
            {modalFooterContent}
          </div>
        )}

      </Modal>
    </>
  )
}
