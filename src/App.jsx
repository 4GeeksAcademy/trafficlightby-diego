import { useState } from "react";
import "./App.css";

function App() {
  let [selected, setSelected] = useState(null);

  // Función para cambiar la luz de manera cíclica
  const handleNextLight = () => {
    switch (selected) {
      case "red":
        setSelected("orange");
        break;
      case "orange":
        setSelected("green");
        break;
      case "green":
        setSelected("red");
        break;
      default:
        setSelected("red");
    }
  };

  // Función para cambiar todas las luces a purpura
  const turnAllPurple = () => {
    setSelected("purple");
  };

  // Función para seleccionar una luz
  const handleSelected = (color) => {
    setSelected(color);
  };

  return (
    <>
      <div className="traffic-light">
        <div
          className={
            "circle circle-red " +
            (selected === "red" ? "turn-on" : selected === "purple" ? "purple-on" : "")
          }
          onClick={() => handleSelected("red")}
        ></div>
        <div
          className={
            "circle circle-orange " +
            (selected === "orange" ? "turn-on" : selected === "purple" ? "purple-on" : "")
          }
          onClick={() => handleSelected("orange")}
        ></div>
        <div
          className={
            "circle circle-green " +
            (selected === "green" ? "turn-on" : selected === "purple" ? "purple-on" : "")
          }
          onClick={() => handleSelected("green")}
        ></div>
      </div>

      {/* Contenedor de botones */}
      <div className="button-container">
        <button className="custom-button" onClick={handleNextLight}>
          Encender y cambiar luz
        </button>
        <button className="custom-button-2" onClick={turnAllPurple}>
          Poner todas en purpura
        </button>
        <button className="custom-button-3" onClick={() => setSelected(null)}>
          Apagar todo
        </button>
      </div>
    </>
  );
}

export default App;