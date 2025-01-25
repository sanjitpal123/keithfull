import { useEffect, useState } from "react";
import FetchAboutHeading from "../services/AboutPage/FetchAboutHeading";
import Fetchhistoryall from "../services/AboutPage/FetchHistory";
import HistoryForm from "../components/HistoryForm";
import MissionVisionComponent from "../components/MissionVisionComponent";
import FetchManagement from "../services/AboutPage/FetchManagement";
import Postaboutheading_content_image from "../services/AboutPage/Postmethods/PostAboutHeadingContentAndImage";
import FetchCoreAndPrinciple from "../services/AboutPage/FetchCoreAndPrinciple";
import fetchwhykeith from "../services/AboutPage/Whykeith";

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
  const [whykeithdata, setwhykeithdata] = useState();
  const [whykeithdatatitle, setwhykeithdatatitle] = useState(null);
  const [whykeithdatacotent, setwhykeithdatacotent] = useState(null);
  const [videoPreview, setVideoPreview] = useState("");
  const [aboutImage, setAboutImage] = useState("");

  const handleInputChange1 = (e) => {
    const { name, value } = e.target;
    setAboutData1({ ...aboutData1, [name]: value });
  };

  const openEditing1 = () => {
    setIsEditing1(true);
  };

  function closeEditing1() {
    setIsEditing1(false);
  }

  function handleimagechange(e) {
    e.preventDefault();
    const files = e.target.files[0];
    SetAboutFile(files);
    if (files) {
      const fileurl = URL.createObjectURL(files);
      setAboutimageprev(fileurl);
    }
  }

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setIsEditing1(false);

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

  useEffect(() => {
    async function fetchingAbout() {
      try {
        const get = await FetchAboutHeading();
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

    async function fetchingHistory() {
      try {
        const get = await Fetchhistoryall();
        setHistoryData(get);
      } catch (error) {
        console.log(error);
      }
    }

    async function Fetchcoreandprinciple() {
      try {
        const res = await FetchCoreAndPrinciple();
        SetPrincipleData(res);
      } catch (error) {
        console.log("error", error);
      }
    }

    async function fetchkeith() {
      try {
        const get = await fetchwhykeith();
        if (get && get.length > 0) {
          const firstItem = get[0];
          setwhykeithdata(firstItem);
          setwhykeithdatatitle(firstItem.Title);
          setwhykeithdatacotent(firstItem.description);
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchingAbout();
    fetchingHistory();
    Fetchcoreandprinciple();
    fetchkeith();
  }, []);

  return (
    <main className="p-4 sm:p-6 bg-gradient-to-br from-gray-100 via-white to-gray-50 min-h-screen">
    <div className="bg-white shadow-xl rounded-xl overflow-hidden w-full max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-4xl font-bold p-4 sm:p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center">
        About Page Management
      </h2>
  
      <div className="p-4 sm:p-6 space-y-8">
        {/* About Section */}
        <section className="border-b pb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">About Section</h3>
          <form className="space-y-6" onSubmit={handleSubmit1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">Heading</label>
                <input
                  type="text"
                  value={AboutHeading}
                  onChange={(e) => setAboutHeading(e.target.value)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter heading"
                  disabled={!isEditing1}
                />
              </div>
  
              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  value={AboutContent}
                  onChange={(e) => setAboutContent(e.target.value)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter description"
                  rows={3}
                  disabled={!isEditing1}
                />
              </div>
  
              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">Image</label>
                <input
                  type="file"
                  onChange={handleimagechange}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  disabled={!isEditing1}
                />
                {Aboutimageprev && (
                  <img
                    src={Aboutimageprev}
                    alt="Preview"
                    className="mt-4 w-full h-auto rounded-lg shadow-md"
                  />
                )}
              </div>
            </div>
  
            {isEditing1 && (
              <div className="flex flex-wrap justify-start gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={closeEditing1}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Cancel
                </button>
              </div>
            )}
  
            {!isEditing1 && (
              <button
                type="button"
                onClick={openEditing1}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Edit
              </button>
            )}
          </form>
        </section>
  
        {/* History Section */}
        <section className="border-b pb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">History</h3>
          {historyData?.map((data) => (
            <HistoryForm key={data._id} data={data} isEditing2={isEditing2} />
          ))}
        </section>
  
        {/* Principles & Core Values Section */}
        <section className="border-b pb-6">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Principles & Core Values</h3>
          {GetPrincipleData?.map((item) => (
            <MissionVisionComponent
              key={item.id}
              data={item}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </section>
  
        {/* Why Us Section */}
        <section>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Why Us?</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">Heading</label>
                <input
                  type="text"
                  value={whykeithdatatitle}
                  onChange={(e) => setwhykeithdatatitle(e.target.value)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  value={whykeithdatacotent}
                  onChange={(e) => setwhykeithdatacotent(e.target.value)}
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows={3}
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </main>
  
  );
}

export default AboutForm;
