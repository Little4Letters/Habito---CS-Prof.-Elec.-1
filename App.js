//imported NavigationContainer and createBottomTabNavigator from react-navigation
// to create a bottom tab navigator for the app.

// (An gin build ini sa package.json file sa dependencies nga may version nga 6.1.6...
// para sa @react-navigation/native ug 6.5.7 para sa @react-navigation/bottom-tabs)

// The app has two screens: HomeScreen and AddHabitScrn, which are displayed as tabs in the navigator. The header is hidden for both screens using the screenOptions prop.
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen.js";
import AddHabitScrn from "./src/screens/AddHabitScrn.js";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={AddHabitScrn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
