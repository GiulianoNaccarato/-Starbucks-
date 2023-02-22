import ItemListContainer from "./componets/ItemListContainer";
import NavBar from "./componets/NavBar";
import ItemDetailContainer from "./componets/ItemDetailContainer"
import {browserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <browserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      </Routes>
      <ItemListContainer />
    </div>
    </browserRouter>
    
  );
}

export default App;
