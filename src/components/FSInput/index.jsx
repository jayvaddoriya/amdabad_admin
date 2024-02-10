import { Input } from 'antd'
import React from 'react'
import styles from "./FSInput.module.css"
import {clsx} from 'clsx';

export const FSInput = ({
  id,
  name,
  dataTestId,
  type,
  className,
  errorText,
  errorTextClass,
  mainWrapperClass,
  handleChange,
  prefix,
  suffix,
  isSearch,
  isSmall,
  isLarge,
  isLight,
  isDark,
  ...rest
}) => {

  const inputClasses = clsx(styles.FSInput, className, {
    [styles.FSInputSearch]: isSearch,
    [styles.FSInputSmall]: isSmall,
    [styles.FSInputLarge]: isLarge,
    [styles.FSInputLight]: isLight,
    [styles.FSInputDark]: isDark,
  })

  return (
    <>
      <div className={clsx(styles.FSInputWrapper, mainWrapperClass)}>
        <Input
          id={id}
          name={name}
          data-test-id={dataTestId}
          type={type}
          className={inputClasses}
          onChange={handleChange}
          prefix={prefix}
          suffix={suffix}
          {...rest}
        />
        {errorText && (<span className={clsx(styles.FSInputError, errorTextClass)}>{errorText}</span>)}
      </div>
    </>
  )
}
