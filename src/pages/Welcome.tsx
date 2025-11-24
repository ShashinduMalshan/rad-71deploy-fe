import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">

        {/* Logo/Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white tracking-tight">
            Welcome
          </h1>
          <p className="text-xl text-gray-300 max-w-md mx-auto">
            Start your journey with us today. Sign in to continue or create a new account.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          
          {/* Login Button */}
          <button
            onClick={goToLogin}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl"
          >
            Login
          </button>

          {/* Register Button */}
          <button
            onClick={goToRegister}
            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 border border-white/20 transform hover:scale-105 transition-all duration-200"
          >
            Register
          </button>
        </div>

        <div className="pt-8 text-gray-400 text-sm">
          Join thousands of users already on board
        </div>
      </div>

      {/* Background decorative circles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
    </div>
  );
}
