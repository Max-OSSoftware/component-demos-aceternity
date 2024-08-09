import Image from "next/image";
import Charts from '@/components/ui/Charts'
import Orders from '@/components/ui/Orders'
import Inventory from '@/components/ui/Inventory'
import Playground from '@/components/ui/Playground'
import Settings from '@/components/ui/Settings'
import Products from '@/components/ui/Products'
import ProductDetails from '@/components/ui/ProductDetails'
import Transactions from '@/components/ui/Transactions'



import LoginForm01 from '@/components/ui/Authentication01'
import LoginForm02 from '@/components/ui/Authentication02'
import LoginForm03 from '@/components/ui/Authentication03'
import LoginForm04 from '@/components/ui/Authentication04'



export default function Home() {
  return (
    <div>
     
        <section className="p-10"> <Charts /> </section>
        <section className="p-10"> <Orders /> </section>
        <section className="p-20"> <Inventory /> </section>
        <section className="p-10"> <Playground /> </section>
        <section className="p-10"> <Settings /> </section>
        <section className="p-10"> <Products /> </section>
        <section className="p-10"> <ProductDetails /> </section>
        <section className="p-10"> <Transactions /> </section>
        <section className="p-20 text-center"> <LoginForm01 /> </section>  
        <section className="p-10"> <LoginForm02 /> </section>
        <section className="p-10"> <LoginForm03 /> </section>
        <section className="p-10"> <LoginForm04 /> </section>  
         
      
   </div>
  );
}
