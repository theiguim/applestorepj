"use client"
import styles from "./styles.module.scss";
import { useCart } from "@/hooks/useCart";

const CartTotal = () =>{

    const {cart} = useCart();

    return(
       <div className={styles.totalWrapper}>
         <div className={styles.container}>
            <strong>Total: </strong>
            <span>R$ {cart.reduce((total, product)=> total + product.price, 0)}</span>
        </div>
       </div>
    );
};

export default CartTotal;