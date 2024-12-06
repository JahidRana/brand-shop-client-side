import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData(); // Load the product data from the route loader
    console.log(product);

    // Destructure the product details
    const { name, brand, type, price, photo, description, rating } = product[0];
    const productDetails = { name, brand, type, price, photo, rating }; // Define the details you want to send to the cart

    const navigate = useNavigate(); // Declare useNavigate inside the functional component

    const handleCart = () => {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Get the API base URL from the environment variables

        fetch(`${API_BASE_URL}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productDetails), // Send the product details to the API
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) { // If product was added successfully
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added to cart successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                }).then(() => {
                    // Redirect to the cart page after the success message
                    navigate('/cart');
                });
            }
        })
        .catch(error => {
            console.error('Error adding product to cart:', error);
        });
    };

    return (
        <div className="bg-gray-200 min-h-[70vh] max-w-[1440px] mx-auto">
            <div className="px-2 lg:px-0 lg:w-1/3 bg-gradient-to-r from-cyan-500 to-blue-500 py-6 mx-auto border-2 border-black mt-2">
                <div className="pt-4 mb-6">
                    <img className="mx-auto w-[225px] h-[225px]" src={photo} alt="" />
                </div>
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-2 text-white">{name}</h2>
                    <p className="text-lg md:text-2xl font-semibold mb-1 text-white"><span className="font-bold text-white">Brand:</span> {brand}</p>
                    <p className="text-lg md:text-2xl font-semibold mb-1 text-white"><span className="font-bold text-white">Type: </span> {type}</p>
                    <p className="text-lg md:text-xl font-semibold text-white"><span className="font-bold text-white">Price: </span> {price}</p>
                    <p className="text-white font-semibold"><span className="font-bold">Description: </span> {description}</p>
                    <button onClick={handleCart} className="bg-purple-500 px-2 py-1 rounded-md text-xl font-bold mx-auto w-1/2 mt-4 text-white">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
