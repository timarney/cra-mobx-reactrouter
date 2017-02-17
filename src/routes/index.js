import { Home, About } from "../views";

const routes = [
  {
    title: "Home",
    path: "/",
    component: Home,
    exact: true
  },
  {
    title: "About",
    path: "/about",
    component: About
  }
];

export default routes;
