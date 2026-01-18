import styles from "./Label.module.css";

export default function Label(props){
    return(
        <div className={styles.label}>{props.value}</div>
    );
}

