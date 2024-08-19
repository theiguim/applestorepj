"use client"

import { useCart } from "@/hooks/useCart";
import Image from "next/image";
import { useEffect, useState } from "react";


const CartTableRow = (props) => {

    const { addProduct, removeProduct } = useCart();

    return (
        <tr>
            <td>
                <div>
                    <Image
                        src={props.entry.product.imageUrl}
                        alt={props.entry.product.name}
                        height={50}
                        width={50}
                    />

                    {props.entry.product.name}
                </div>
            </td>

            <td>R$ {props.entry.product.price}</td>
            <td>{props.entry.quantity}</td>
            <td>$ {(props.entry.product.price * props.entry.quantity)}</td>
            <td>
                <button
                    onClick={() => addProduct(props.entry.product)}
                >+</button>
                {" "}
                <button
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
        <table style={{ minWidth: "32rem" }}>

            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Qtd.</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {cartEntries.map(entry => <CartTableRow key={entry.product.id} entry={entry} />)}
            </tbody>
        </table>
    )

}

export default CartTable;