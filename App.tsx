import * as React from "react";
import MainContainer from "./src/js/navigation/MainContainer";
import * as NavigationBar from 'expo-navigation-bar';

function App(){
NavigationBar.setVisibilityAsync("hidden");

  return (
    <MainContainer/>
  );
}

export default App;