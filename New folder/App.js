import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const isLoggedIn = false;

const mainFlow = () => {
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Home" component={HomeScreen} />
  </Tab.Navigator>;
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Navigator>
              <Stack.Screen name="mainFlow" component={mainFlow} />
              {/* <Stack.Screen name="sideFlow" component={SettingsScreen} /> */}
            </Stack.Navigator>
          </>
        ) : (
          <>
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
