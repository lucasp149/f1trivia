import { useContext, useState } from "react"
import { UsePersonajeContext } from "../components/context";
import styles from "../components/estilos.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";



export default function Inicio() {

    const context = UsePersonajeContext();
    const [name, setName] = useState("");
    
    const navigate = useNavigate();      

    function handleClick(e){
        e.preventDefault();
        context.updateItem(e.target.id);
        navigate("/level1");
    
}

    function handleEnter(nombre){
        setName(nombre);
    }

   

    return (
        <div className={styles.all}>
            <h1>WELCOME</h1>
            <h2 style={{minHeight: "40px"}}>{name}</h2>
            <div className={styles.box}>
                <div className={styles.carta}  onMouseEnter={()=>handleEnter("Max Verstappen")} onMouseLeave={()=>handleEnter("")} id="max" onClick={handleClick} style={{backgroundImage: "url(./max.avif)"}}></div>
                <div className={styles.carta} onMouseEnter={()=>handleEnter("Charles Leclerc")} onMouseLeave={()=>handleEnter("")} id="leclerc" onClick={handleClick} style={{backgroundImage: "url(./charles.jpg)"}}></div>
                <div className={styles.carta} onMouseEnter={()=>handleEnter("Lewis Hamilton")} onMouseLeave={()=>handleEnter("")} id="hamilton" onClick={handleClick} style={{backgroundImage: "url(./lewis.jpg)"}}></div>
                <div className={styles.carta} onMouseEnter={()=>handleEnter("Fernando Alonso")} onMouseLeave={()=>handleEnter("")} id="alonso" onClick={handleClick} style={{backgroundImage: "url(./alonso.jpg)"}}></div>
            </div>
        </div>
    )
}