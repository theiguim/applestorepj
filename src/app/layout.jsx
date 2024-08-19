import Header from "@/components/Header";
import styles from "../styles/globalStyles.module.scss";
import { Inter } from "next/font/google";
import { CartContextProvider } from "@/hooks/useCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store apple items",
};

export default function RootLayout({ children }) {
  return (
    <CartContextProvider>
    <html lang="en">
      <body className={`${inter.className} ${styles.body}`}>
      <Header />
      {children}</body>
    </html>
    </CartContextProvider>
  );
}
