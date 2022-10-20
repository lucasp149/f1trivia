import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UsePersonajeContext } from "../components/context";
import styles from "../components/estilos.module.css";

export default function Level3() {

    const [isCorrect, setIsCorrect] = useState(false);
    const context = UsePersonajeContext();
    const navigate = useNavigate();

    function handleClick(e) {
        if (e.target.id === context.personaje.id) { 
            setIsCorrect(true);
            setTimeout( () => navigate("/end"),2000); 
        
        
        
        }
        else { console.log("equivocado!") }
    }

    return (
        <div className={styles.all}>
            <h1>This is Level 3</h1>
            <h2>What nationality is {context.personaje.name}?</h2>
            <div className={`${styles.all} ${styles.plantilla}`}>

                <div style={{ backgroundImage: `url(${context.personaje.foto})` }} className={styles.carta}></div>




                <div className={styles.options}>

                    {!isCorrect ?
                        <>
                            <div id="charles" onClick={handleClick} className={`${styles.card} ${styles.flag}`} style={{ backgroundImage: "url(./charlesF.jpg)" }}></div>
                            <div id="max" onClick={handleClick} className={`${styles.card} ${styles.flag}`} style={{ backgroundImage: "url(./maxF.jpg)" }}></div>
                            <div id="lewis" onClick={handleClick} className={`${styles.card} ${styles.flag}`} style={{ backgroundImage: "url(./lewisF.jpg)" }}></div>
                            <div id="alonso" onClick={handleClick} className={`${styles.card} ${styles.flag}`} style={{ backgroundImage: "url(./alonsoF.jpg)" }}></div>
                        </>

                        : <div className={styles.winBox}> <h1 className={styles.win}> PERFECT!</h1> </div>}



                </div>



            </div>

        </div>

    )
}
