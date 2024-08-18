import Image from "next/image";
import styles from "./styles.module.scss";



const ProductDetailer = ({ product }) => {

    const {name, description, price, imageUrl } = product

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

                <button className={styles.btn}>Compre agora</button>
            </div>
        </div>
    );
};

export default ProductDetailer;