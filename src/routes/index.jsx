import { lazy } from "react";

const Styles = lazy(() => import("../containers/StyleGuide"));
const Login = lazy(() => import("../containers/FSLogin"));
const Dashboard = lazy(() => import("../containers/FSDashboard"));
const Users = lazy(() => import("../containers/FSUsers"));
const Categories = lazy(() => import("../containers/FSCategories"));
const Products = lazy(() => import("../containers/FSProducts"));
const SellHistory = lazy(() => import("../containers/FSSellHistory"));
const Settings = lazy(() => import("../containers/FSSettings"));
const AddFAQ = lazy(() => import("../containers/FSSettings/AddFAQ"));


export const routeList = [
  {
    id: "DEV_001", path: "/style-guide",
    component: <Styles />,
  },
  {
    id: "AUTH_001", path: "/",
    component: <Login />,
  },
  {
    id: "GEN_001", path: "/dashboard",
    component: <Dashboard />,
  },
  {
    id: "GEN_002", path: "/users",
    component: <Users />,
  },
  {
    id: "GEN_003", path: "/categories",
    component: <Categories />,
  },
  {
    id: "GEN_004", path: "/products",
    component: <Products />,
  },
  {
    id: "GEN_005", path: "/sell-history",
    component: <SellHistory />,
  },
  {
    id: "GEN_006", path: "/settings",
    component: <Settings />,
  },
  {
    id: "GEN_007", path: "/settings/add-faq",
    component: <AddFAQ />,
  },
];