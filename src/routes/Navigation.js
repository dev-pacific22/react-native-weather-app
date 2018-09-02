/**
 * Complete routing of the application.
 */
import { createDrawerNavigator } from "react-navigation";
import HomeScreen from "../containers/HomeScreen";
import LocationScreen from "../containers/LocationScreen";

export const NavigationStack = createDrawerNavigator(
  {
    Location : LocationScreen, 
    Home: HomeScreen
  },
  {
    initialRouteName: "Location",
    headerMode: "none"
  }
);
