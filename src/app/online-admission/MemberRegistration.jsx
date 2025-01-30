import { useForm } from "react-hook-form";
import ImageUpload from "../../components/EmergencyAnnouncement/ImageUpload";
import Checkbox from "../../components/OnlineAdmission/CheckBoxInput";
import FormInputGroup from "../../components/OnlineAdmission/FormInputGroup";
import { useEffect, useState } from "react";
import { API_URL } from "../../../utils/url_config";
import Swal from "sweetalert2";

const MemberRegistration = () => {
  const [studentImages, setStudentImages] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Medical Form Submitted:", data);
    // alert(JSON.stringify(data));

    const selectedCourseIds = Object.entries(data.selectedCourses)
      .filter(([key, value]) => value !== false)
      .map(([key, value]) => value);

    // const additionalCourseIds = Object.entries(data.additionalCourses)
    //   .filter(([key, value]) => value !== false)
    //   .map(([key, value]) => value);


    const finalData = {
      member_name: data?.memberName,
      member_photo: studentImages[0],
      member_father_name: data?.fatherName,
      member_mother_name: data?.motherName,
      member_nationality: data?.nationality,
      member_religion: data?.religion,
      member_birth_date: data?.birthDate,
      member_nid_no: data?.nidNumber,
      member_mobile_no: data?.phoneNumber,
      present_village: data?.currentVillage,
      present_post_office: data?.currentPostOffice,
      present_union: data?.currentUnion,
      present_district: data?.currentDistrict,
      permanent_village: data?.permanentVillage,
      permanent_post_office: data?.permanentPostOffice,
      permanent_union: data?.permanentUnion,
      permanent_district: data?.permanentDistrict,
      course_duration: data?.duration,
      course_ids: selectedCourseIds,
      member_education_qualification: data?.qualification,
      member_institute_name: data?.instituteName,
      member_institute_director_name: data?.directorName,
      member_institute_director_mobile_no: data?.directorPhoneNumber,
      member_institute_address: data?.instituteAddress,
      member_institute_registration_no: data?.registrationNumber,
      member_institute_website: data?.website,

      // guardian_phone_no: data?.guardianPhoneNumber,
      // shift_id: data?.shift,
      // admission_type: 'AMT',
      // additional_course_ids: additionalCourseIds,

    }

    // Handle form submission (e.g., send data to API)
    fetch(`${API_URL}/api/village-doctor-registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(finalData),
    })
      .then(response => response.json())


      .then(data => {
        console.log(data);
        if (data?.message !== 'Validation error') {
          Swal.fire({
            icon: 'success',
            title: 'সফলভাবে রেজিস্ট্রেশন করা হয়েছে',
            showConfirmButton: false,
            timer: 1500
          })
          document.getElementById("registrationForm").reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'দুঃখিত, রেজিস্ট্রেশন করা যায়নি',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })



  };
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllCourses = async () => {
    const response = await fetch(`${API_URL}/api/courses`);
    const data = await response.json();
    setCourses(data);
    setLoading(false);
  };

  useEffect(() => {
    getAllCourses();
  }, []);


  return (
    <div className="container mx-auto">
      <div className="w-full  rounded-lg text-black my-10">
        <h1 className="text-3xl lg:text-5xl font-semibold text-center mt-16 px-5 lg:px-0">
          নতুন সদস্য ফরম
        </h1>
        <p className="text-base text-center pt-4 px-5 lg:px-0">
          নিচের ফরমটি যথাযথভাবে পূরন করে {"Submit"} করুন । ({" "}
          <span className="text-red-500">* </span> )চিহ্নিত ঘর অবশ্যই পুরণ করতে
          হবে
        </p>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-[#D9D9D9] mt-10 p-5 rounded-md"
            id="memberForm"
          >
            <div className="grid grid-cols-1  md:grid-cols-6 gap-5 pb-4">
              {/* Form Input Groups */}

              <div className="md:col-span-1 flex justify-center md:justify-end items-center order-1 md:order-2 mt-5 md:mt-0">
                {/* <ImageUpload /> */}
                <ImageUpload StudentImageSet={setStudentImages} CurrentImages={studentImages} />
              </div>

              <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-5 order-2 md:order-1">
                <FormInputGroup
                  name="memberName"
                  label="সদস্যের নাম (In English):"
                  placeholder="Enter name"
                  register={register}
                  validation={{ required: "Student name is required" }}
                  error={errors.memberName}
                  className="w-full"
                />
                <FormInputGroup
                  name="fatherName"
                  label="পিতার নাম (In English):"
                  placeholder="Enter father's name"
                  register={register}
                  validation={{ required: "Father's name is required" }}
                  error={errors.fatherName}
                  className="w-full"
                />
                <FormInputGroup
                  name="motherName"
                  label="মাতার নাম (In English):"
                  placeholder="Enter mother's name"
                  register={register}
                  validation={{ required: "Mother's name is required" }}
                  error={errors.motherName}
                  className="w-full"
                />
                <FormInputGroup
                  name="nationality"
                  label="জাতীয়তা (In English):"
                  placeholder="Enter nationality"
                  register={register}
                  validation={{ required: "Nationality is required" }}
                  error={errors.nationality}
                  className="w-full"
                />
                <FormInputGroup
                  name="religion"
                  label="ধর্ম (In English):"
                  placeholder="Enter religion"
                  register={register}
                  validation={{ required: "Religion is required" }}
                  error={errors.religion}
                  className="w-full"
                />
              </div>

              {/* Image Upload */}
            </div>

            <hr className="w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-5">
              <FormInputGroup
                name="birthDate"
                label="জন্ম তারিখ (In English):"
                placeholder="Enter birth date"
                register={register}
                validation={{ required: "Birth date is required" }}
                error={errors.birthDate}
                className="w-full"
              />
              <FormInputGroup
                name="nidNumber"
                label="এনআইডি নম্বর (In English):"
                placeholder="Enter NID number"
                register={register}
                validation={{ required: "NID number is required" }}
                error={errors.nidNumber}
                className="w-full"
              />
              <FormInputGroup
                name="phoneNumber"
                label="ফোন নম্বর (In English):"
                placeholder="Enter phone number"
                register={register}
                validation={{ required: "Phone number is required" }}
                error={errors.phoneNumber}
                className="w-full"
              />
              <FormInputGroup
                name="qualification"
                label="শিক্ষাগত যোগ্যতা (In English):"
                placeholder="Enter educational qualification"
                register={register}
                validation={{ required: "Qualification is required" }}
                error={errors.qualification}
                className="w-full"
              />
            </div>

            <div className="mb-5">
              <FormInputGroup
                name="instituteName"
                label="যেই প্রতিষ্ঠান থেকে পল্লী চিকিৎসা শিক্ষা গ্রহণ করেছেন( In English ):"
                placeholder="Enter institution name"
                register={register}
                validation={{ required: "Institution name is required" }}
                error={errors.instituteName}
                className="col-span-1"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <FormInputGroup
                name="directorName"
                label="পরিচালকের নাম (In English):"
                placeholder="Enter director name"
                register={register}
                validation={{ required: "Director name is required" }}
                error={errors.directorName}
                className="w-full"
              />
              <FormInputGroup
                name="directorPhoneNumber"
                label="ফোন নাম্বার (In English):"
                placeholder="Enter director phone number"
                register={register}
                validation={{ required: "Director phone number is required" }}
                error={errors.directorPhoneNumber}
                className="w-full"
              />
            </div>

            <div className="mb-5">
              <FormInputGroup
                name="instituteAddress"
                label="প্রতিষ্ঠানের ঠিকানা( In English ):"
                placeholder="Enter institution address"
                register={register}
                validation={{ required: "Institution address is required" }}
                error={errors.instituteAddress}
                className="col-span-1"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <FormInputGroup
                name="registrationNumber"
                label="রেজিস্ট্রেশন নাম্বার( In English ):"
                placeholder="Enter registration number"
                register={register}
                validation={{ required: "Registration number is required" }}
                error={errors.registrationNumber}
                className="col-span-1"
              />
              <FormInputGroup
                name="website"
                label="ওয়েবসাইট( In English ):"
                placeholder="Enter director phone number"
                register={register}
                validation={{ required: "Director phone number is required" }}
                error={errors.website}
                className="col-span-1"
              />
            </div>
            <h1 className="text-base font-semibold mt-2">বর্তমান ঠিকানা</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5 mb-5">
              <FormInputGroup
                name="currentVillage"
                label="গ্রাম ( In English ):"
                placeholder="Enter village"
                register={register}
                validation={{ required: "Village is required" }}
                error={errors.currentVillage}
                className="col-span-1"
              />
              <FormInputGroup
                name="currentPostOffice"
                label="ডাকঘর ( In English ):"
                placeholder="Enter post office"
                register={register}
                validation={{ required: "Post office is required" }}
                error={errors.currentPostOffice}
                className="col-span-1"
              />
              <FormInputGroup
                name="currentUnion"
                label="ইউনিয়ন ( In English ):"
                placeholder="Enter union"
                register={register}
                validation={{ required: "Union is required" }}
                error={errors.currentUnion}
                className="col-span-1"
              />
              <FormInputGroup
                name="currentDistrict"
                label="জেলা ( In English ):"
                placeholder="Enter district"
                register={register}
                validation={{ required: "District is required" }}
                error={errors.currentDistrict}
                className="col-span-1"
              />
            </div>

            <hr className="w-full" />
            <h1 className="text-base font-semibold mt-5">স্থায়ী ঠিকানা</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
              <FormInputGroup
                name="permanentVillage"
                label="গ্রাম ( In English ):"
                placeholder="Enter village"
                register={register}
                validation={{ required: "Village is required" }}
                error={errors.permanentVillage}
                className="col-span-1"
              />
              <FormInputGroup
                name="permanentPostOffice"
                label="ডাকঘর ( In English ):"
                placeholder="Enter post office"
                register={register}
                validation={{ required: "Post office is required" }}
                error={errors.permanentPostOffice}
                className="col-span-1"
              />
              <FormInputGroup
                name="permanentUnion"
                label="ইউনিয়ন ( In English ):"
                placeholder="Enter union"
                register={register}
                validation={{ required: "Union is required" }}
                error={errors.permanentUnion}
                className="col-span-1"
              />
              <FormInputGroup
                name="permanentDistrict"
                label="জেলা ( In English ):"
                placeholder="Enter district"
                register={register}
                validation={{ required: "District is required" }}
                error={errors.permanentDistrict}
                className="col-span-1"
              />
            </div>

            <hr className="w-full " />

            {/* Checkbox Section */}
            <div className="w-full grid grid-cols-1 mt-5">
              <div className="col-span-1">
                <p className="text-xl font-semibold my-4">
                  যে বিষয়ে প্রশিক্ষণ নির্বাচন করতে সিলেক্ট করুন।
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-6">
              <div className="col-span-1 md:col-span-2 xl:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {/* <div className="col-span-1">
                  <Checkbox
                    id="rmp"
                    label="RMP"
                    register={register}
                    name="rmp"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="lmafp"
                    label="LMAFP"
                    register={register}
                    name="lmafp"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="dma"
                    label="DMA (Diploma Medical Assistance)"
                    register={register}
                    name="dma"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="dms"
                    label="DMS (Diploma in Medical Surgery)"
                    register={register}
                    name="dms"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="cma"
                    label="CMA (Community Medical Assistant)"
                    register={register}
                    name="cma"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="paramedicCertificate"
                    label="Certificate in Paramedic"
                    register={register}
                    name="paramedicCertificate"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="cmuUltrasonography"
                    label="CMU Ultrasonography"
                    register={register}
                    name="cmuUltrasonography"
                  />
                  <Checkbox
                    id="rmpVeterinary"
                    label="RMP Veterinary"
                    register={register}
                    name="rmpVeterinary"
                  />
                </div>
                <div className="col-span-1">
                  <Checkbox
                    id="xRayECGAssistant"
                    label="X-Ray / ECG Assistant"
                    register={register}
                    name="xRayECGAssistant"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="skinVD"
                    label="Skin / VD"
                    register={register}
                    name="skinVD"
                  />
                  <Checkbox
                    id="cpt"
                    label="CPT (Community Paramedic Training)"
                    register={register}
                    name="cpt"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="nursingDiploma"
                    label="Diploma in Patient Care (Nursing)"
                    register={register}
                    name="nursingDiploma"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="homeopathyParamedical"
                    label="Homeopathy Paramedical"
                    register={register}
                    name="homeopathyParamedical"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="firstAidVeterinary"
                    label="First Aid Veterinary"
                    register={register}
                    name="firstAidVeterinary"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="paramedicalVeterinary"
                    label="Paramedical Veterinary"
                    register={register}
                    name="paramedicalVeterinary"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="dentalDiploma"
                    label="Diploma in Dental"
                    register={register}
                    name="dentalDiploma"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                </div>
                <div className="col-span-1">
                  <Checkbox
                    id="diplomaPharmacy"
                    label="Diploma in Pharmacy"
                    register={register}
                    name="diplomaPharmacy"
                  />
                  <Checkbox
                    id="diplomaLabAssistant"
                    label="Diploma in Lab Assistant"
                    register={register}
                    name="diplomaLabAssistant"
                  />
                  <Checkbox
                    id="certificatePhysiotherapy"
                    label="Certificate in Physiotherapy"
                    register={register}
                    name="certificatePhysiotherapy"
                  />
                  <Checkbox
                    id="unaniAurbed"
                    label="Unani-Aurbed"
                    register={register}
                    name="unaniAurbed"
                  />
                  <Checkbox
                    id="pdtOrthopedic"
                    label="PDT Orthopedic"
                    register={register}
                    name="pdtOrthopedic"
                  />
                  <Checkbox
                    id="pptOphthalmology"
                    label="PPT Ophthalmology"
                    register={register}
                    name="pptOphthalmology"
                    validation={{
                      required: "You must agree to the terms and conditions",
                    }}
                  />
                  <Checkbox
                    id="caregiver"
                    label="Caegiver"
                    register={register}
                    name="caregiver"
                  />
                  <Checkbox
                    id="otAssistant"
                    label="OT Assistant"
                    register={register}
                    name="otAssistant"
                  />
                </div> */}
                <div className="col-span-2 flex flex-wrap justify-start items-center gap-5">
                  {courses?.data?.map((course) => (
                    <Checkbox
                      key={course.id}
                      id={`course_${course.id}`}
                      label={course.course_title}
                      register={register}
                      name="selectedCourses"
                      value={course.id}
                    />
                  ))}
                </div>
              </div>

              <div className="col-span-1">
                <table className="table-auto w-full border">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2">মেয়াদ (Duration)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        rowSpan="3"
                        className="border px-4 py-2 text-center align-top"
                      >
                        <select
                          {...register("duration", {
                            required: "Duration selection is required",
                          })}
                          className="border p-1 w-full"
                        >
                          <option value="">Select Duration</option>
                          <option value="3months">3 Months</option>
                          <option value="6months">6 Months</option>
                          <option value="1year">1 Year</option>
                          <option value="2years">2 Years</option>
                          <option value="3years">3 Years</option>
                          <option value="4years">4 Years</option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

export default MemberRegistration;
