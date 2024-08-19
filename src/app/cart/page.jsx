import CartTable from "@/components/CartTable/page"


export const metadata = {
    title: "Carrinho",
    description: "Meu carrinho de compras",
}

const Cart = () =>{

return (
   <>
    <h1>Meu Carrinho</h1>
    <CartTable />
    </>
)
}

export default Cart