import { useState } from "react";
import EditHistory from "../services/AboutPage/Postmethods/EditHistory";

function HistoryForm({ data }) {
  const [isEditing2, setIsEditing2] = useState(false);
  const [formData, setFormData] = useState({
    date: data?.date || "",
    description: data?.description || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsEditing2(true);
  };

  const closeEditing2 = () => {
    setIsEditing2(false);
    setFormData({ date: data?.date || "", description: data?.description || "" });
  };

  const handleSubmit = async () => {
    console.log("Submitted Data:", formData);
    const res = await EditHistory(formData, data._id);
    setIsEditing2(false);
  };

  if (!data?.date) return null;

  return (
    <div className="p-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg shadow-md">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Year</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
            placeholder="Enter year (e.g., 2023)"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">History Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-sm"
            placeholder="Enter history description..."
            rows={4}
          ></textarea>
        </div>
      </div>
      {isEditing2 && (
        <div className="flex justify-center space-x-3 mt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={closeEditing2}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default HistoryForm;
