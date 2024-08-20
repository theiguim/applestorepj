import CartTable from "@/components/CartTable/page";
import CartTotal from "@/components/CartTotal/page";
import styles from "../../styles/cartStyle.module.scss";

export const metadata = {
    title: "Carrinho",
    description: "Meu carrinho de compras",
};

const Cart = () => {

    return (
        <div className={styles.container}>
            <h1>Meu Carrinho</h1>
            <CartTable />
            <CartTotal />
        </div>
    );
};

export default Cart;