import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import Add from "./pages/Add";
import Main from "./pages/Main";
import PaidList from "./pages/PaidList";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Add,
    Main,
    PaidList
  })
);

export default Routes;
