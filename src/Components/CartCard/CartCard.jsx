import Swal from "sweetalert2";

const CartCard = ({product,products,setProducts}) => {

    const {name,brand, type, price, photo, _id}= product;

    const handleDelete=id=>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

            if (result.isConfirmed) {
                fetch(`${API_BASE_URL}/cart/${id}`, {
                    method: 'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Coffee deleted successfully',
                            icon:'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                    const remaining= products.filter(product=>product._id!==id);
                    setProducts(remaining);
                })
            }
          })
}

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
            
            <div className="mt-4">
                <button onClick={()=>handleDelete(_id)} className="bg-purple-500 rounded-md py-2 px-2 md:px-4 mr-2 md:mr-6 text-white font-bold">Delete</button>
            </div>
        </div>
    </div>
    );
};

export default CartCard;
// card added 