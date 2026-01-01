export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Graphics Design
        </h2>

        <p className="text-gray-600 mb-4">
          Learn Adobe Illustrator, Photoshop, CorelDraw and InDesign.
        </p>

        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center w-full">
          Enroll Now
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-80 ml-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Web Design</h2>

        <p className="text-gray-600 mb-4">
          Learn HTML, CSS, JavaScript and React from scratch.
        </p>

        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center w-full">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
