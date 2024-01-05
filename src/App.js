import React, { useState } from "react";

export default function MyApp() {
  const [imagenVisible, setImagenVisible] = useState(true);

  const mostrarImagen = () => {
    setImagenVisible(true);
  };

  const ocultarImagen = () => {
    setImagenVisible(false);
  };

  return (
    <div>
      <h1>Progrmacion integrativa Parcial 2</h1>
      <h4>Reyes Andy - Socasi Moises - Suquillo Fernando</h4>

      <ImageComponent isVisible={imagenVisible} />
      <button class="mostrar-boton" onClick={mostrarImagen}>
        Mostrar Imagen
      </button>
      <button class="ocultar-boton" onClick={ocultarImagen}>
        Ocultar Imagen
      </button>
    </div>
  );
}

function MyButton1() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>SUMA {count} </button>;
}

function MyButton2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count - 1);
  }

  return <button onClick={handleClick}>RESTA {count} </button>;
}

function ImageComponent({ isVisible }) {
  return (
    <div class="image-container">
      {isVisible && (
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg" // Reemplaza con la URL de tu imagen
          alt="Paisaje"
          style={{ maxWidth: "100%", maxHeight: "400px" }}
        />
      )}
    </div>
  );
}
