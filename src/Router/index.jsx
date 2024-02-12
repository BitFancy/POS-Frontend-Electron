import Dashboard from "../MainPage/Dashboard";
import Activities from "../MainPage/Activities";
import Product from "../MainPage/Product/index";
import Sales from "../MainPage/sales";
import Profile from "../MainPage/Profile/index";
import People from "../MainPage/People/index";
import Elements from "../MainPage/elements";
import Icons from "../MainPage/icons";
import Forms from "../MainPage/forms";
import Tables from "../MainPage/tables";
import Users from "../MainPage/users";
import Settings from "../MainPage/settings";
import BlankPage from "../MainPage/BlankPage";
import HomeThree from "../MainPage/Home/home3";
import HomeFoure from "../MainPage/Home/home4";
import HomeTwo from "../MainPage/Home/home2";
import IndexOne from "../MainPage/Home/home1";

export default [
  {
    path: "dashboard",
    component: Dashboard,
  },
  {
    path: "activities",
    component: Activities,
  },
  {
    path: "product",
    component: Product,
  },
  {
    path: "profile",
    component: Profile,
  },
  {
    path: "people",
    component: People,
  },
  {
    path: "blankpage",
    component: BlankPage,
  },
  {
    path: "elements",
    component: Elements,
  },
  {
    path: "icons",
    component: Icons,
  },
  {
    path: "forms",
    component: Forms,
  },
  {
    path: "table",
    component: Tables,
  },
  {
    path: "users",
    component: Users,
  },
  {
    path: "settings",
    component: Settings,
  },
  {
    path: "Sales",
    component: Sales,
  },
  {
    path: "index-three",
    component: HomeThree,
  },
  {
    path: "index-four",
    component: HomeFoure,
  },
  {
    path: "index-two",
    component: HomeTwo,
  },
  {
    path: "index-one",
    component: IndexOne,
  },
];
