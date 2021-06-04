import IndexScreen from "./src/screens/IndexScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  { initialRouteName: "Index", defaultNavigationOptions: { title: "Blogs" } }
);

export default createAppContainer(navigator);
