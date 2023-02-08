import ItemListContainer from "./componets/ItemListContainer";
import NavBar from "./componets/NavBar"

function App() {
  return (
    <div>
      <NavBar />

      <ItemListContainer mensaje={"Bienvenido"}/>
    </div>
    
  );
}

export default App;
