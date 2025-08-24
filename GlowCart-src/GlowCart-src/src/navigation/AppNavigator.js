import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductDetails from "../screens/ProductDetails";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name=\"Onboarding\" component={OnboardingScreen} />
        <Stack.Screen name=\"Login\" component={LoginScreen} />
        <Stack.Screen name=\"Register\" component={RegisterScreen} />
        <Stack.Screen name=\"Home\" component={HomeScreen} />
        <Stack.Screen name=\"Details\" component={ProductDetails} />
        <Stack.Screen name=\"Profile\" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
