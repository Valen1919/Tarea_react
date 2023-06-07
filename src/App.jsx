import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button1 from "./components/handleClick";
import Toolbar from "./components/Toolbar";
import Signup from "./components/signup";
import Counter from "./components/Counter";
import ListaTarea from "./components/ListaTarea";
import DiceGame from "./components/DiceGame";
import Gallery from "./components/Gallery";


function App() {
  return (
    <>
      <Button1 />
      <br />
      <Toolbar
        onPlayMovie={() => alert("la pelicula se va a reproducir")}
        onUploadImage={() => alert("la imagen se va a cargar!")}
      />
      <br />
      <Signup/>
      <Counter/>
      <ListaTarea/>
      <DiceGame/>
      <Gallery/>

    </>
  );
}

export default App;
