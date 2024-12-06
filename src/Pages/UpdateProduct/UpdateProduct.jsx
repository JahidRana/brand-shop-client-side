import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product= useLoaderData();
    console.log(product);
    const {name,brand, type, price, photo, rating, _id}= product[0];
    console.log(name,brand,price);


    const handleUpdate=e=>{
        e.preventDefault();
        const form= e.target;

        const name=form.name.value;
        const brand=form.brand.value;
        const type=form.type.value;
        const photo=form.photo.value;
        const price=form.price.value;
        const rating=form.rating.value;

        const updatedUser={name, brand, type, photo, price, rating};
        console.log(updatedUser);
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
        fetch(`${API_BASE_URL}/products/${brand}/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="bg-[#F4F3F0] px-4 md:px-0 md:w-3/4 mx-auto py-16">
                    <h2 className="text-3xl md:text-5xl text-[#374151] text-center font-bold mb-8">Update Product</h2>
                    <form onSubmit={handleUpdate} className='space-y-6'>
                        {/* 1st row */}
                        <div className="lg:flex justify-evenly px-8 md:px-16 lg:px-28 gap-6">
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-black text-xl font-semibold mb-2">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Enter product name" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black mb-2">Brand</span>
                                </label>
                                <select name="brand" className="select select-bordered w-full">
                                    <option disabled selected>Select brand</option>
                                    <option>Apple</option>
                                    <option>Samsung</option>
                                    <option>One Plus</option>
                                    <option>Asus</option>
                                    <option>LG</option>
                                    <option>Realme</option>
                                </select>
                            </div>
                        </div>
                        {/* 2nd row */}
                        <div className="lg:flex justify-evenly px-8 md:px-16 lg:px-28 gap-6">
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-black text-xl font-semibold mb-2">Type</span>
                                </label>
                                <input type="text" name="type" defaultValue={type} placeholder="Enter product type" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-black mb-2">PhotoURL</span>
                                </label>
                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                        </div>
                        {/* 3rd row */}
                        <div className="lg:flex justify-evenly px-8 md:px-16 lg:px-28 gap-6">
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-black text-xl font-semibold mb-2">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="Enter price" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                            <div className="form-control w-full lg:w-1/2">
                                <label className="label">
                                    <span className="label-text text-black text-xl font-semibold mb-2">Product rating</span>
                                </label>
                                <input type="text" name="rating" defaultValue={rating} placeholder="Enter rating out of 5" className="input input-bordered rounded-md w-full bg-white" required />
                            </div>
                        </div>
                        {/* 4th row */}
                        
                        <div className='w-full px-8 md:px-16 lg:px-28 '>
                            <input className='bg-cyan-950 font-bold cursor-pointer text-white rounded-md w-full py-3' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default UpdateProduct;
// 