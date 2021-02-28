import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppScreens from "@screens/app";
import AuthScreens from "@screens/auth";
import styles from "./styles";
import localize from "@localize";

const AppStack = createStackNavigator();
const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={AppScreens.Home}
        options={{
          title: localize.t("home.title"),
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitleStyle,
          headerTitleAlign: "center",
        }}
      />
      <AppStack.Screen
        name="Detail"
        component={AppScreens.Detail}
        options={{
          title: localize.t("detail.title"),
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitleStyle,
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        }}
      />
    </AppStack.Navigator>
  );
};

const RootNavigation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLogged = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    isLogged();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {loading ? <AuthScreens.Splash /> : <AppNavigator />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
