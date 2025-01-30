import { useForm } from "react-hook-form";
import InputField from "../shared/InputField";
import Swal from "sweetalert2";

const formFields = [
  {
    label: "নাম",
    name: "name",
    type: "text",
    placeholder: "আপনার নাম লিখুন",
    validation: { required: "নাম আবশ্যক" },
  },
  {
    label: "ইমেল",
    name: "email",
    type: "email",
    placeholder: "আপনার ইমেল লিখুন",
    validation: {
      required: "ইমেল আবশ্যক",
      pattern: {
        value: "^[\\w-.]+@[\\w-]+\\.[\\w-]{2,4}$",
        message: "ইমেল ঠিকানা সঠিক নয়",
      },
    },
  },
  {
    label: "নম্বর",
    name: "number",
    type: "tel",
    placeholder: "আপনার নম্বর লিখুন",
    validation: { required: "নম্বর আবশ্যক" },
  },
  {
    label: "বার্তা",
    name: "message",
    type: "text",
    placeholder: "আপনার বার্তা লিখুন",
    validation: { required: "বার্তা আবশ্যক" },
  },
];

const SupportForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("ফর্ম জমা দেওয়া হয়েছে:", data);
    Swal.fire("সফল আপডেট", "আপনার তথ্য সংরক্ষণ করা হয়েছে", "success");
    document.getElementById("support-form").reset();
    // Handle form submission (e.g., send data to API)
  };

  return (
    <div className="container mx-auto bg-white px-8 pb-10">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
        {/* বড় পর্দার জন্য বাম ছবি */}

        {/* বড় পর্দার জন্য ফর্ম */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            অনুগ্রহ করে যোগাযোগ করুন এবং আমাদের বিশেষজ্ঞ সহায়তা দল আপনার সমস্ত
            প্রশ্নের উত্তর দেবে
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" id='support-form'>
            {formFields.map((field, index) => (
              <div key={index} className="grid grid-cols-5 gap-5">
                <label
                  htmlFor={field.name}
                  className="col-span-1 text-lg p-0 m-0 leading-none font-medium text-gray-700 "
                >
                  {field.label}
                </label>
                <div className="col-span-4">
                  <InputField
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    register={register}
                    validation={field.validation}
                    error={errors[field.name]}
                  />
                </div>
              </div>
            ))}

            <button className="bg-green-500 text-white px-6 py-3 rounded-md font-semibold text-base md:text-lg hover:bg-green-700 transition duration-300 w-full ">
              পাঠান
            </button>
          </form>
        </div>

        <div className="hidden lg:block lg:w-1/2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/483/658/original/of-online-learning-illustration-vector.jpg"
            alt="সহায়তা চিত্রণ"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SupportForm;
