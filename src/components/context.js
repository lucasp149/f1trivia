import { useState, createContext, useContext } from "react";


const PersonajeContext = createContext();

export default function Context({ children }) {
  const [personaje, setPersonaje] = useState();

  const data = [{
    name: "Max Verstappen",
    foto: "/max.avif",
    car: "/maxC.png",
    helmet: "/maxH.jpg",
    id: "max",
    gif: "fVA9swBXrITliGnKhK"
  }, {
    name: "Charles Leclerc",
    foto: "/charles.jpg",
    car: "/leclercC.png",
    helmet: "/leclercH.webp",
    id: "charles",
    gif: "GG431sHab0nNAxUWtb"
  },
  {
    name: "Lewis Hamilton",
    foto: "/lewis.jpg",
    car: "/hamiltonC.png",
    helmet: "/lewisH.jpg",
    id: "lewis",
    gif: "W1qHCSnVxt5wisTekN"
  },
  {
    name: "Fernando Alonso",
    foto: "/alonso.jpg",
    car: "/alonsoC.png",
    helmet: "/alonsoH.jpg",
    id: "alonso",
    gif: "8F94ADlcSJIvw86evZ"
  }
  ]



  function updateItem(selected) {
    switch (selected){
      case "max": setPersonaje(data[0]);
                  break;
      case "leclerc": setPersonaje(data[1]);
                      break;
      case "hamilton": setPersonaje(data[2]);
                      break;  
      case "alonso": setPersonaje(data[3]);
                      break;            
    }
  }

  return (
    <PersonajeContext.Provider value={{ personaje, updateItem }}>
      {children}
    </PersonajeContext.Provider>
  );

}

export function UsePersonajeContext() {
  return useContext(PersonajeContext);
}


