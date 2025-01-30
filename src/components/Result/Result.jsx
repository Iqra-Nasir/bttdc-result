import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../utils/url_config";
import Swal from "sweetalert2";

const Result = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const getResult = async (reg) => {
    const response = await fetch(`${API_URL}/api/student-result/${reg}`);
    const data = await response.json();
    if (data.message !== 'Student not found') {

      navigate(`/result/${reg}`);
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Given ID is not valid',
        showConfirmButton: false,
        timer: 500
      })
    }
    console.log(data);
  };

  const onSubmit = (data) => {
    console.log("Medical Form Submitted:", data);
    getResult(data.id);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center gap-28  bg-white ">
        <div className="w-1/2 hidden md:flex justify-end items-center">
          <img src="/assets/result.png" className="w-96 h-96" alt="Result" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center py-10 md:py-0">
          <div className="w-72 bg-white border shadow-md rounded-md p-5">
            <p className="text-2xl font-semibold text-center mb-5">ফলাফল</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2 mb-3">
                <label htmlFor="id" className="text-base text-black">
                  আইডি নাম্বার
                </label>
                <input
                  id="id"
                  name="id"
                  type="text"
                  placeholder="আপনার আইডি লিখুন"
                  {...register("id", { required: "ID is required" })}
                  className="border border-gray-300 p-2 rounded"
                />
                {errors.id && (
                  <p className="text-red-600 text-sm">{errors.id.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="mt-4 w-full bg-green-500 text-white p-2 rounded shadow-lg"
              >
                জমা করুন
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
