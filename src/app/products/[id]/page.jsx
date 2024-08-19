import ProductDetailer from "@/components/ProductDetailer/page";
import styles from "../../../styles/productsStyle.module.scss";
import { fetchProduct, fetchProducts } from "@/service/products";

export const generateStaticParams = async () => {

  const products = await fetchProducts();
  return products.map(product => ({
    id: product.id.toString()
  }));
};


const Product = async ({ params }) => {

  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <ProductDetailer product={product} />
  );
};

export default Product;