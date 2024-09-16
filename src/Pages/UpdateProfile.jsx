import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      const { fullName, image} = data;

      updateUserProfile(fullName, image)
       .then(() => {
           toast.success('Update profile successfully')
        })
       .catch((error) => {
           toast.error(error.message.split("/")[1].split(")")[0])
        });
   };

  return (
    <div className="bg-gray-100 rounded-xl p-4 md:p-10">
      <h2 className="text-3xl mb-8 text-center font-semibold">Update Profile</h2>
      <div className="avatar flex justify-center">
        <div className="w-32 rounded-full">
          <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
        </div>
      </div>
      <h2 className="text-center mt-4 text-xl font-semibold">{user.email}</h2>
      <div className="animate__animated animate__fadeInDown md:w-3/4 lg:w-1/2 mx-auto rounded-xl p-4">
         <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input
               type="text"
               name="name"
               placeholder="name"
               className="input input-bordered"
               {...register("fullName", { required: true })}
             />
             {errors.fullName && <span className="text-red-500">This field is required</ span>}
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Photo URL</span>
             </label>
                <input
                  type="text"
                  {...register("image", { required: true })}
                  placeholder="photo URL"
                  className="input input-bordered"
                />
                {errors.image && <span className="text-red-500">This field is required</ span>}
           </div>
               <br />
            <input
               className="btn btn-accent w-full"
               type="submit"
               value="Update"
             />
         </form>
      </div>
    </div>
  );
};


export default UpdateProfile;
