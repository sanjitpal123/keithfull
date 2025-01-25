import { useEffect, useState } from "react";
import FetchAboutHeading from "../services/AboutPage/FetchAboutHeading";
import Fetchhistoryall from "../services/AboutPage/FetchHistory";
import HistoryForm from "../components/HistoryForm";
import MissionVisionComponent from "../components/MissionVisionComponent";
import FetchManagement from "../services/AboutPage/FetchManagement";
import Postaboutheading_content_image from "../services/AboutPage/Postmethods/PostAboutHeadingContentAndImage";
import FetchCoreAndPrinciple from "../services/AboutPage/FetchCoreAndPrinciple";
import HeroBackground from "../components/CertificatesImages";
import FetchCertificates from "../services/AboutPage/FetchCertificates";
import CertificatesImages from "../components/CertificatesImages";

function AboutForm() {
  const [aboutData1, setAboutData1] = useState();
  const [AboutHeading, setAboutHeading] = useState();
  const [AboutContent, setAboutContent] = useState();
  const [Aboutimageprev, setAboutimageprev] = useState(null);
  const [AboutFile, SetAboutFile] = useState();
  const [aboutData2, setAboutData2] = useState();
  const [historyData, setHistoryData] = useState();
  const [isEditing1, setIsEditing1] = useState(false);
  const [isEditing2, setIsEditing2] = useState(false);
  const [GetPrincipleData, SetPrincipleData] = useState([]);
  const [GettingPrincipleAndcoreHeading1, SetGettingPrincipleAndcoreHeading1] =
    useState();

  const [videoPreview, setVideoPreview] = useState("");
  const [aboutImage, setAboutImage] = useState("");
  const [whyusImage, setWhyusImage] = useState("");

  // for form 1
  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setAboutData1({ ...aboutData1, [name]: value });
  };
  const openEditing1 = () => {
    setIsEditing1(true); // Enable edit mode
  };
  function closeEditing1() {
    setIsEditing1(false);
  }
  // onchange of image of aboutus
  function handleimagechange(e) {
    console.log("e");
    e.preventDefault();
    const files = e.target.files[0];
    SetAboutFile(files);
    // Declare `files` properly
    if (files) {
      const fileurl = URL.createObjectURL(files);
      setAboutimageprev(fileurl);
    }
  }

  //posting about heading image content
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setIsEditing1(false); // Save and exit edit mode

    const formData = new FormData();
    formData.append("header", AboutHeading);
    formData.append("content", AboutContent);
    formData.append("image", AboutFile);

    try {
      const response = await Postaboutheading_content_image(formData);
      console.log("Posting response:", response);
    } catch (error) {
      console.error("Error during posting:", error);
    }
  };
  // for form 2
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setAboutData2({ ...aboutData2, [name]: value });
  };
  const openEditing2 = () => {
    setIsEditing2(true); // Enable edit mode
  };
  function closeEditing2() {
    setIsEditing2(false);
  }
  const handleSubmit2 = (e) => {
    e.preventDefault();
    setIsEditing2(false); // Save and exit edit mode
    console.log("Submitted data:", aboutData2);
    // Add API logic to save data
  };

  function previewWhyUs(e) {
    const files = e.target.files[0];
    console.log("file", files);
    if (files) {
      const fileurl = URL.createObjectURL(files);
      setWhyusImage(fileurl);
    }
  }

  // for fetching about
  async function fetchingAbout() {
    try {
      const get = await FetchAboutHeading();
      console.log("getting about heading section", get);
      setAboutData1(get);
      setAboutHeading(get.header);
      setAboutContent(get.content);
      if (get.image) {
        setAboutImage(get.image);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchingManagement() {
    try {
      const get = await FetchManagement();
      console.log("getting management section", get);
      setAboutData1(get);
      if (get.image) {
        setAboutImage(get.image);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function previewAboutImage(e) {
    const files = e.target.files[0];
    console.log("file", files);
    if (files) {
      const fileurl = URL.createObjectURL(files);
      setAboutImage(fileurl);
    }
  }

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file); // Create a preview URL for the uploaded video
      setVideoPreview(fileUrl);
    }
  };

  // for fetching history
  async function fetchingHistory() {
    try {
      const get = await Fetchhistoryall();
      console.log("getting about history", get);
      setHistoryData(get);
    } catch (error) {
      console.log(error);
    }
  }

  // fetching principle and core
  async function Fetchcoreandprinciple() {
    try {
      const res = await FetchCoreAndPrinciple();
      console.log("herlro", res);
      SetPrincipleData(res);
    } catch (error) {
      console.log("error", error);
    }
  }
  // fetching certificates
  
  useEffect(() => {
    Fetchcoreandprinciple();
  }, []);

  useEffect(() => {
    fetchingAbout();
    fetchingHistory();
  }, []);

  return (
    <main className="p-4 sm:p-6 bg-gray-100 min-h-screen">
      {/* Form Container */}
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold p-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
          Home
        </h2>

        {/* Hero Section */}
        <div className="border-b-2 border-gray-300">
          <h2 className="text-xl p-4 text-gray-800 font-semibold underline decoration-blue-500 decoration-2">
            Hero Section
          </h2>
          <form className="space-y-6 p-6" onSubmit={handleSubmit1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* hero Heading */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hero Heading
                </label>
                <input
                  type="text"
                  value={AboutHeading}
                  onChange={(e) => setAboutHeading(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                  placeholder="Enter heading"
                  disabled={!isEditing1}
                />
              </div>

              {/* hero Description */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hero Description
                </label>
                <input
                  type="text"
                  value={AboutContent}
                  onChange={(e) => setAboutContent(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                  placeholder="Enter description"
                  disabled={!isEditing1}
                />
              </div>

              {/* HEro video */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hero video
                </label>
                <input
                  type="file"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                  onChange={handleVideoUpload}
                  disabled={!isEditing1}
                />
                {videoPreview && (
                <div className="mt-4">
                  <video
                    controls
                    src={videoPreview}
                    className="w-full h-auto rounded-lg shadow-md"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              </div>
            </div>

            {/* Submit & Cancel Buttons */}
            {isEditing1 && (
              <div className="flex justify-start space-x-4 mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeEditing1}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>

          {/* Edit Button */}
          {!isEditing1 && (
            <div className="p-4">
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={openEditing1}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* background hero Section */}
        {/* <div className="border-b-2 border-gray-300">
          <h2 className="text-xl p-4 text-gray-800 font-semibold underline decoration-blue-500 decoration-2">
            History
          </h2>
          <form className="space-y-6 p-6" onSubmit={handleSubmit2}>
            {historyData?.map((data) => (
              <HistoryForm key={data._id} data={data} isEditing2={isEditing2} />
            ))}
          </form>
        </div> */}
        
        {/* Hero Background */}
        <div className="border-b-2 border-gray-300">
          <h2 className="text-xl p-4 text-gray-800 font-semibold underline decoration-blue-500 decoration-2">
            Hero Background
          </h2>
          <form className="space-y-6 p-6" onSubmit={handleSubmit1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* HEro background */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hero image
                </label>
                <input
                  type="file"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                  onChange={previewAboutImage}
                  disabled={!isEditing1}
                />
                {aboutImage && (
                  <div className="mt-4">
                    <img
                      src={aboutImage}
                      alt="Year Background"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}

              </div>
            </div>

            {/* Submit & Cancel Buttons */}
            {isEditing1 && (
              <div className="flex justify-start space-x-4 mt-6">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeEditing1}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Cancel
                </button>
              </div>
            )}
          </form>

          {/* Edit Button */}
          {!isEditing1 && (
            <div className="p-4">
              <button
                type="button"
                className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={openEditing1}
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Hero backgoround image */}
        
        <CertificatesImages></CertificatesImages>

        
      </div>
    </main>
  );
}

export default AboutForm;
