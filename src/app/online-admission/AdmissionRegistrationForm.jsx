import { useEffect, useState } from "react";
import ImageUpload from "../../components/EmergencyAnnouncement/ImageUpload";
import Checkbox from "../../components/OnlineAdmission/CheckBoxInput";
import ExtraCourseAdd from "../../components/OnlineAdmission/ExtraCourseAdd";
import FormInputGroup from "../../components/OnlineAdmission/FormInputGroup";
import FormSelectInput from "../../components/OnlineAdmission/FormSelectInput";
import { useForm } from "react-hook-form";
import { organizationStore } from "../../store/store";
import { API_URL } from "../../../utils/url_config";
import Swal from "sweetalert2";

const AdmissionRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [studentImages, setStudentImages] = useState([]);

  const registrationStudent = async (data) => {
    const response = await fetch(`${API_URL}/api/student-registration`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }, 
    });
    const responseData = await response.json();
    if(responseData?.success){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your information has been saved",
        showConfirmButton: false,
        timer: 500
      });
      document.getElementById("registrationForm").reset();
    }else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 500
      });
    }
  };
    

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));

    const selectedCourseIds = Object.entries(data.selectedCourses)
      .filter(([key, value]) => value !== false)
      .map(([key, value]) => value);

    const additionalCourseIds = Object.entries(data.additionalCourses)
      .filter(([key, value]) => value !== false)
      .map(([key, value]) => value);

    const finalData = {
      student_name: data?.studentName,
      student_photo: studentImages[0],
      student_father_name: data?.fatherName,
      student_mother_name: data?.motherName,
      student_nationality: data?.nationality,
      student_gender: data?.gender,
      student_religion: data?.religion,
      student_birth_date: data?.birthDate,
      student_nid_birth_certificate: data?.nidNumber,
      student_phone_no: data?.phoneNumber,
      guardian_phone_no: data?.guardianPhoneNumber,
      shift_id: data?.shift,
      admission_type: 'BTTDC',
      course_ids: selectedCourseIds,
      additional_course_ids: additionalCourseIds,
      duration_id: data?.duration,
      student_present_village: data?.currentVillage,
      student_present_post_office: data?.currentPostOffice,
      student_present_union: data?.currentUnion,
      student_present_district: data?.currentDistrict,
      student_permanent_village: data?.permanentVillage,
      student_permanent_post_office: data?.permanentPostOffice,
      student_permanent_union: data?.permanentUnion,
      student_permanent_district: data?.permanentDistrict,
    };

    registrationStudent(finalData);

  
  };
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { durations, shifts } = organizationStore.useState();

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
          বাংলাদেশ কারিগরি প্রশিক্ষণ ও অগ্রগতি কেন্দ্র
        </h1>
        <h1 className="text-2xl lg:text-4xl font-medium text-center mt-2">
          নতুন ভর্তিচ্ছুক শিক্ষার্থী ফরম
        </h1>
        <p className="text-base text-center pt-4 px-5 lg:px-0">
          নিচের ফরমটি যথাযথভাবে পূরন করে {"জমা"} করুন । ({" "}
          <span className="text-red-500">* </span> )চিহ্নিত ঘর অবশ্যই পুরণ করতে
          হবে
        </p>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full bg-[#D9D9D9] mt-10 p-5 xl:p-10 rounded-md"
            id='registrationForm'
          >
            <div className="grid grid-cols-1 md:grid-cols-6 gap-5 pb-4">
              {/* ImageUpload Component on top for small devices */}
              <div className="md:col-span-1 flex justify-center md:justify-end items-center order-1 md:order-2">
                <ImageUpload StudentImageSet={setStudentImages} CurrentImages={studentImages}/>
              </div>

              {/* FormInputGroup Components below ImageUpload on small devices */}
              <div className="md:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-5 order-2 md:order-1">
                <FormInputGroup
                  name="studentName"
                  label="ছাত্র/ছাত্রীর পূর্ণ নাম ( In English ):"
                  placeholder="Enter name"
                  register={register}
                  validation={{ required: "Student name is required" }}
                  error={errors.studentName}
                  className="col-span-1"
                />
                <FormInputGroup
                  name="fatherName"
                  label="পিতার নাম ( In English ):"
                  placeholder="Enter father's name"
                  register={register}
                  validation={{ required: "Father's name is required" }}
                  error={errors.fatherName}
                  className="col-span-1"
                />
                <FormInputGroup
                  name="motherName"
                  label="মাতার নাম ( In English ):"
                  placeholder="Enter mother's name"
                  register={register}
                  validation={{ required: "Mother's name is required" }}
                  error={errors.motherName}
                  className="col-span-1"
                />
                <FormInputGroup
                  name="nationality"
                  label="জাতীয়তা( In English ):"
                  placeholder="Enter nationality"
                  register={register}
                  validation={{ required: "Nationality is required" }}
                  error={errors.nationality}
                  className="col-span-1"
                />
                <FormSelectInput
                  name="gender"
                  label="লিঙ্গ( In English ):"
                  register={register}
                  validation={{ required: "Nationality is required" }}
                  error={errors.nationality}
                  className="col-span-1"
                />
                <FormInputGroup
                  name="religion"
                  label="ধর্ম( In English ):"
                  placeholder="Enter religion"
                  register={register}
                  validation={{ required: "Religion is required" }}
                  error={errors.religion}
                  className="col-span-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
              <FormInputGroup
                name="birthDate"
                label="জন্ম তারিখ ( In English ):"
                placeholder="Enter birth date"
                type="date"
                register={register}
                validation={{ required: "Birth date is required" }}
                error={errors.birthDate}
                className="col-span-1"
              />
              <FormInputGroup
                name="nidNumber"
                label="এনআইডি নম্বর / জন্মনিবন্দন নম্বর ( In English ):"
                placeholder="Enter NID number"
                register={register}
                validation={{ required: "NID number is required" }}
                error={errors.nidNumber}
                className="col-span-1"
              />
              <FormInputGroup
                name="phoneNumber"
                label="ফোন নম্বর ( In English ):"
                placeholder="Enter phone number"
                register={register}
                validation={{ required: "Phone number is required" }}
                error={errors.phoneNumber}
                className="col-span-1"
              />
              <FormInputGroup
                name="guardianPhoneNumber"
                label="অভিভাবকের ফোন নম্বর ( In English ):"
                placeholder="Enter guardian's phone number"
                register={register}
                validation={{ required: "Guardian's phone number is required" }}
                error={errors.guardianPhoneNumber}
                className="col-span-1"
              />
            </div>
            <hr className="w-full" />
            <h1 className="text-base font-semibold mt-2">বর্তমান ঠিকানা</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
              {/* Checkbox Options */}
              <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="col-span-1 sm:col-span-2">
                  <p className="text-xl font-semibold my-4">
                    আপনি কোন বিষয়ের পরীক্ষায় অংশগ্রহণ করতে চান? নির্বাচন করুন।
                  </p>
                </div>
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

              {/* Shift Selection Table */}
              <div className="col-span-1 lg:col-span-2">
                <div className="col-span-1">
                  <p className="text-xl font-semibold my-4">
                    আপনি কোন ব্যাচ পছন্দ করেন এবং কোন শিফট চান, নির্বাচন করুন।
                  </p>
                </div>
                <table className="table-auto w-full border border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2">শিফট</th>
                      <th className="border px-4 py-2">সময় (Time)</th>
                      <th className="border px-4 py-2">নির্বাচন করুন</th>
                      <th className="border px-4 py-2">মেয়াদ (Duration)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shifts?.data?.map((shift, index) => (
                      <tr key={shift.id}>
                        <td className="border px-4 py-2">{shift.shift_name}</td>
                        <td className="border px-4 py-2">
                          {shift.time_duration}
                        </td>
                        <td className="border px-4 py-2 text-center">
                          <input
                            type="radio"
                            {...register("shift", {
                              required: "Shift selection is required",
                            })}
                            value={shift.id}
                            id={`shift_${shift.id}`}
                          />
                        </td>
                        {/* Render the duration select only once, with a rowspan that spans all shift rows */}
                        {index === 0 && (
                          <td
                            rowSpan={shifts.data.length}
                            className="border px-4 py-2 text-center align-top"
                          >
                            <select
                              {...register("duration", {
                                required: "Duration selection is required",
                              })}
                              className="border p-1 w-full"
                            >
                              <option value="">Select Duration</option>
                              {durations?.data?.map((duration) => (
                                <option key={duration.id} value={duration.id}>
                                  {duration.duration}
                                </option>
                              ))}
                            </select>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="w-full" />
            <div className="w-full mt-5">
              <ExtraCourseAdd register={register} watch={watch} />
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

export default AdmissionRegistrationForm;
