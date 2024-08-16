import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";


const ProductCard = ({ product }) => {

    const { id, name, imageUrl, price } = product;

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
                    $ {price}
                </p>

                <button
                    className={styles.btn}
                // onClick={()=>{

                // }}
                >
                    Adicionar ao Carrinho
                </button>
            </div>
        </div >
    )


}
export default ProductCard;