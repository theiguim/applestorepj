import styles from "./styles.module.scss";

const SucessToast = ({toastIsOpen, setToastIsOpen}) =>{

    return (
       <>
        {toastIsOpen ? <div className={styles.toastModal}>Produto adicionado ao carrinho</div> : ""}
       </>
    );
};

export default SucessToast;