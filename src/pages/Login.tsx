import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-10">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Login
        </h1>

        {/* Login Form */}
        <form className="space-y-6">

          {/* Email */}
          <div>
            <label className="block text-lg mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-400 rounded-lg px-5 py-4 text-lg outline-none focus:border-blue-600"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-lg mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-400 rounded-lg px-5 py-4 text-lg outline-none focus:border-blue-600"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <div className="text-center mt-8 text-lg text-gray-600">

          <span>
            Don't have an account?{" "}
          </span>

          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;