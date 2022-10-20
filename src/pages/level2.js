import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Completed from "../components/completed";
import { UsePersonajeContext } from "../components/context";
import styles from "../components/estilos.module.css";
import StopWatch from "../components/stopWatch";



export default function Level2() {
    const context = UsePersonajeContext();

    const [wheels, setWheels] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
    const [clicked1, setClicked1] = useState(true);
    const [clicked2, setClicked2] = useState(true);
    const [clicked3, setClicked3] = useState(true);
    const [clicked4, setClicked4] = useState(true);
    const [run, setRun] = useState(true);

    const navigate = useNavigate();
    function levelAnimation() {
        setIsCompleted(true);
    }

    useEffect(() => {
        if (wheels === 4) {
            setRun(false);
            setTimeout(()=>{levelAnimation();} , 1000);
            setTimeout(() => navigate("/level3"), 3000);     
        }

    }, [wheels])

  

    function handleClick(string) {
        /* MOVE TO THE CAR */
        var element = document.getElementsByClassName(string)[0];

        switch (string) {
            case styles.lu: element.style.gridColumn = "3 / 4";
                element.style.gridRow = "3 / 4";
                element.style.opacity = "100%";
                setClicked1(false);
                setWheels(wheels + 1);

                break;
            case styles.ld: element.style.gridColumn = "3 / 4";
                element.style.gridRow = "6 / 7";
                element.style.opacity = "100%";
                setClicked2(false);
                setWheels(wheels + 1);
                break;

            case styles.ru: element.style.gridColumn = "6 / 7";
                element.style.gridRow = "3 / 4";
                element.style.opacity = "100%";
                setClicked3(false);
                setWheels(wheels + 1);
                break;
            case styles.rd: element.style.gridColumn = "6 / 7";
                element.style.gridRow = "6 / 7";
                element.style.opacity = "100%";
                setClicked4(false);
                setWheels(wheels + 1);
                break;
        }


    }


    return (

        <div className={styles.all}>
            {!isCompleted ?
                <>
                    <h1>This is Level 2</h1>
                    <div className={`${styles.all} ${styles.grid2}`}>


                        <div onClick={() => { if (clicked1) { handleClick(styles.lu) } }} className={`${styles.rueda} ${styles.lu}`}></div>
                        <div onClick={() => { if (clicked2) { handleClick(styles.ld) } }} className={`${styles.rueda} ${styles.ld}`}></div>

                        <img className={styles.car} src={context.personaje.car}></img>

                        <div onClick={() => { if (clicked3) { handleClick(styles.ru) } }} className={`${styles.rueda} ${styles.ru}`}></div>
                        <div onClick={() => { if (clicked4) { handleClick(styles.rd) } }} className={`${styles.rueda} ${styles.rd}`}></div>

                    </div>

                    <StopWatch running={run} />
            
                    </>
            
            : <Completed />}


                </div>
    )
}
