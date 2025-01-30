import { organizationStore } from "../../store/store";
import { useForm, Controller } from "react-hook-form";
import { FaWhatsapp, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const { handleSubmit, control, reset } = useForm();
  const { footerInfo } = organizationStore.useState();
  console.log(footerInfo);
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    Swal.fire("সফল আপডেট", "আপনার তথ্য সংরক্ষণ করা হয়েছে", "success");
    document.getElementById("support-form").reset();
  };

  const contactDetails = {
    whatsapp: "+8801234567890",
    linkedin: "https://www.linkedin.com/in/example-profile",
    email: "example@example.com",
    facebook: "https://www.facebook.com/example-profile",
  };

  return (
    <div className="container mx-auto">
      <div className="p-6 py-10 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          আমাদের সাথে যুক্ত হতে যোগাযোগ করুন
        </h2>

        {/* Contact Details */}

        <div className="flex flex-col justify-center items-center ">
          <p className="text-center mb-6 text-gray-600">
            {" "}
            আপনার যেকোনো প্রশ্ন বা তথ্য জানার জন্য আমাদের সাথে যোগাযোগ করুন।
            নিচের ফর্মটি পূরণ করে আপনার বার্তা পাঠান, আমরা শীঘ্রই উত্তর দেওয়ার
            চেষ্টা করব।
          </p>
        </div>
        {/* Contact Form */}
        <div className="flex justify-between items-center">
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" id="support-form">
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="আপনার নাম"
                    className="border p-2 rounded w-full"
                  />
                )}
                rules={{ required: "Name is required" }}
              />

              {/* Email Input */}
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="আপনার ইমেইল"
                    className="border p-2 rounded w-full"
                  />
                )}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                }}
              />

              {/* Phone Number Input */}
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="আপনার ফোন নাম্বার"
                    className="border p-2 rounded w-full"
                  />
                )}
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?\d{10,15}$/,
                    message: "Invalid phone number",
                  },
                }}
              />

              {/* Message Input */}
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    placeholder="আপনার বার্তা"
                    className="border p-2 rounded w-full"
                    rows="4"
                  />
                )}
                rules={{ required: "Message is required" }}
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded w-full"
              >
                পাঠান
              </button>
            </form>
          </div>
          <div className="w-1/2 hidden md:flex justify-center items-center">
            <div className="flex justify-center items-center mb-10">
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <FaWhatsapp className="text-green-500 text-2xl" />
                  <span className="text-gray-700">
                    <a
                      href={`https://wa.me/${footerInfo.optional_phone_number1}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {footerInfo.optional_phone_number1}
                    </a>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaLinkedin className="text-blue-700 text-2xl" />
                  <span className="text-gray-700">
                    <a
                      href={footerInfo.linkedin_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaEnvelope className="text-red-500 text-2xl" />
                  <span className="text-gray-700">
                    <a href={`mailto:${footerInfo.footer_email}`}>
                      {footerInfo.footer_email}
                    </a>
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaFacebook className="text-blue-600 text-2xl" />
                  <span className="text-gray-700">
                    <a
                      href={footerInfo.facebook_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
