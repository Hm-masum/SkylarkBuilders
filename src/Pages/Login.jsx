import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import 'animate.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleLogin,githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then((result) => {
        toast.success('User login successfully')
        if (result.user) {
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        toast.error(error.message.split("/")[1].split(")")[0])
      });
  };

  // handle googleLogin
  const handleGoogleSignIn = () => {
    googleLogin().then(() => {
      toast.success('User login successfully')
      navigate(location?.state || "/");
    });
  };
  
  // handle githubSignIn
  const handleGithubSignIn = () => {
    githubLogin().then(() => {
      toast.success('User login successfully')
      navigate(location?.state || "/");
    });
  }


  return (
    <div className="bg-gray-100 rounded-xl p-4 md:p-10">
      <h2 className="text-3xl mb-8 text-center font-semibold">Please Login</h2>
      <div className="animate__animated animate__slideInLeft md:w-3/4 lg:w-1/2 mx-auto bg-white rounded-xl p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                className="w-full input input-bordered"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: true })}
                placeholder="Password"
              />
              {errors.password && <span>This field is required</span>}
              <span
                className="absolute top-4 right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
          </div>
          <br />
          <input
            className="btn btn-accent w-full"
            type="submit"
            value="Login"
          />
        </form>
        <p className="my-3">
          Do not have an account please{" "}
          <Link to={`/register`} className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
        <div className="divider">Continue With</div>
        <div className="flex justify-center gap-4">
           <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent">
          Google </button>
           <button onClick={handleGithubSignIn} className="btn btn-outline btn-secondary">
          Github </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
