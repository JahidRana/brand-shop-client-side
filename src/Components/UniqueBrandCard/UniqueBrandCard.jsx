import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const UniqueBrandCard = ({product}) => {
    const {name,brand, type, price, photo, rating, _id}= product;
    const ratingbar=[1,2,3,4,5];
    return (
        <div className="flex flex-col md:flex-row text-center md:text-left gap-2 md:gap-6 bg-slate-400 pl-6 pr-2 py-4 rounded-md">
            <div className="">
                <img className="mx-auto rounded-md w-72 md:w-80 h-56 md:h-72" src={photo} alt="" />
            </div>
            <div className="mt-6">
                <h2 className="text-2xl md:text-4xl font-extrabold mb-2">{name}</h2>
                <div className="mb-4">
                    <p className="text-lg md:text-2xl font-semibold mb-1"><span className="font-bold">Brand:</span> {brand}</p>
                    <p className="text-lg md:text-2xl font-semibold mb-1"><span className="font-bold">Type: </span> {type}</p>
                    <p className="text-lg md:text-xl font-semibold"><span className="font-bold">Price: </span> {price}</p>
                </div>
                
                <div className="rating">
                    {
                        ratingbar.map((num,idx)=> rating>=num ? <span className="text-yellow-400" key={idx}><AiTwotoneStar></AiTwotoneStar></span> : <span key={idx}><AiOutlineStar className="outline-yellow-500"></AiOutlineStar></span>)
                    }
                    {/* <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" /> */}
                </div>
                <div className="mt-4">
                    <Link to={`/details/${brand}/${_id}`}><button className="bg-purple-500 rounded-md py-2 px-2 md:px-4 mr-2 md:mr-6 text-white font-bold">Details</button></Link>
                    <Link to={`/update/${brand}/${_id}`}><button className="bg-purple-500 rounded-md py-2 px-2 md:px-4 text-white font-bold">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default UniqueBrandCard;