import { RxCross2 } from "react-icons/rx";
import InputField from "../shared/InputField";
import { useForm } from "react-hook-form";
import ImageUpload from "./ImageUpload";

const EmergencyAnnouncement = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    // Handle form submission (e.g., send data to API)
  };
  return (
    <div className="container mx-auto my-10 px-10">
      <div className="bg-[#D9D9D9] w-full px-10 py-2 relative">
        <button className="absolute right-5 top-5 p-2 rounded-full bg-[#2D7DCE]">
          <RxCross2 className="text-red-600" />
        </button>
        <h1 className="text-2xl font-medium text-black">
          Emergancy Announcement :
        </h1>
        <p className="text-2xl font-medium text-black mt-7">
          Application for computer certificate by anyone other than branch
          office is strictly prohibited.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" mt-8">
        <div className="w-1/2 space-y-5">
          <div className="flex flex-col space-y-3">
            <label htmlFor="studentName" className="pl-2 text-2xl text-black">
              Student Name:
            </label>
            <InputField
              name="studentName"
              type="text"
              placeholder="Enter student's name"
              register={register}
              validation={{ required: "Student name is required" }}
              error={errors.studentName}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="fatherName" className="pl-2 text-2xl text-black">
              Father Name:
            </label>
            <InputField
              name="fatherName"
              type="text"
              placeholder="Enter father's name"
              register={register}
              validation={{ required: "Father name is required" }}
              error={errors.fatherName}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="motherName" className="pl-2 text-2xl text-black">
              Mother Name:
            </label>
            <InputField
              name="motherName"
              type="text"
              placeholder="Enter mother's name"
              register={register}
              validation={{ required: "Mother name is required" }}
              error={errors.motherName}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="dob" className="pl-2 text-2xl text-black">
              Date of Birth:
            </label>
            <InputField
              name="dob"
              type="date"
              placeholder="Enter date of birth"
              register={register}
              validation={{ required: "Date of birth is required" }}
              error={errors.dob}
            />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="dob" className="pl-2 text-2xl text-black">
              Student Image:
            </label>
            <ImageUpload />
          </div>

          <div className="flex flex-col ">
            <label
              htmlFor="studentPhoneNumber"
              className="pl-2 text-2xl text-black"
            >
              Student Phone Number:
            </label>
            <InputField
              name="studentPhoneNumber"
              type="tel"
              placeholder="Enter student's phone number"
              register={register}
              validation={{
                required: "Student phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number (must be 10 digits)",
                },
              }}
              error={errors.studentPhoneNumber}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="branchName" className="pl-2 text-2xl text-black">
              Branch Name:
            </label>
            <InputField
              name="branchName"
              type="text"
              placeholder="Enter branch name"
              register={register}
              validation={{ required: "Branch name is required" }}
              error={errors.branchName}
            />
          </div>

          <div className="flex flex-col ">
            <label
              htmlFor="branchContactNumber"
              className="pl-2 text-2xl text-black"
            >
              Branch Contact Number:
            </label>
            <InputField
              name="branchContactNumber"
              type="tel"
              placeholder="Enter branch contact number"
              register={register}
              validation={{
                required: "Branch contact number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number (must be 10 digits)",
                },
              }}
              error={errors.branchContactNumber}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="mt-6 text-xl text-white bg-[#0C7DCE] px-10 py-2 rounded-full font-semibold"
          >
            Submit
          </button>
          ˝
        </div>
      </form>
    </div>
  );
};

export default EmergencyAnnouncement;
