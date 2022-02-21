import Header from "./component/Header/Header";
import React from "react";
import SearchBar from "./component/SearchBar/SearchBar";
import FoodSelection from "./component/FoodSelection/FoodSelection";
import Description1 from "./component/Description/Description1";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SearchBar></SearchBar>
      <FoodSelection></FoodSelection>
      <Description1></Description1>
      <Footer></Footer>
    </div>
  );
}

export default App;
