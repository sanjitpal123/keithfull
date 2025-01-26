import { useEffect, useState } from "react";
import FetchQuality from "../services/Quality/FetchQuality";
import AddNewQuality from "../services/Quality/AddItem";
import { ClipLoader } from "react-spinners"; // Import the spinner
import DeleteQuality from "../services/Quality/DeletedItem";

function QualityForm() {
  const [allqualitydata, setallqualitydata] = useState([]);
  const [EditId, setEditId] = useState(null);
  const [Description, SetDescription] = useState("");
  const [file, setfile] = useState(null);
  const [typesofproduct, settypesofproduct] = useState("Physical Testing");
  const [Name, setName] = useState("");
  const [isadd, setisadd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false); // Track loading state

  // Fetch quality data
  async function fetchquality() {
    setIsLoading(true); // Set loading to true when fetching data
    try {
      const get = await FetchQuality();
      setallqualitydata(
        get.map((item) => ({
          ...item,
          previewImage: item.image, // Initialize previewImage with the existing image
        }))
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  }

  // Handle file upload and update preview
  const handleFileChange = (id, file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setallqualitydata((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, previewImage: reader.result } : item
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle delete button
  const handleDelete =async (id) => {
    try{
      const res=await DeleteQuality(id);
      console.log('deleted',res);
      fetchquality();
    }
    catch(error)
    {
      console.log('error',error)
    }
  
  };

  // Handle Edit/Submit Toggle
  const handleEdit = (id) => {
    if (EditId === id) {
      // Submit
       console.log('name',Name);
       console.log('dex',Description);
       console.log('files',file);
       console.log('dlf',typesofproduct)
      setEditId(null);
    } else {
      // Edit mode
      setEditId(id);
      const selectedItem = allqualitydata.find((item) => item._id === id);
      setName(selectedItem.name);
      SetDescription(selectedItem.description);
    }
  };

  // Handle Add Toggle
  const handleAdd = () => {
    setisadd(!isadd);
  };

  // Handle Add New Quality Item
  async function HandleAddNew() {
    console.log("typesof product", typesofproduct);
    console.log("name", Name);
    console.log("files", file);
    console.log("des", Description);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", Name);
    formData.append("description", Description);
    formData.append("typeofproduct", typesofproduct);

    // Log the FormData content
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    setIsLoading1(true); // Set loading to true when submitting
    try {
      const res = await AddNewQuality(formData);
      console.log("added", res);
      setisadd(false);
      setName("");
      SetDescription("");
      setfile();

      fetchquality(); // Refresh data
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading1(false); // Set loading to false after submission
    }
  }

  // Handle types of product for adding a new item
  function handletypesofproduct(e) {
    settypesofproduct(e.target.value);
  }

  useEffect(() => {
    fetchquality();
  }, []);

  return (
    <main className="p-6 sm:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Quality Manager
      </h1>

      {/* Display loading spinner */}
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <ClipLoader size={50} color="#3490dc" loading={isLoading} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allqualitydata.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center space-y-4 transform hover:scale-105 transition duration-300"
            >
              <input
                type="file"
                onChange={(e) => handleFileChange(item._id, e.target.files[0])}
                disabled={EditId !== item._id}
                className="w-full p-2 border rounded-lg text-sm"
              />
              <img
                src={item.previewImage || item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <input
                type="text"
                value={EditId === item._id ? Name || item.name : item.name}
                onChange={(e) => setName(e.target.value)}
                readOnly={EditId !== item._id}
                className="w-full p-2 border rounded-lg text-center"
              />
              <textarea
                value={
                  EditId === item._id
                    ? Description || item.description
                    : item.description
                }
                onChange={(e) => SetDescription(e.target.value)}
                readOnly={EditId !== item._id}
                className="w-full p-2 border rounded-lg text-sm"
              ></textarea>
              <select
                value={item.typeofproduct}
                disabled={EditId !== item._id}
                className="w-full p-2 border rounded-lg"
              >
                <option>Physical Testing</option>
                <option>Wet Chemical Laboratory Equipment</option>
                <option>Item For Infrastructure</option>
                <option>SAND TESTING EQUIPMENT</option>
              </select>
              <div className="flex justify-between w-full space-x-4">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(item._id)}
                  className={`px-2 mx-2 py-2 ${
                    EditId === item._id ? "bg-green-500" : "bg-blue-500"
                  } text-white rounded-lg hover:opacity-90`}
                >
                  {EditId === item._id ? "Submit" : "Edit"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add New Quality Section */}
      {isadd && (
        <div className="bg-white shadow-lg rounded-xl p-6 mt-8 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-bold mb-4 text-gray-600">Add New </h2>
          <input
            type="file"
            className="w-full p-2 border rounded-lg text-sm"
            onChange={(e) => setfile(e.target.files[0])}
          />
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="w-full p-2 border rounded-lg text-center"
          />
          <textarea
            placeholder="Enter description"
            value={Description}
            onChange={(e) => SetDescription(e.target.value)}
            className="w-full p-2 border rounded-lg text-sm"
          ></textarea>
          <select
            className="w-full p-2 border rounded-lg"
            value={typesofproduct}
            onChange={handletypesofproduct}
          >
            <option>Physical Testing</option>
            <option>Wet Chemical Laboratory Equipment</option>
            <option>Item For Infrastructure</option>
            <option>SAND TESTING EQUIPMENT</option>
          </select>
          <div className="flex justify-between w-full space-x-4">
            <button
              onClick={() => setisadd(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full sm:w-auto flex items-center justify-center space-x-2"
              onClick={HandleAddNew}
            >
              {isLoading1 ? (
                <>
                  <ClipLoader
                    size={window.innerWidth < 640 ? 20 : 30} // Smaller spinner size on small devices
                    color="#3490dc"
                    loading={isLoading1}
                  />
                  <span>Submit</span>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      )}

      {/* Add Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleAdd}
          className="px-6 py-3 bg-blue-500 text-white text-lg rounded-full shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-300"
        >
          {isadd ? "Close Add Form" : "Add New "}
        </button>
      </div>
    </main>
  );
}

export default QualityForm;
