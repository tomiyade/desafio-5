import NavBar from "./components/NavBar";
import React from 'react'
import "./app/style.css"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount";


const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <ItemCount />
    </div>
  )
}


export default App;
