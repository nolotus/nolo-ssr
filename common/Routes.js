import Home from "../pages/Home";
import Create from "../pages/Create";
import Life from "../pages/Create";
import Find from "../pages/Create";
import Self from "../pages/Create";
const Routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    path: "/create",
    component: Create,
  },
  {
    path: "/life",
    component: Life,
  },
  {
    path: "/find",
    component: Find,
  },
  {
    path: "/self",
    component: Self,
  },
];

export default Routes;