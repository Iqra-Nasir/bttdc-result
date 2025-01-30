import { useState } from "react";
import FormInputGroup from "../OnlineAdmission/FormInputGroup";
import FileInput from "../shared/FileInput";
import { useForm } from "react-hook-form";
import { API_URL } from "../../../utils/url_config";
import Swal from "sweetalert2";

const ApplyForInstitute = () => {
  const [directorImage, setDirectorImage] = useState(null);
  const [instituteImage, setInstituteImage] = useState(null);
  const [nidFront, setNidFront] = useState(null);
  const [nidBack, setNidBack] = useState(null);
  const [signature, setSignature] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
  
    // Append text fields from form data
    for (let key in data) {
      formData.append(key, data[key]);
    }
  
    // Append file inputs
    if (directorImage) formData.append("director_image", directorImage);
    if (instituteImage) formData.append("institute_image", instituteImage);
    if (nidFront) formData.append("nid_front_image", nidFront);
    if (nidBack) formData.append("nid_back_image", nidBack);
    if (signature) formData.append("director_signature", signature);
  
    // Send form data to API
    fetch(`${API_URL}/api/institute`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if(data?.success){
          reset();
          Swal.fire({
            title: "Success",
            text: "Your application has been submitted successfully",
            icon: "success",
          });
        }else{
          Swal.fire({
            title: "Error",
            text: data.message,
            icon: "error",
          });
        }
      })
      
  };

  return (
    <div className="container mx-auto">
      <div className="w-full  rounded-lg text-black my-5">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center mt-16 px-5 lg:px-0">
          ইনস্টিটিউট এর জন্য আবেদন করুন
        </h1>
        <p className="text-base text-center pt-4 px-5 lg:px-0">
          নিচের ফরমটি যথাযথভাবে পূরন করে {"Submit"} করুন । ({" "}
          <span className="text-red-500">* </span> )চিহ্নিত ঘর অবশ্যই পুরণ করতে
          হবে
        </p>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className="w-full bg-[#D9D9D9] mt-10 p-5 xl:p-10 rounded-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-4">
              {/* ImageUpload Component on top for small devices */}

              {/* FormInputGroup Components below ImageUpload on small devices */}
              <FormInputGroup
                name="institute_name"
                label="প্রতিষ্টানের নাম  ( In English ):"
                placeholder="Enter Institute name"
                register={register}
                validation={{ required: "Institute name is required" }}
                error={errors.instituteName}
                className="col-span-2"
              />
              <FormInputGroup
                name="director_name"
                label="পরিচালকের নাম ( In English ):"
                placeholder="Enter Director name"
                register={register}
                validation={{ required: "Director name is required" }}
                error={errors.directorName}
                className="col-span-2"
              />

              <FormInputGroup
                name="father_name"
                label="পিতার নাম  ( In English ):"
                placeholder="Enter Father's name"
                register={register}
                validation={{ required: "Father's name is required" }}
                error={errors.fathersName}
                className="col-span-2 md:col-span-1"
              />
              <FormInputGroup
                name="mother_name"
                label="মাতার নাম ( In English ):"
                placeholder="Enter mother's name"
                register={register}
                validation={{ required: "Mother's name is required" }}
                error={errors.motherName}
                className="col-span-2 md:col-span-1"
              />
              <FormInputGroup
                name="email"
                label="ইমেইল ( In English ):"
                type="email"
                placeholder="Enter email "
                register={register}
                validation={{ required: "Email is required" }}
                error={errors.email}
                className="col-span-2 md:col-span-1"
              />
              <FormInputGroup
                name="phone_number"
                label="ফোন নম্বর ( In English ):"
                placeholder="Enter phone number"
                type="tel"
                register={register}
                validation={{ required: "Phone number is required" }}
                error={errors.phoneNumber}
                className="col-span-2 md:col-span-1"
              />
            </div>
            <hr className="w-full" />
            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
              <FileInput
                onFileChange={setDirectorImage}
                label={"পরিচালকের ছবি "}
              />
              <FileInput
                onFileChange={setInstituteImage}
                label={"প্রতিষ্টানের ছবি "}
              />
              <FileInput
                onFileChange={setNidFront}
                label={"ন্যাশনাল আইডি  ( ফন্ট )"}
              />
              <FileInput
                onFileChange={setNidBack}
                label={"ন্যাশনাল আইডি  ( ব্যাক )"}
              />
              <FileInput
                onFileChange={setSignature}
                label={"স্বাক্ষর"}
              />
            </div>
            <hr className="w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5 my-5">
              <FormInputGroup
                name="village"
                label="গ্রাম ( In English ):"
                placeholder="Enter village"
                register={register}
                validation={{ required: "Village is required" }}
                error={errors.currentVillage}
                className="col-span-1"
              />
              <FormInputGroup
                name="post_office"
                label="ডাকঘর ( In English ):"
                placeholder="Enter post office"
                register={register}
                validation={{ required: "Post office is required" }}
                error={errors.currentPostOffice}
                className="col-span-1"
              />
              <FormInputGroup
                name="union"
                label="ইউনিয়ন ( In English ):"
                placeholder="Enter union"
                register={register}
                validation={{ required: "Union is required" }}
                error={errors.currentUnion}
                className="col-span-1"
              />
              <FormInputGroup
                name="district"
                label="জেলা ( In English ):"
                placeholder="Enter district"
                register={register}
                validation={{ required: "District is required" }}
                error={errors.currentDistrict}
                className="col-span-1"
              />
            </div>
            <hr className="w-full" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 my-5">
              <FormInputGroup
                name="password"
                label="পাসওয়ার্ড :"
                placeholder="Enter your password"
                register={register}
                validation={{ required: "password is required" }}
                error={errors.password}
                className="col-span-1"
              />
              <FormInputGroup
                name="confirmPassword"
                label="কন্ফার্ম  পাসওয়ার্ড :"
                placeholder="Enter Confirm Password"
                register={register}
                validation={{ required: "Confirm Password is required" }}
                error={errors.confirmPassword}
                className="col-span-1"
              />
            </div>

            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-green-500 text-white px-20 py-2 rounded-lg"
              >
                জমা দিন
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyForInstitute;
