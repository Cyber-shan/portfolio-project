

export default function Navbar(){
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-blue-400">
          Tailwind is working 🚀
        </h1>

        <p className="text-gray-300 text-lg">
          If you see colors, spacing, and layout — you're good.
        </p>

        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-semibold transition">
          Click Me
        </button>
      </div>
    </div>
  );
}