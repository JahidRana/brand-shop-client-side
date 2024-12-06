import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const BrandCard = ({brand}) => {
    const{loading} =useContext(AuthContext);
    const {brand_name,brand_image}= brand;
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    return (
        <Link to={`/products/${brand_name}`}>
        <div className="h-72 flex flex-col justify-evenly items-center bg-gradient-to-r from-gray-400 to-gray-300 rounded-lg  pb-6 pt-10 px-10">
            
                <img className="h-20 mb-8 mx-auto rounded-md " src={brand_image} alt="" />
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text text-center">{brand_name}</h2>
        </div>
            </Link>
    );
};

export default BrandCard;