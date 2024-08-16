import Link from "next/link";
import styles from "../styles/globalStyles.module.scss";

export default function Home() {
  return (

    <div className={styles.container}>

    <h1>O melhor jeito de comprar o que você ama</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui vel id ipsum error 
      accusantium illo ullam incidunt quis voluptas. Deleniti, ratione. 
      Autem aperiam earum, blanditiis possimus nihil nostrum facere beatae dolor molestiae? </p>

     <Link href="/products" className={styles.btn}>
     Conheça nossos produtos!
     </Link> 
   

    </div>
  );
};
