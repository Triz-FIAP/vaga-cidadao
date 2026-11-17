type buttonType = "primary" | "secondary" | "link";
import styles from "@/pages/components/Button/ButtonComponent.module.css";
export function ButtonComponent({ type, action, text }: { type: buttonType; action: () => void, text: React.ReactNode | string }) {

    return (
        <div onClick={action} className={`${styles[type]} ${styles.button}`}>
            {text}
        </div>
    )
}