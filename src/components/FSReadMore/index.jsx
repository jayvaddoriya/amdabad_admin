import React, { useState } from 'react'
import {clsx} from 'clsx'
import styles from './FSReadMore.module.css'

export const FSReadMore = ({ children, sliceStartLength, sliceEndLength, sliceClassName, className }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={clsx(styles.ReadMoreLessText, className)}>
      {isReadMore ? text?.slice(sliceStartLength, sliceEndLength) : text}
      {
        text?.length > sliceEndLength ? (
          <span onClick={toggleReadMore} className={clsx(sliceClassName, styles.ReadMoreLess)}>
            {isReadMore ? ".. Read more" : " Read less"}
          </span>
        ) : null
      }
    </p>
  );
};