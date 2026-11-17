type buttonType = "primary" | "secondary" | "link" | "inativo";
import styles from "./ButtonComponent.module.css"
export function ButtonComponent({ type, action, text }: { type: buttonType; action: () => void, text: React.ReactNode | string }) {

    return (
        <div onClick={action} className={`${styles[type]} ${styles.button}`}>
            {text}
        </div>
    )
}