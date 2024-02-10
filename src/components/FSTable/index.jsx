import { Table } from 'antd';
import React from 'react';
import tableStyles from "./FSTable.module.css"
import styles from "../FSPagination/FSPagination.module.css"
import clsx from 'clsx';
import { SVGIcon } from '../../utils';

export const FSTable = ({
  id,
  name,
  dataTestId,
  tableColumn,
  tableDataSource,
  tableClassName,
  tableContainerClassName,
  scroll,
  onChange,
  tableLayout,
  sortDirections,
  showSorterTooltip,
  bordered,
  pagination,
  loading,
  filters,
  showPagination,
  defaultPageSize,
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
  return (
    <>
      <div className={clsx(tableStyles.fsTableWrapper, tableContainerClassName)}>
        <Table
          id={id}
          name={name}
          data-test-id={dataTestId}
          columns={tableColumn}
          dataSource={tableDataSource}
          className={tableClassName}
          scroll={scroll}
          onChange={onChange}
          tableLayout={tableLayout}
          sortDirections={sortDirections}
          showSorterTooltip={showSorterTooltip}
          pagination={ showPagination ? {
            defaultPageSize: defaultPageSize ? defaultPageSize : 10,
            position: ["bottomLeft"],
            className: styles.FSPagination,
            itemRender: itemRender,
            pageSizeOptions: [5, 10, 15, 20, 25, 30],
            showSizeChanger: true,
            responsive: true,
            locale: { items_per_page: "" } 
          } : false }
          loading={loading}
          filters={filters}
          {...rest}
        />
      </div>
    </>
  )
}
