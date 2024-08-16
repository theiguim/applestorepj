import styles from "./styles.module.scss";
import ProductCard from "../ProductCard/page";

const ProductsList = ({ products }) => {
return(
    <div className={styles.productsListGrid}>
        {products.map(product => <ProductCard key={product.id} product={product}/>)}
    </div>
)
}

export default ProductsList