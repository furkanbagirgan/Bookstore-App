import React from "react";
import Router from "./Router";
import FavoriteProvider from './contexts/FavoriteProvider';

function App(){
  return (
    <FavoriteProvider>
      <Router />
    </FavoriteProvider>
  );
};

export default App;
