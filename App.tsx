import * as React from "react";
import MainContainer from "./src/js/navigation/MainContainer";
import * as NavigationBar from "expo-navigation-bar";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

function App() {
  NavigationBar.setVisibilityAsync("hidden");

  return (
    <TailwindProvider utilities={utilities}>
      <MainContainer />
    </TailwindProvider>
  );
}

export default App;
