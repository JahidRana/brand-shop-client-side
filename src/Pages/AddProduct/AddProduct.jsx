import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    const newUser = { name, brand, type, photo, price, description, rating };
    console.log(newUser);

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    fetch(`${API_BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        form.reset();
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
        // Handle the error, show an alert, etc.
        Swal.fire({
          title: "Error!",
          text: "Failed to add product. Please try again.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="bg-[#F4F3F0] px-4 md:px-0 md:w-3/4 mx-auto py-16">
        <h2 className="text-3xl md:text-5xl text-[#374151] text-center font-bold mb-8">
          Add New Product
        </h2>
        <form onSubmit={handleAddProduct} className="space-y-6">
          {/* 1st row */}
          <div className="lg:flex justify-evenly px-8 md:px-16 lg:px-28 gap-6">
            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text text-black text-xl font-semibold mb-2">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                className="input input-bordered rounded-md w-full bg-white"
                required
              />
            </div>
            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold text-black mb-2">
                  Brand
                </span>
              </label>
              <select name="brand" className="select select-bordered w-full">
                <option disabled selected>
                  Select brand
                </option>
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
                <span className="label-text text-black text-xl font-semibold mb-2">
                  Type
                </span>
              </label>
              <input
                type="text"
                name="type"
                placeholder="Enter product type"
                className="input input-bordered rounded-md w-full bg-white"
                required
              />
            </div>
            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold text-black mb-2">
                  PhotoURL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered rounded-md w-full bg-white"
                required
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="lg:flex justify-evenly px-8 md:px-16 lg:px-28 gap-6">
            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text text-black text-xl font-semibold mb-2">
                  Price
                </span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter price"
                className="input input-bordered rounded-md w-full bg-white"
                required
              />
            </div>
            <div className="form-control w-full lg:w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold text-black mb-2">
                  Short Description
                </span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter description"
                className="input input-bordered rounded-md w-full bg-white"
                required
              />
            </div>
          </div>
          {/* 4th row */}
          <div className="lg:flex justify-evenly px-8 md:px-16 lg:px-28 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-black text-xl font-semibold mb-2">
                  Product rating
                </span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Enter rating out of 5"
                className="input input-bordered rounded-md w-full bg-white"
                required
              />
            </div>
          </div>
          <div className="w-full px-8 md:px-16 lg:px-28 ">
            <input
              className="bg-cyan-950 font-bold cursor-pointer text-white rounded-md w-full py-3"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
