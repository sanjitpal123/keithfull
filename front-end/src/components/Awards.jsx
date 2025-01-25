import React, { useState } from "react";

const Awards = () => {
  // State to manage modal visibility and content
  const [modal, setModal] = useState({
    isOpen: false,
    imageSrc: "",
    title: "",
    description: "",
  });

  // Function to open the modal with the clicked image's content
  const openModal = (imageSrc, title, description) => {
    setModal({
      isOpen: true,
      imageSrc,
      title,
      description,
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setModal({
      isOpen: false,
      imageSrc: "",
      title: "",
      description: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto items-center mt-10 px-2 gap-8 py-[80px]">
      {/* Heading */}
      <div>
        <h1 className="text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">
          Awards
        </h1>
      </div>

      {/* Image Section */}
      <div className="max-w-7xl rounded-lg mx-auto flex flex-col-reverse lg:flex-row justify-around items-center mt-10 px-2 py-3 md:px-8 gap-8">
        {/* Image container */}
        <div className="w-full h-[200px] md:h-[300px] px-5 py-4 rounded-lg border-2 lg:h-[400px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
            <img
              src="https://img.freepik.com/free-vector/flat-certificate-template_52683-61537.jpg"
              alt="AWARD 1"
              className="w-full hover:cursor-pointer h-auto rounded-lg shadow-lg object-cover"
              onClick={() =>
                openModal(
                  "https://img.freepik.com/free-vector/flat-certificate-template_52683-61537.jpg",
                  "AWARDED MOST PREFERRED SUPPLIER BY MAJOR EUROPEAN CUSTOMER",
                  `WE WERE HONORED WITH THE ‘MOST PREFERRED SUPPLIER’ AWARD BY ONE OF
                   OUR MAJOR EUROPEAN CUSTOMERS. THIS PRESTIGIOUS RECOGNITION REFLECTS
                   OUR COMMITMENT TO DELIVERING EXCEPTIONAL QUALITY, RELIABILITY, AND
                   CUSTOMER SATISFACTION IN THE CASTING MANUFACTURING INDUSTRY.`
                )
              }
            />
            <img
              src="https://img.freepik.com/free-vector/gradient-elegant-certificate-template_23-2148973721.jpg"
              alt="AWARD 2"
              className="w-full hover:cursor-pointer h-auto rounded-lg shadow-lg object-cover"
              onClick={() =>
                openModal(
                  "https://img.freepik.com/free-vector/gradient-elegant-certificate-template_23-2148973721.jpg",
                  "AWARD 2 TITLE",
                  "Description for Award 2 goes here."
                )
              }
            />
            <img
              src="https://img.freepik.com/free-vector/certificate-template-with-elegant-elements_23-2148568461.jpg"
              alt="AWARD 3"
              className="w-full hover:cursor-pointer h-auto rounded-lg shadow-lg object-cover"
              onClick={() =>
                openModal(
                  "https://img.freepik.com/free-vector/certificate-template-with-elegant-elements_23-2148568461.jpg",
                  "AWARD 3 TITLE",
                  "Description for Award 3 goes here."
                )
              }
            />
            <img
              src="https://img.freepik.com/free-vector/certificate-template-with-elegant-elements_23-2148568461.jpg"
              alt="AWARD 3"
              className="w-full hover:cursor-pointer h-auto rounded-lg shadow-lg object-cover"
              onClick={() =>
                openModal(
                  "https://img.freepik.com/free-vector/certificate-template-with-elegant-elements_23-2148568461.jpg",
                  "AWARD 3 TITLE",
                  "Description for Award 3 goes here."
                )
              }
            />
            {/* Add more images as needed */}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <div
          id="image-modal"
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
          onClick={(e) => {
            if (e.target.id === "image-modal") closeModal(); // Close on background click
          }}
        >
          <div className="bg-white overflow-y-auto h-[300px] sm:h-[500px] w-10/12 sm:w-2/3 lg:w-1/3 rounded-lg overflow-hidden shadow-lg relative">
            {/* Close Button */}
            <button
              id="close-modal"
              className="absolute top-3 right-3 bg-gray-200 hover:bg-red-500 text-gray-600 hover:text-white rounded-full w-8 h-8 flex justify-center items-center shadow"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Modal Content */}
            <div>
              <img
                id="modal-image"
                src={modal.imageSrc}
                alt={modal.title}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="p-4 text-left">
              <h2
                id="modal-title"
                className="text-md sm:text-lg font-bold mb-2"
              >
                {modal.title}
              </h2>
              <p
                id="modal-description"
                className="text-gray-600 text-xs sm:text-sm"
              >
                {modal.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;
