import { Button } from 'antd'
import React from 'react'
import styles from "./FSButton.module.css";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export const FSButton = ({
  id,
  name,
  dataTestId,
  className,
  onClick,
  type,
  isDisabled,
  isLoading = false,
  children,
  isError,
  isSuccess,
  isDanger,
  isBordered,
  isExtraSmall,
  isSmall,
  isLarge,
  isHoverShineDark,
  isHoverShineLight,
  isTableBtn,
  icon,
  isLink,
  isCancel,
  ...rest
}) => {

  const NavPath = useNavigate();

  const buttonClasses = clsx('d-flex flex-center', className, styles.FSButton, {
    [styles.FSButtonError]: isError,
    [styles.FSButtonSuccess]: isSuccess,
    [styles.FSButtonDanger]: isDanger,
    [styles.FSButtonBordered]: isBordered,
    [styles.isExtraSmall]: isExtraSmall,
    [styles.isSmall]: isSmall,
    [styles.isLarge]: isLarge,
    [styles.isHoverShineDark]: isHoverShineDark,
    [styles.isHoverShineLight]: isHoverShineLight,
    [styles.FSButtonTable]: isTableBtn,
    [styles.FSButtonIcon]: icon,
    [styles.FSButtonCancel]: isCancel,
  })

  return (
    <>
      <Button
        type={isCancel && 'link'}
        id={id}
        name={name}
        data-test-id={dataTestId}
        icon={icon && icon}
        className={buttonClasses}
        onClick={isLink ? () => NavPath(isLink) : onClick}
        disabled={isDisabled}
        htmlType={type}
        loading={isLoading}
        {...rest}
      >
        {children}
      </Button>
    </>
  )
}
