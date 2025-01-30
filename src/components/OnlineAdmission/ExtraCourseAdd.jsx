import { API_URL } from "../../../utils/url_config";
import Checkbox from "./CheckBoxInput";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ExtraCourseAdd = ({ register }) => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getAdditionalCourses = async () => {
    const response = await fetch(`${API_URL}/api/additional-course`);
    const data = await response.json();
    setItems(data);
  };

  const handleAddItem = async () => {
    setError(null);
    const response = await fetch(`${API_URL}/api/additional-course`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ course_name: inputValue }),
    });
    const data = await response.json();
    if (data?.success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 300
      });
      setInputValue("");
      await getAdditionalCourses();
    } else {
      setError(data?.message);
    }
  };

  useEffect(() => {
    getAdditionalCourses();
  }, []);

  return (
    <div className="w-full">
      <div className="">
        <h3 className="font-bold">অতিরিক্ত কোর্স :</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-6">
          {items?.data?.map((item, index) => (
            <Checkbox
              key={index}
              id={`additional_course_${item?.id}`}
              label={item?.course_name}
              register={register}
              name={"additionalCourses"}
              value={item?.id}
            />
          ))}
        </div>
      </div>
      <div className=" flex flex-col  gap-2 mt-5">
        <label className="text-base text-black">
          আপনার প্রজনীয়ও কোর্সের নাম লিখুন{" "}
          <span className="text-red-600">*</span>
        </label>
        <input
          id={"courseName"}
          name="courseName"
          type="text"
          placeholder="Enter your course name"
          value={inputValue}
          onChange={handleInputChange}
          className="border w-64 border-gray-300 p-2 rounded"
        />
        {error && <p className="text-red-600">{error}</p>}
        <button
          onClick={handleAddItem}
          type="button"
          className="w-64 bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          যোগ করুন
        </button>
      </div>
    </div>
  );
};

export default ExtraCourseAdd;
