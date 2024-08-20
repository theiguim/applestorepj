"use client"

import Image from "next/image";
import styles from "./styles.module.scss";
import SucessToast from "../SucessToast/page";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";



const ProductDetailer = ({ product }) => {

    const {name, description, price, imageUrl } = product
    const {addProduct} = useCart();
    const [toastIsOpen, setToastIsOpen] = useState(false);

    return (

        <div className={styles.container}>
            <Image
                className={styles.image}
                src={imageUrl}
                alt={name}
                width={500}
                height={400}
            />

            <div className={styles.content}>
                <h1 className={styles.name}>{name}</h1>
                <h5 className={styles.price}>R${price}</h5>
                <p className={styles.description}>Descrição: < br />
                    {description}
                </p>

                <button 
                className={styles.btn}
                onClick={()=>{
                    addProduct(product);
                    setToastIsOpen(true);
                    setTimeout(()=> setToastIsOpen(false), 1000 *1.5);
                }}             
                >Compre agora</button>
                <SucessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
            </div>
        </div>
    );
};

export default ProductDetailer;
