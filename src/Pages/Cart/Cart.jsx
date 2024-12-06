import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import CartCard from "../../Components/CartCard/CartCard";
import CartCard from "../../Components/CartCard/CartCard";

const Cart = () => {
    const cartProducts= useLoaderData();
    const [products,setProducts]=useState(cartProducts);
    return (
        <div className="max-w-[1440px] mx-auto">
            <h2 className="text-center text-5xl font-bold text-orange-500 mb-10">Total Products: {products.length}</h2>
            <div>
               {
                products.length>0 ?
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {
                        products.map(product=><CartCard key={product._id} products={products} setProducts={setProducts} product={product}></CartCard>)
                    }
                </div> :
                'No product available'
               }
            </div>
        </div>
    );
};

export default Cart;