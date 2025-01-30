import { useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { API_URL } from "../../../utils/url_config";
import ListSkeleton from "../Skeleton/ListSkeleton";
import SectionSkeleton from "../Skeleton/SectionSkeleton";
import { Link, useLocation } from "react-router-dom";

const CourseTable = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [courseDetails, setCourseDetails] = useState(null);

  // extract current route
  const currentRoute = useLocation();

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch(`${API_URL}/api/courses`);
        const data = await response.json();

        if (currentRoute?.pathname.includes("bsc")) {
          const bscCourses = data?.data?.filter(
            (course) => course?.course_type === "bsc"
          );
          setCourses(bscCourses);
          setCourseDetails(bscCourses?.[0]);
        } else if (currentRoute?.pathname.includes("short")) {
          const shortCourses = data?.data?.filter(
            (course) => course?.course_type === "short_course"
          );
          setCourses(shortCourses);
          setCourseDetails(shortCourses?.[0]);
        } else if (currentRoute?.pathname.includes("diploma")) {
          const diplomaCourses = data?.data?.filter(
            (course) => course?.course_type === "diploma"
          );
          setCourses(diplomaCourses);
          setCourseDetails(diplomaCourses?.[0]);
        } else {
          setCourses(data?.data);
          setCourseDetails(data?.data?.[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        setLoading(false);
      }
    };

    getCourses();
  }, [currentRoute]);

  return (
    <div className="p-10">
      {/* Circle Card Carousel */}
      <div className="container mx-auto bg-white rounded-lg p-5 relative">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-semibold">
            আমাদের কোর্স গুলো
          </h2>
        </div>

        {loading ? (
          <SectionSkeleton />
        ) : courses?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {courses?.map((course) => (
              <div
                onClick={() => setCourseDetails(course)}
                className="w-full bg-slate-200/25 rounded-lg pt-3 px-3 pb-1 cursor-pointer shadow"
                key={course?.id}
              >
                <img
                  className="w-full max-h-[200px] min-h-[200px] object-cover rounded-lg"
                  src={`${API_URL}/uploads/course/${course?.course_image}`}
                  alt={course?.course_title}
                />
                <div className="my-3 flex justify-between items-center">
                  <h4 className="text-orange-950 font-thin">
                    {course?.course_title}
                  </h4>
                  {/* badges */}
                  <p className="bg-yellow-400 font-extralight text-gray-900 px-2 py-1 rounded-full text-xs">
                    {course?.course_type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center  mt-10 text-red-400 ">
            No course found for this category
          </p>
        )}

        {/* Course Details table */}
        {loading ? (
          <ListSkeleton />
        ) : (
          <>
            {courseDetails && (
              <>
                <div className="w-full h-[1px] bg-gray-300 my-5"></div>
                <div className="">
                  <h3 className="text-xl font-semibold text-center">
                    {courseDetails?.course_title}
                  </h3>
                  <div className="w-full h-[1px] bg-gray-300 my-5"></div>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100 text-gray-700">
                          <th className="py-2 px-4 border border-gray-300">
                            Course Description
                          </th>
                          <th className="py-2 px-4 border border-gray-300">
                            Course Type
                          </th>
                          <th className="py-2 px-4 border border-gray-300">
                            Qualification
                          </th>
                          <th className="py-2 px-4 border border-gray-300">
                            Course Duration
                          </th>
                          <th className="py-2 px-4 border border-gray-300">
                            Total Subject
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-center text-gray-800">
                          <td className="py-2 px-4 border border-gray-300">
                            {courseDetails?.course_description}
                          </td>
                          <td className="py-2 px-4 border border-gray-300">
                            {courseDetails?.course_type}
                          </td>
                          <td className="py-2 px-4 border border-gray-300">
                            {courseDetails?.qualification}
                          </td>
                          <td className="py-2 px-4 border border-gray-300">
                            {courseDetails?.duration?.duration}
                          </td>
                          <td className="py-2 px-4 border border-gray-300">
                            {courseDetails?.subjects?.length}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CourseTable;
