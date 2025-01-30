import { useEffect, useState } from "react";
import { API_URL } from "../../../utils/url_config";
import SectionSkeleton from "../Skeleton/SectionSkeleton";


const Academic = () => {
  const [academicData, setAcademicData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAcademicDetails = async () => {
    const response = await fetch(`${API_URL}/api/custom-sections/academic`);
    const data = await response.json();
    console.log(data);
    setAcademicData(data);
    setLoading(false);
  };

  useEffect(() => {
    getAcademicDetails();
  }, []);
  return (
    <div className="container mx-auto bg-white pb-10">
      {loading ? (
        <SectionSkeleton/>
      ) : (
        academicData?.data?.map((details, index) => (
          <div
            key={index}
          className={`flex flex-col md:flex-row items-center ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="w-full md:w-1/2 px-4 py-6">
            <h2 className="font-bold text-2xl text-center mb-4">
              {details.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {details?.description}
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[400px] relative">
            <img
              src={`${API_URL}/uploads/custom_section/${details?.attachment}`}
              alt={details.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        ))
      )}
    </div>
  );
};

export default Academic;
