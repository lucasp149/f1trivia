
import { useRef, useEffect, useState } from "react";
import styles from "../components/estilos.module.css";
import { UsePersonajeContext } from "../components/context";
import { useNavigate } from "react-router-dom";
import Completed from "../components/completed";




export default function Level1() {

    const context = UsePersonajeContext();
    const [movement, setMovement] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    let widthTop;
    const ref = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        ref.current.focus();
    }, []);


    if (window.innerWidth < 600) {
        widthTop = 5;
    }
    else {
        widthTop = 9;
    }

    function levelAnimation() {
        setIsCompleted(true);
    }

    function moveCharacter(mov) {

        const access = document.documentElement.style;
        const accessValue = getComputedStyle(document.documentElement);
        let numberCol = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--col'));
        let numberRow = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--row'));


        switch (mov) {
            case "ArrowUp":
                if (numberRow > 1) {
                    access.setProperty("--row", (numberRow - 1))
                    break;
                }
                else { break; }
            case "ArrowDown": if (numberRow < 8) {
                access.setProperty("--row", (numberRow + 1))
                break;
            }
            else { break; }
            case "ArrowLeft": if (numberCol > 1) {
                access.setProperty("--col", (numberCol - 1))
                break;
            }
            else { break; }
            case "ArrowRight": if (numberCol < widthTop - 1) {
                access.setProperty("--col", (numberCol + 1))
                break;
            }
            else { break; }
        }

        numberCol = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--col'));
        numberRow = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--row'));

        if (numberCol === priceCol && numberRow === priceRow) {
            const per = styles.personaje;
            console.log(per);
            document.getElementsByClassName(per)[0].style.borderColor = "green";
            setTimeout(() => { levelAnimation(); }, 1000);
            setTimeout(() => navigate("/level2"), 3000);
        }
    }




    const priceCol = Math.floor(Math.random() * (widthTop - 3) + 2);
    const priceRow = Math.floor(Math.random() * (widthTop - 3) + 2);
    console.log("priceCol: " + priceCol);
    console.log("priceRow" + priceRow);



    function handleKeyDown(e) {
        e.preventDefault();
        moveCharacter(e.key);
    }

    function handleClick(valor) {
        moveCharacter(valor);
    }


    return (
        <div className={styles.all} ref={ref} onKeyDown={handleKeyDown} tabIndex="-1">

            {!isCompleted ?
                <>
                    <h1>This is Level 1</h1>

                    <div className={`${styles.grid} ${styles.all}`}>

                        <div className={styles.personaje} style={{backgroundImage: `url(${context.personaje.foto})`}}></div>

                        <div className={styles.price} style={{ gridColumn: priceCol, gridRow: priceRow, backgroundImage: `url(${context.personaje.helmet})`}}></div>




                    </div>
                    <div className={styles.arrows}>
                        <div className={styles.flecha} onClick={() => handleClick("ArrowUp")}>⬆</div>
                        <div className={styles.flecha} onClick={() => handleClick("ArrowDown")}>⬇</div>
                        <div className={styles.flecha} onClick={() => handleClick("ArrowLeft")}>⬅</div>
                        <div className={styles.flecha} onClick={() => handleClick("ArrowRight")}>➡</div>
                    </div>

                </>

                : <Completed />}


        </div>
    )
}