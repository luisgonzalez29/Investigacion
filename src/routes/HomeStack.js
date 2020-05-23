import { createStackNavigator } from "react-navigation-stack";
import Home from "../container/Home";
import Profile from "../container/Profile";
import Forum from "../container/Forum";

const HomeStack = createStackNavigator(
  {
    home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    profile: {
      screen: Profile,
      navigationOptions: {
        header: null,
      },
    },
    forum: {
      screen: Forum,
      navigationOptions: {
        header: null,
      },
    },
  },
  { initialRouteName: "home" }
);
HomeStack.navigationOptions = {
  header: null,
};
export default HomeStack;
