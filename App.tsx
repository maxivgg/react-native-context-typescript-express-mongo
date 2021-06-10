import { StatusBar } from "expo-status-bar";
import React from "react";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import GlobalState from "./context/GlobalState";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <GlobalState>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </GlobalState>
    );
  }
}
