import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import CommonSection from "../components/UI/commonSection/CommonSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = (data) => console.log(data);
  const notify = () => {
    toast.success("Signed in successfully", {
      position: "top-center",
      autoClose: 5000,
      pauseOnHover: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CE2829] to-[#9C1E1E] font-quattrocento">
      <CommonSection title="Login" />
      <div className="flex justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl w-full max-w-md space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-satisfy text-center text-gray-800">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to access your account
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email address"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-[#CE2829] focus:border-[#CE2829] sm:text-sm transition duration-150 ease-in-out"
                    {...register("email", { required: "Email is required" })}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-[#CE2829] text-xs">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Password"
                    className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-[#CE2829] focus:border-[#CE2829] sm:text-sm transition duration-150 ease-in-out"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                {errors.password && (
                  <p className="mt-1 text-[#CE2829] text-xs">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#CE2829] focus:ring-[#CE2829] border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#CE2829] hover:text-[#9C1E1E] transition duration-150 ease-in-out"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={notify}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#CE2829] hover:bg-[#9C1E1E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CE2829] transition duration-150 ease-in-out"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-medium text-[#CE2829] hover:text-[#9C1E1E] transition duration-150 ease-in-out"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
