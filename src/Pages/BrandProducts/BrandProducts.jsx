import { useLoaderData, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UniqueBrandCard from "../../Components/UniqueBrandCard/UniqueBrandCard";
import { AuthContext } from "../../Providers/AuthProvider";
const BrandProducts = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);}, []);
    const{loading} =useContext(AuthContext);
    const products=useLoaderData();

    const {brand}=useParams();
    console.log(products);

    const [allBrand,setAllBrand]=useState([]);
    const [img1,setimg1] = useState(null);
    const [img2,setimg2] = useState(null);
    const [img3,setimg3] = useState(null);

    useEffect(()=>{
        fetch('../brands.json')
        .then(res=>res.json())
        .then(data=>{
            setAllBrand(data);
        })
    },[])
   
    useEffect(()=>{
        const selectedBrand=allBrand.find(singleBrand=>singleBrand.brand_name===brand);
        setimg1(selectedBrand?.slide1)
        setimg2(selectedBrand?.slide2)
        setimg3(selectedBrand?.slide3)
        console.log(img1);
    },[allBrand, brand, img1])
    // if(loading){
    //     return <span className="loading loading-spinner loading-lg"></span>
    // }

    return (
        
        <div className="px-4 md:px-10 mt-10 max-w-[1440px] mx-auto">
            <div className="carousel w-full mb-10" >
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full h-[50vh] md:h-[80vh] " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-[50vh] md:h-[80vh] " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-[50vh] md:h-[80vh] " />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
            </div>
            
            <div>
               {
                products.length>0 ?
                <div>
                    <h2 className="text-center text-5xl font-bold text-orange-500 mb-10">Total Products: {products.length}</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {
                            products?.map(product=><UniqueBrandCard key={product._id} product={product}></UniqueBrandCard>)
                        }
                    </div> 
                </div>
                :
                <h2 className="text-5xl font-extrabold text-center text-orange-500">Sorry! No available products..</h2>
               }
            </div>
        </div>
    );
};

export default BrandProducts;
// 