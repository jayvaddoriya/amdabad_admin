import { Pagination, Select } from 'antd'
import React, { useState } from 'react'
import { SVGIcon } from '../../utils';
import styles from './FSPagination.module.css'
import clsx from 'clsx';

export const FSPagination = ({
  id,
  name,
  dataTestId,
  className,
  total,
  ...rest
}) => {

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return (
        <>
          <div className={clsx(styles.FSPrevBtn, 'd-flex align-center' )}>
            <span className={clsx(styles.FSDirectionArrows, styles.FSPreviousArrow)}>
              {SVGIcon.FSicon_Linear_Arrow_Left}
            </span>
            <span className="fs-arrow-text">Previous</span>
          </div>
        </>
      );
    }
    if (type === 'next') {
      return (
        <>
          <div className={clsx(styles.FSNextBtn, 'd-flex align-center' )}>
            <span className="fs-arrow-text">Next</span>
            <span className={clsx(styles.FSDirectionArrows, styles.FSNextArrow)}>
              {SVGIcon.FSicon_Linear_Arrow_Right}
            </span>
          </div>
        </>
      );
    }
    return originalElement;
  };

  const [page, setPage] = useState(5);
  const [current, setCurrent] = useState(1);

  const handleChange = (value) => {
    console.log(value)
    setPage(value);
  };

  const onChangePage = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <>
      <div className={clsx(styles.FSPagination)}>
        <div className={''}>
          <Select
            current={current}
            defaultValue={5}
            style={{ width: 70 }}
            onChange={handleChange}
            options={[
              {
                value: 5,
                label: "5"
              },
              {
                value: 8,
                label: "8"
              },
              {
                value: 10,
                label: "10"
              },
              {
                value: 15,
                label: "15"
              },
              {
                value: 20,
                label: "20"
              },
            ]}
          />
          <span className='ml-2'>Show entries</span>
        </div>
        <Pagination
          id={id}
          name={name}
          data-test-id={dataTestId}
          className={clsx(className)}
          pageSize={page}
          onChange={onChangePage}
          itemRender={itemRender}
          total={total}
          {...rest}
        />
      </div>
    </>
  )
}
