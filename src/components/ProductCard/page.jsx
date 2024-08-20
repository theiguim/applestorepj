"use client"

import { useCart } from "@/hooks/useCart";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SucessToast from "../SucessToast/page";


const ProductCard = ({ product }) => {

    const { id, name, imageUrl, price } = product;
    const {addProduct} = useCart();
    const [toastIsOpen, setToastIsOpen] = useState(false);

    return (
        <div className={styles.card}>
            <Link href={`/products/${id}`}>
                <Image
                    className={styles.cardImg}
                    src={imageUrl}
                    alt={name}
                    width={300}
                    height={200}
                />
            </Link>

            <div className={styles.cardBody}>

                <Link
                    href={`/products/${id}`}
                    className={styles.cardTitle}
                >
                    {name}
                </Link>

                <p className={styles.cardPrice}
                >
                    R${price}
                </p>

                <button
                    className={styles.btn}

                    onClick={() => {
                        addProduct(product);
                        setToastIsOpen(true);
                        setTimeout(()=> setToastIsOpen(false), 1000 *3)
                    }}
                >
                    Adicionar ao Carrinho
                </button>
                <SucessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen}/>
            </div>
        </div >
    )


}
export default ProductCard;