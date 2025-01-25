import React, { useEffect, useState } from "react";
import FetchCertificates from "../services/AboutPage/FetchCertificates";

const CertificatesImages = ({ currentImages = [] }) => {
  const [fields, setFields] = useState(
    currentImages.map((img) => ({ title: "", description: "", image: img.image })) || []
  );


  const handleFieldChange = (index, field, value) => {
    const newFields = [...fields];
    newFields[index][field] = value;
    setFields(newFields);
  };

  const addNewField = () => {
    // Add a new empty field to the state
    setFields((prevFields) => [...prevFields, { title: "", description: "", image: "" }]);
  };

  const handleSubmit = (index) => {
    const fieldData = fields[index];
    alert(
      `Submitted: \nTitle: ${fieldData.title}\nDescription: ${fieldData.description}\nImage: ${fieldData.image}`
    );
  };

  const handleImageChange = (index, event) => {
    const files = event.target.files;
    if (files && files[0]) {
      const newFields = [...fields];
      newFields[index].image = URL.createObjectURL(files[0]);
      setFields(newFields);
    }
  };

  async function fetchCertificates() {
    try {
      const res = await FetchCertificates();
      console.log("certificates", res);
      setFields(res);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div className="border-b-2 border-gray-300 p-6">
      <h2 className="text-xl p-4 text-gray-800 font-semibold underline decoration-blue-500 decoration-2">
        Certificates Details
      </h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through the fields state to display each field */}
          {fields.map((field, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <label className="block text-gray-700 font-semibold mb-2">Title</label>
              <input
                type="text"
                value={field.title}
                onChange={(e) => handleFieldChange(index, "title", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter title"
              />

              <label className="block text-gray-700 font-semibold mt-4 mb-2">Description</label>
              <textarea
                value={field.description}
                onChange={(e) => handleFieldChange(index, "description", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter description"
                rows="3"
              ></textarea>

              <label className="block text-gray-700 font-semibold mt-4 mb-2">Image</label>
              <input
                type="file"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => handleImageChange(index, e)}
              />
              {field.image && (
                <div className="mt-4">
                  <img
                    src={field.image}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              )}

              <button
                type="button"
                onClick={() => handleSubmit(index)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {/* Submit Details {index + 1} */}
                Submit
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={addNewField}
        >
          Add Another Field
        </button>
      </div>
    </div>
  );
};

export default CertificatesImages;
