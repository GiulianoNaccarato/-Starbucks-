import { BrowserRouter, routes, route } from "react-router-dom";
import ItemListContainer from "./componets/ItemListContainer";
import NavBar from "./componets/NavBar";
import ItemDetailContainer from "./componets/ItemDetailContainer"
import {browserRouter, Routes, Route} from "react-router-dom"
import CartContextProvider from "./componets/context/CartContext";
import Error404 from "./components/Error404"
import CartContextProvider from "./componets/context/CartContext";



function App() {
  return (
    <CartContextProvider>
      <browserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart/"} element={<Cart />} />
          <Route path={"*"} element={<Eror404 />} />
        </Routes>
        <ItemListContainer />
      </div>
      </browserRouter>
    </CartContextProvider>
    
  );
}

export default App;
