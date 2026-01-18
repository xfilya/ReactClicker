import styles from "./Button.module.css";

const VARIANT_CLASS = {
    red: styles.red,
    gray: styles.gray,
    green: styles.green,
};

export default function Button(props){
    const variantClass = VARIANT_CLASS[props.variant] ?? styles.gray;

    return(
        <button type={props.type} className={`${styles.button} ${variantClass}`} onClick={props.onClick}>
            {props.icon ? <span>{props.icon}</span> : null}
            <span>{props.children}</span>
        </button>
    );
}
