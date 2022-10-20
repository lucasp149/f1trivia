import { useNavigate } from "react-router-dom";
import { UsePersonajeContext } from "../components/context";
import styles from "../components/estilos.module.css";


export default function End() {

    const context = UsePersonajeContext();
    const navigate = useNavigate();

    function handleClick(){
        setTimeout(()=>navigate("/"),1000);
    }

    return (
        <div className={styles.all}>
            <h1 className={styles.white}> You Win </h1>
            <iframe className={styles.won} src={`https://giphy.com/embed/${context.personaje.gif}`} width="480" height="270" frameBorder="0" allowFullScreen></iframe>
            <div className={styles.playAgain} onClick={handleClick}><h2>Play Again</h2></div>
        </div>

    )
}