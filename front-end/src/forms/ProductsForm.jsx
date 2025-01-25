import { useState, useEffect } from "react";
import FetchProducts from "../services/ProductPage/FetchProducts";

function ProductsForm() {
  const [products, setProducts] = useState([]);
  const [newFields, setNewFields] = useState([]);

  // Fetch products from the API
  async function fetchingProducts() {
    try {
      const get = await FetchProducts();
      console.log("Fetched products:", get.getall);

      // Check if the response is an array
      if (Array.isArray(get.getall)) {
        setProducts(get.getall);
      } else {
        console.error("Expected an array, but got:", get);
      }
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchingProducts();
  }, []);

  const handleProductChange = (index, field, value, isNewField = false) => {
    if (isNewField) {
      const updatedFields = [...newFields];
      updatedFields[index][field] = value;
      setNewFields(updatedFields);
    } else {
      const updatedProducts = [...products];
      updatedProducts[index][field] = value;
      setProducts(updatedProducts);
    }
  };

  const handleImageChange = (index, event, isNewField = false) => {
    const files = event.target.files;
    if (files && files[0]) {
      if (isNewField) {
        const updatedFields = [...newFields];
        updatedFields[index].image = URL.createObjectURL(files[0]);
        setNewFields(updatedFields);
      } else {
        const updatedProducts = [...products];
        updatedProducts[index].image = URL.createObjectURL(files[0]);
        setProducts(updatedProducts);
      }
    }
  };

  const handleProductSubmit = (index, isNewField = false) => {
    // Handle product-specific submit action here (e.g., API call to save changes)
    if (isNewField) {
      console.log(`New product ${index + 1} submitted!`, newFields[index]);
    } else {
      console.log(`Product ${index + 1} submitted!`, products[index]);
    }
  };

  const addNewField = () => {
    setNewFields([...newFields, { title: "", description: "", image: "" }]);
  };

  return (
    <main className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Form container */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold p-4 bg-gray-800 text-white">Products</h2>
        <form className="space-y-6 p-6">
          {/* Existing Products */}
          <div className="space-y-6">
            {Array.isArray(products) &&
              products.map((product, index) => (
                <div key={index} className="space-y-6 border-b pb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input
                      type="text"
                      value={product.title}
                      onChange={(e) => handleProductChange(index, "title", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter title"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea
                      value={product.description}
                      onChange={(e) => handleProductChange(index, "description", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Enter description"
                      rows="4"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Image</label>
                    <input
                      type="file"
                      onChange={(e) => handleImageChange(index, e)}
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    {product.image && (
                      <div className="mt-4">
                        <img
                          src={product.image}
                          alt={`Product ${product.title}`}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  {/* Submit button for each product */}
                  <div>
                    <button
                      type="button"
                      onClick={() => handleProductSubmit(index)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Submit Product {index + 1}
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* New Fields */}
          <div className="space-y-6">
            {newFields.map((field, index) => (
              <div key={index} className="space-y-6 border-b pb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Title</label>
                  <input
                    type="text"
                    value={field.title}
                    onChange={(e) => handleProductChange(index, "title", e.target.value, true)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter title"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Description</label>
                  <textarea
                    value={field.description}
                    onChange={(e) => handleProductChange(index, "description", e.target.value, true)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Enter description"
                    rows="4"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Image</label>
                  <input
                    type="file"
                    onChange={(e) => handleImageChange(index, e, true)}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  {field.image && (
                    <div className="mt-4">
                      <img
                        src={field.image}
                        alt={`New Product ${index + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  )}
                </div>

                {/* Submit button for new product */}
                <div>
                  <button
                    type="button"
                    onClick={() => handleProductSubmit(index, true)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Submit New Product {index + 1}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add new product button */}
          <button
            type="button"
            onClick={addNewField}
            className="sm:w-[120px] px-3 py-2 bg-green-600 text-white sm:py-3 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add New Product
          </button>
          {/* hi */}
          {/* hello */}
        </form>
      </div>
    </main>
  );
}

export default ProductsForm;
