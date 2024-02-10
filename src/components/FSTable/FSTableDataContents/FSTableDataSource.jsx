import { Avatar, Image } from "antd";
import { FSReadMore } from "../../FSReadMore";
import styles from "./../FSTable.module.css";
import clsx from "clsx";
export const tableColumnDataDashboard = [
  {
    key: '01',
    id: "1",
    avatar:"https://i.pravatar.cc/150?img=3",
    name: "iPhone 13 Pro Max",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Robert Fox",
    category: "Mobile",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description:"15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single"
  },
  {
    key: '02',
    id: "2",
    avatar:"https://i.pravatar.cc/150?img=4",
    name: "iPhone 13 Pro Max",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Cody Fisher",
    category: "Home Decor",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description:"15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single"
  },
  {
    key: '03',
    id: "3",
    avatar:"https://i.pravatar.cc/150?img=5",
    name: "iPhone 13 Pro Max",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Cody Fisher",
    category: "Home Decor",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description:"15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single"
  },
  {
    key: '04',
    id: "4",
    avatar:"https://i.pravatar.cc/150?img=6",
    name: "iPhone 13 Pro Max",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Cody Fisher",
    category: "Home Decor",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description:"15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single"
  },
  {
    key: '05',
    id: "5",
    avatar:"https://i.pravatar.cc/150?img=7",
    name: "iPhone 13 Pro Max",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Cody Fisher",
    category: "Home Decor",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description:"15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single"
  },
  {
    key: '06',
    id: "6",
    avatar:"https://i.pravatar.cc/150?img=8",
    name: "iPhone 13 Pro Max",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Cody Fisher",
    category: "Home Decor",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description:"15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single"
  },
];

export const tableColumnDataUsers = [
  {
    key: '01',
    id: "1",
    avatar: "https://i.pravatar.cc/150?img=26",
    name: "Wade Warren",
    phoneNumber: "+1 (252) 555-0126",
    email: "bill.sanders@example.com",
    registerDate: "23 Aug, 2023 ; 4:25pm",
    location: "New York, USA",
  },
  {
    key: '02',
    id: "2",
    avatar: "https://i.pravatar.cc/150?img=27",
    name: "Savannah Nguyen",
    phoneNumber: "+1 (704) 555-0127",
    email: "debra.holt@example.com",
    registerDate: "23 Aug, 2023 ; 4:25pm",
    location: "New York, USA",
  },
  {
    key: '03',
    id: "3",
    avatar: "https://i.pravatar.cc/150?img=28",
    name: "Kathryn Murphy",
    phoneNumber: "+1 (239) 555-0108",
    email: "jackson.graham@example.com",
    registerDate: "23 Aug, 2023 ; 4:25pm",
    location: "New York, USA",
  },
  {
    key: '04',
    id: "4",
    avatar: "https://i.pravatar.cc/150?img=29",
    name: "Dianne Russell",
    phoneNumber: "+1 (201) 555-0124",
    email: "jessica.hanson@example.com",
    registerDate: "23 Aug, 2023 ; 4:25pm",
    location: "New York, USA",
  },
  {
    key: '05',
    id: "5",
    avatar: "https://i.pravatar.cc/150?img=26",
    name: "Jerome Bell",
    phoneNumber: "+1 (316) 555-0116",
    email: "curtis.weaver@example.com",
    registerDate: "23 Aug, 2023 ; 4:25pm",
    location: "New York, USA",
  },
];

export const tableColumnDataCategories = [
  {
    key: '01',
    id: "1",
    avatar: "https://i.pravatar.cc/150?img=26",
    name: "Furniture"
  },
  {
    key: '02',
    id: "2",
    avatar: "https://i.pravatar.cc/150?img=27",
    name: "Mobiles"
  },
  {
    key: '03',
    id: "3",
    avatar: "https://i.pravatar.cc/150?img=28",
    name: "Electronics"
  },
  {
    key: '04',
    id: "4",
    avatar: "https://i.pravatar.cc/150?img=29",
    name: "Clothes"
  },
  {
    key: '05',
    id: "5",
    avatar: "https://i.pravatar.cc/150?img=30",
    name: "Plants"
  },
];

export const tableColumnDataProducts = [
  {
    key: '01',
    id: "1",
    avatar: "https://i.pravatar.cc/150?img=3",
    productName: "iPhone 13 Pro Max",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Robert Fox",
    category: "Mobile",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description: "15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single",
    status: "approve"
  },
  {
    key: '02',
    id: "2",
    avatar: "https://i.pravatar.cc/150?img=4",
    productName: "Dior Air Jorden",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Cody Fisher",
    category: "Home Decor",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description: "15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single",
    status: "reject"

  },
  {
    key: '03',
    id: "3",
    avatar: "https://i.pravatar.cc/150?img=5",
    productName: "Microphone with clear au..",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Theresa Webb",
    category: "Electronics",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description: "15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single",
    status: "approve"
  },
  {
    key: '04',
    id: "4",
    avatar: "https://i.pravatar.cc/150?img=6",
    productName: "Premium Pink Chair",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Savannah Nguyen",
    category: "Furniture",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description: "15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single",
    status: "approve"
  },
  {
    key: '05',
    id: "5",
    avatar: "https://i.pravatar.cc/150?img=7",
    productName: "iPhone 13 Pro Max",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Cody Fisher",
    category: "Home Decor",
    address: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
    description: "15 months old , scratch less mint condition , not a single 15 months old , scratch less mint condition , not a single",
    status: "reject"
  },
];

export const tableColumnDataSellHistory = [
  {
    key: '01',
    id: "1",
    avatar: "https://i.pravatar.cc/150?img=4",
    productName: "iPhone 13 Pro Max",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Robert Fox",
    buyerName: "Ronald Richards",
    description: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
  },
  {
    key: '02',
    id: "2",
    avatar: "https://i.pravatar.cc/150?img=5",
    productName: "Dior Air Jorden",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Cody Fisher",
    buyerName: "Savannah Nguyen",
    description: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
  },
  {
    key: '03',
    id: "3",
    avatar: "https://i.pravatar.cc/150?img=6",
    productName: "Microphone with clear au..",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Theresa Webb",
    buyerName: "Robert Fox",
    description: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
  },
  {
    key: '04',
    id: "4",
    avatar: "https://i.pravatar.cc/150?img=7",
    productName: "Premium Pink Chair",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Savannah Nguyen",
    buyerName: "Cody Fisher",
    description: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
  },
  {
    key: '05',
    id: "5",
    avatar: "https://i.pravatar.cc/150?img=8",
    productName: "iPhone 13 Pro Max",
    date: "23 Aug, 2023 ;",
    time: "4:25pm",
    sellerName: "Ronald Richards",
    buyerName: "Theresa Webb",
    description: "4201 San Mateo Blvd NE, Albuquerque, New York, 87110",
  },
];