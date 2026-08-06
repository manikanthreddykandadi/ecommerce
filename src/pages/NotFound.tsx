import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">

      <div className="text-center">

        <h1 className="text-7xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-3">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="
            inline-block
            mt-8
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            hover:bg-blue-700
            transition
          "
        >
          Go to Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;