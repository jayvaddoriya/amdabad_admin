import { Input } from 'antd';
import inputStyles from '../FSInput/FSInput.module.css';
import styles from "./FSTextArea.module.css";
import clsx from "clsx";
const { TextArea } = Input;

export const FSTextArea = ({ id, name, dataTestId, handleChange, placeholder, isLarge, label, errorText,
  errorTextClass, }) => {
  return (
    <>
      {label && <span className={styles.label}>{label}</span>}
      <TextArea
        id={id}
        name={name}
        data-test-id={dataTestId}
        onChange={handleChange}
        placeholder={placeholder}
        className={clsx(styles.FSTextArea, { [styles.large]: isLarge })} />
      {errorText && (<span className={clsx(inputStyles.FSInputError, errorTextClass)}>{errorText}</span>)}
    </>
  );
}