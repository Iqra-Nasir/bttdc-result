import RegistrationButton from "./RegistrationButton";
import { Link } from "react-router-dom";

const OnlineAdmission = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-white  text-black px-5 xl:px-20 py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-center font-semibold">অনলাইন ভর্তি</h1>
          <p className="text-xl text-center mt-6">
            আমাদের প্রতিষ্ঠান এখন অনলাইন ভর্তি প্রক্রিয়া সরবরাহ করছে, যা আপনার
            ভর্তি প্রক্রিয়াকে আরও সহজ এবং দ্রুত করবে। অনলাইন ভর্তি সুবিধার
            মাধ্যমে আপনি ঘরে বসেই আপনার আবেদন সম্পন্ন করতে পারবেন। আমাদের
            ওয়েবসাইটে প্রয়োজনীয় তথ্য পূরণ করে, ডকুমেন্ট আপলোড করে এবং অনলাইনে
            ফি পরিশোধ করে আপনার ভর্তি প্রক্রিয়া সম্পন্ন করুন।
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
            <Link to={"/online-admission/admission-registration"}>
              <RegistrationButton name={"BTTDC রেজিস্ট্রেশন"} />
            </Link>
            <Link to={"/online-admission/amt-registration"}>
              <RegistrationButton name={"AMT রেজিস্ট্রেশন"}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineAdmission;
