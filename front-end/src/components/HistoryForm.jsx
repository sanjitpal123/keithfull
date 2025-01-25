import { useState } from "react";
import EditHistory from "../services/AboutPage/Postmethods/EditHistory";

function HistoryForm({ data }) {
  const [isEditing2, setIsEditing2] = useState(false); // Tracks if buttons should be shown
  const [formData, setFormData] = useState({ date: data?.date || "", description: data?.description ||  ""}); // Tracks input and textarea values

  // Handle changes in both input and textarea fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsEditing2(true); // Show buttons when changes occur
  };

  // Close editing and reset the state
  const closeEditing2 = () => {
    setIsEditing2(false);
    setFormData({ date: data?.date || "", description: data?.description || "" }); // Reset form data to initial state
  };

  // Handle form submission
  const handleSubmit = async() => {
    console.log("Submitted Data:", formData);
    const res= EditHistory(formData, data._id)
    setIsEditing2(false); // Hide buttons after submission
  };

  if (!data.date) return null; // Return nothing if no data

  return (
    <div className="flex flex-col space-y-6">
      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Year Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Year</label>
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter value"
          />
        </div>

        {/* Description Field */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">History Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter value"
            rows={5}
          ></textarea>
        </div>
      </div>

      {/* Submit and Cancel Buttons */}
      {isEditing2 && (
        <div className="flex justify-start space-x-4 mt-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={closeEditing2}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default HistoryForm;
