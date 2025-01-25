function HomeForm() {
    return (
        <main className="p-4 sm:p-6 bg-gray-50 min-h-screen">
          {/* Form container */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold  p-4 bg-gray-800 text-white">
              Home
            </h2>
            <form className="space-y-6 p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Hero heading */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Hero Heading
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>
                {/* Hero description */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Hero description
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>
                {/* Hero video */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Hero Video
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* ............................ */}
                {/* Home about heading */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Home About Heading
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>
                {/* home about description */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Short About
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Write something..."
                  ></textarea>
                </div>
                {/* home about image */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Home About Image
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* ............................ */}
                {/* home products image 1 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Products image 1
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* home products image 2 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Products image 2
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* home products image 3 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Products image 3
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* ....................... */}
                {/* Person image 1 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Person image 1
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Person name 1 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name of person 1
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>
                {/* Person 1 designation */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Designation of person 1
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>

                {/* Person image 2 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Person image 2
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* Person name 2 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Name of person 2
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>
                {/* Person 2 designation */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Designation of person 2
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>
                {/* pride and inspiration description */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Inspiration description
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Write something..."
                  ></textarea>
                </div>
                {/* ..................... */}
                {/* awards image 1 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Awards image 1
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* awards image 2 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Awards image 2
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* awards image 3 */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Awards image 3
                  </label>
                  <input
                    type="file"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                {/* awards description */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Awards description
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Write something..."
                  ></textarea>
                </div>
                {/* ................................ */}
                {/* testimonial heading */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Testimonial heading
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter value"
                  />
                </div>
                {/* testimonial description */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Testimonial description
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows="4"
                    placeholder="Write something..."
                  ></textarea>
                </div>
                {/*  */}
              </div>

              <button
                type="submit"
                className="sm:w-[120px] px-3 py-2 bg-blue-600 text-white sm:py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                Submit
              </button>
            </form>
          </div>
        </main>
    )
}

export default HomeForm
