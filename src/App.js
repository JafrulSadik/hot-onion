import Header from "./component/Header/Header";
import React from "react";
import SearchBar from "./component/SearchBar/SearchBar";
import FoodSelection from "./component/FoodSelection/FoodSelection";
import Description1 from "./component/Description/Description1";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
      <FoodSelection></FoodSelection>
      <Description1></Description1>
    </div>
  );
}

export default App;
