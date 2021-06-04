import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import LibraryScreen from "./src/screens/LibraryScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import InCategoryScreen from "./src/screens/InCategoryScreen";
import AuthorScreen from "./src/screens/AuthorScreen";
import BookScreen from "./src/screens/BookScreen";

import TabBar from "./src/components/TabBar";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const isLoggedIn = true;

function mainFlow() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Book"
        >
          {isLoggedIn ? (
            <>
              <Stack.Screen name="Lilium" component={mainFlow} />
              <Stack.Screen name="Category" component={InCategoryScreen} />
              <Stack.Screen name="Author" component={AuthorScreen} />
              <Stack.Screen name="Book" component={BookScreen} />
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
    </SafeAreaProvider>
  );
}

export default App;
