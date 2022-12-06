import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ContactDetail from "../screens/ContactDetail";

const screens = {
  Home: {
    screen: Home,
  },
  ContactDetail: {
    screen: ContactDetail,
  },
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
