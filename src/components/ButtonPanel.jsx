import styles from "./ButtonPanel.module.css";
import Button from "./Button";

export default function ButtonPanel(props){
    return(
        <div className={styles.buttonPanel}>
            <Button variant="red" onClick={props.onMinus}>
                − Минус
            </Button>

            <Button variant="gray" icon="↻" onClick={props.onReset}>
                Сброс
            </Button>
            
            <Button variant="green" onClick={props.onPlus}>
                + Плюс
            </Button>
        </div>
    );
}