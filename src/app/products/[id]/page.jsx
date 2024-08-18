import ProductDetailer from "@/components/ProductDetailer/page";
import styles from "../../../styles/productsStyle.module.scss";
import { fetchProduct } from "@/service/products";




const Product = async ({params}) =>{

    const {id} = params;
    const product = await fetchProduct(id);

return (
  <ProductDetailer product={product} />
);
};

export default Product;