import React from "react";
import { SafeAreaView } from "react-native";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import LibraryScreen from "./src/screens/LibraryScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";

import theme from "./src/utils/theme";
import TabBar from "./src/components/tab-bar";
import Box from "./src/components/box";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const isLoggedIn = true;

function mainFlow() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} as={SafeAreaView}>
        <NavigationContainer>
          <Stack.Navigator
          // screenOptions={{
          //   headerShown: false,
          // }}
          >
            {isLoggedIn ? (
              <>
                <Stack.Screen name="Lilium" component={mainFlow} />
                {/* <Stack.Screen name="sideFlow" component={SettingsScreen} /> */}
              </>
            ) : (
              <>
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
