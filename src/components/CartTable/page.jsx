"use client"

import styles from "./styles.module.scss";
import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { useEffect, useState } from "react";


const CartTableRow = (props) => {

    const { addProduct, removeProduct } = useCart();

    return (
        
        <tr className={styles.line}>
            <td>
                <div className={styles.headTab}>
                    <Image
                        src={props.entry.product.imageUrl}
                        alt={props.entry.product.name}
                        height={50}
                        width={55}
                    />

                    {props.entry.product.name}
                </div>
            </td>

            <td>R$ {props.entry.product.price}</td>
            <td>{props.entry.quantity}</td>
            <td>R$ {(props.entry.product.price * props.entry.quantity)}</td>
            <td className={styles.tdBtn}>
                <button
                    className={styles.btnSum}
                    onClick={() => addProduct(props.entry.product)}
                >+</button>
                {" "}
                <button
                    className={styles.btnSub}
                    onClick={() => removeProduct(props.entry.product.id)}
                >-</button>
                
            </td> 
        </tr>
    );
};

const CartTable = () => {

    const [cartEntries, setCartEntries] = useState([]);
    const { cart } = useCart();

    useEffect(() => {
        const entriesList = cart.reduce((list, product) => {
            const entryIndex = list.findIndex(entry => entry.product.id === product.id);

            if (entryIndex === -1) {
                return [...list, { product, quantity: 1 }];
            };

            list[entryIndex].quantity++
            return list
        }, []);

        entriesList.sort((a, b) => a.product.id - b.product.id);
        setCartEntries(entriesList);
    }, [cart]);

    return (
        <table 
        className={styles.table}
        style={{ minWidth: "32rem" }}>

            <thead className={styles.thead}>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Qtd.</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cartEntries.map(entry =>
                    <CartTableRow
                        key={entry.product.id}
                        entry={entry} 
                       
                        />)}
                       
            </tbody>
            
        </table>
    )

}

export default CartTable;