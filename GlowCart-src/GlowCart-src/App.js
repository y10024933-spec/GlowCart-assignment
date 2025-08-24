import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { StoreProvider } from "./src/context/Store";

export default function App() {
  return (
    <StoreProvider>
      <AppNavigator />
    </StoreProvider>
  );
}
