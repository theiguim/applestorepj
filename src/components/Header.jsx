import Link from "next/link";
import styles from "../styles/globalStyles.module.scss";


const Header = () => {

    return (

        <nav className={styles.header}>
            <Link href="/">
                Inicio
            </Link>

            <div>
                <Link href="/products">
                    Produtos
                </Link>
                <Link href="/cart">
                    Carrinho
                </Link>
            </div>
        </nav>
    )
};

export default Header;