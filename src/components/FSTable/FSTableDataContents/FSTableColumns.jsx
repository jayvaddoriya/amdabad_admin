import moment from "moment/moment";
import { SVGIcon } from "../../../utils";
import { Avatar, Image, Switch } from "antd";
import styles from "./../FSTable.module.css";
import clsx from "clsx";
import { FSReadMore } from "../../FSReadMore";
const dateFormat = "DD-MMM-YYYY h:mm:ss";
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

export const getUtcToLocalDate = (date, dateFormat = "Do MMM, YYYY") => {
  return date ? moment.utc(date).local().format(dateFormat) : null
};

export const tableColumnTitleDashboard = [
  {
    key: 'id',
    title: 'No.',
    dataIndex: 'id',
  },
  {
    key: 'productName',
    title: 'Product Name',
    dataIndex: 'productName',
    width: '20%',
    sorter: (a, b) => a.productName.length - b.productName.length,
    render:(_,record)=>(
      <div className={clsx(styles.fsProductData)}>
        <div className={clsx(styles.fsProductImage)}>
          <Avatar src={<Image src={record.avatar} preview={false} />} size={48}/>
        </div>
        <div className={clsx(styles.fsProductText)}>
          <span className={clsx(styles.fsProductName)}>{record.name}</span>
          <div className="d-flex align-center">
            <span className={clsx(styles.fsProDate, "mr-1 d-block")}>{record.date}</span>
            <span className={clsx(styles.fsProDate)}>{record.time}</span>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'sellerName',
    title: 'Seller Name',
    dataIndex: 'sellerName',
    width: '12%'
  },
  {
    key: 'category',
    title: 'Category',
    dataIndex: 'category',
    width: '12%',
    filters: [
      {
        text: 'Mobile',
        value: 'Mobile',
      },
      {
        text: 'Home Decor',
        value: 'Home Decor',
      },
    ],
    onFilter: (value, record) => record.category.indexOf(value) === 0,
  },
  {
    key: 'address',
    title: 'Address',
    dataIndex: 'address',
    width: '20%'
  },
  {
    key: 'description',
    title: 'Description',
    dataIndex: 'description',
    width: '22%',
    render:(_, record)=>(
      <>
        <FSReadMore
        id="read-more"
        name="readMore"
        dataTestId="read-more"
        className="text-color-black"
        sliceStartLength="0"
        sliceEndLength="58"
        sliceClassName="read-more-less"
      >
        {record.description}
      </FSReadMore>
      </>
    )
  },
  {
    key: 'action',
    title: 'Action',
    dataIndex: 'action',
    width: '25%',
    align: 'right',
    render: (_, record) => (
      <div className={clsx(styles.fsTableActionButtons)}>
        <a className={clsx(styles.fsActionButtonItem,styles.fsRejectButton,"mr-2")}>reject</a>
        <a className={clsx(styles.fsActionButtonItem,styles.fsApproveButton)}>Approve</a>
      </div>
    ),
  },
];

export const tableColumnTitleProducts = [
  {
    key: 'id',
    title: 'No.',
    dataIndex: 'id',
  },
  {
    key: 'productName',
    title: 'Product Name',
    // dataIndex: 'productName',
    width: '25%',
    sorter: (a, b) => a.productName.length - b.productName.length,
    render:(_, record)=>(
      <div className={clsx(styles.fsProductData)}>
        <div className={clsx(styles.fsProductImage)}>
          <Avatar src={<Image src={record.avatar} preview={false} />} size={48}/>
        </div>
        <div className={clsx(styles.fsProductText)}>
          <span className={clsx(styles.fsProductName)}>{record.productName}</span>
          <div className="d-flex align-center">
            <span className={clsx(styles.fsProDate, "mr-1 d-block")}>{record.date}</span>
            <span className={clsx(styles.fsProDate)}>{record.time}</span>
          </div>
        </div>
      </div>
    )
  },
  {
    key: 'sellerName',
    title: 'Seller Name',
    dataIndex: 'sellerName',
    width: '15%'
  },
  {
    key: 'category',
    title: 'Category',
    dataIndex: 'category',
    width: '15%',
    filters: [
      {
        text: 'Mobile',
        value: 'Mobile',
      },
      {
        text: 'Home Decor',
        value: 'Home Decor',
      },
    ],
    onFilter: (value, record) => record.category.indexOf(value) === 0,
  },
  {
    key: 'address',
    title: 'Address',
    dataIndex: 'address',
    width: '20%'
  },
  {
    key: 'description',
    title: 'Description',
    dataIndex: 'description',
    width: '35%',
    render:(_,record) => (
      <>
        <FSReadMore
        id="read-more"
        name="readMore"
        dataTestId="read-more"
        className="text-color-black"
        sliceStartLength="0"
        sliceEndLength="58"
        sliceClassName="read-more-less"
      >
        {record.description}
      </FSReadMore>
      </>
    )
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    width: '25%',
    align: 'right',
    render: (_, { status }) => (
      <>
        <div className="fs-table-status-data">
          <span className={`${status === "reject" ? "fs-reject-text fs-status-text-item" : "fs-approve-text fs-status-text-item"}`}>
            {status === "reject" ? "reject" : "approve"}
          </span>
        </div>
      </>
    ),
  },
];

export const tableColumnTitleSellHistory = [
  {
    key: 'id',
    title: 'No.',
    dataIndex: 'id',
    width: '1%',
  },
  {
    key: 'productName',
    title: 'Product Name',
    dataIndex: 'productName',
    width: '23%',
    sorter: (a, b) => a.productName.length - b.productName.length,
    render:(_,record) => (
      <>
        <div className={clsx(styles.fsProductData)}>
          <div className={clsx(styles.fsProductImage)}>
            <Avatar src={<Image src={record.avatar} preview={false} />} size={48}/>
          </div>
          <div className={clsx(styles.fsProductText)}>
            <span className={clsx(styles.fsProductName)}>{record.productName}</span>
            <div className="d-flex align-center">
              <span className={clsx(styles.fsProDate, "mr-1 d-block")}>{record.date}</span>
              <span className={clsx(styles.fsProDate)}>{record.time}</span>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    key: 'sellerName',
    title: 'Seller Name',
    dataIndex: 'sellerName',
    width: '14%'
  },
  {
    key: 'buyerName',
    title: 'Buyer Name',
    dataIndex: 'buyerName',
    width: '15%'
  },
  {
    key: 'pickupAddress',
    title: 'Pickup Address',
    dataIndex: 'pickupAddress',
    width: '100%',
   render:(_,record)=>(
    <>
      <span style={{ width: "100%", display: "block" }}>{record.description}</span>
    </>
   )
  },
  {
    key: 'action',
    title: 'Action',
    dataIndex: 'action',
    width: '25%',
    align: 'right',
    render: (_, record) => (
      <div className={clsx(styles.fsTableActionButtons)}>
        <a className={clsx(styles.fsActionButtonIcon,styles.fsPreviewButton)} style={{color: "#524EB7"}}>{SVGIcon.FSicon_Linear_Eye_Open}</a>
      </div>
    ),
  },
];
