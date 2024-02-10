import { Input } from 'antd'
import React from 'react'
import inputStyles from '../FSInput/FSInput.module.css';
import styles from './FSInputPassword.module.css'
import clsx from 'clsx'

export const FSInputPassword = ({
  id,
  name,
  dataTestId,
  placeholder,
  className,
  defaultValue,
  value,
  minLength,
  maxLength,
  prefix,
  errorText,
  errorTextClass,
  mainWrapperClass,
  handleChange,
  isSmall,
  isLarge,
  isLight,
  isDark,
  ...rest

}) => {

  const inputClasses = clsx(inputStyles.FSInput, styles.FSPasswordInput, className, {
    [inputStyles.FSInputSmall]: isSmall,
    [inputStyles.FSInputLarge]: isLarge,
    [inputStyles.FSInputLight]: isLight,
    [inputStyles.FSInputDark]: isDark,
  })
  return (
    <>
      <div className={clsx(inputStyles.FSInputWrapper, mainWrapperClass)}>
        <Input.Password
          id={id}
          name={name}
          data-test-id={dataTestId}
          placeholder={placeholder}
          className={inputClasses}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          minLength={minLength}
          maxLength={maxLength}
          prefix={prefix}
          {...rest}
        />
      </div>
      {errorText && (<span className={clsx(inputStyles.FSInputError, errorTextClass)}>{errorText}</span>)}
    </>
  )
}
