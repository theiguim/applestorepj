import { fetchProducts } from "@/service/products";
import styles from "../../styles/productsStyle.module.scss";
import ProductsList from "@/components/ProductList/page";

export const metadata = {
    title: "Nossos produtos",
    description: "Conheça todos os nossos produtos",
    icons: {
        icon: "/favicon.ico"
    },
};

const Products = async () => {

    const products = await fetchProducts();

    return (
        <div className={styles.productsContainer}>
            <h1>Nossos Produtos</h1>
            {<ProductsList products={products} />}
        </div>
    );
};

export default Products;