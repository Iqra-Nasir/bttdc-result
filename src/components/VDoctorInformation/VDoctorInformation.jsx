import RegistrationButton from "../OnlineAdmission/RegistrationButton";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../../utils/url_config";
import Swal from "sweetalert2";

const VDoctorInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const getStudent = async (reg) => {
    const response = await fetch(`${API_URL}/api/village-filter-by-registration/${reg}`);
    const data = await response.json();
    if (data.success) {
      if (data.isExpired) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'আপনার আইডি কার্ডের মেয়াদ শেষ হয়েছে অফিসে যোগাযোগ করুন',
          showConfirmButton: false,
          timer: 1000
        })
      }
      navigate(`/v-doctor-information/${reg}`);
    } else {
      if (data.success === false) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `${data.message}`,
          showConfirmButton: false,
          timer: 500
        })
      }
    }
    console.log(data);

  };

  const onSubmit = (data) => {
    getStudent(data.registrationNumber);
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center gap-8 py-16 bg-white">
        {/* Form Card */}
        <div className="w-80 bg-white border-2 border-blue-300 shadow-lg rounded-lg px-6 py-12">
          <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
            ডাক্তার নিবন্ধন ফর্ম
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 mb-4">
              <label
                htmlFor="registrationNumber"
                className="text-lg text-gray-700"
              >
                রেজিস্ট্রেশন নাম্বার
              </label>
              <input
                id="registrationNumber"
                name="registrationNumber"
                type="text"
                placeholder="আপনার রেজিস্ট্রেশন নাম্বার লিখুন"
                {...register("registrationNumber", {
                  required: "রেজিস্ট্রেশন নাম্বার প্রদান করা আবশ্যক",
                })}
                className="border-2 border-gray-300 p-3 rounded focus:border-blue-400 focus:outline-none"
              />
              {errors.registrationNumber && (
                <p className="text-red-600 text-sm">
                  {errors.registrationNumber.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              জমা দিন
            </button>
          </form>
        </div>
        {/* Divider and Link */}
        <div className="w-80 flex flex-col items-center px-6">
          <div className="flex justify-center items-center gap-5 w-full mb-5">
            <hr className="bg-gray-400 flex-1" /> অথবা{" "}
            <hr className="bg-gray-400 flex-1" />
          </div>

          <Link to={"/v-doctor-information/registration"}>
            <RegistrationButton name={"নতুন করে রেজিস্ট্রেশন করুন"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VDoctorInformation;
