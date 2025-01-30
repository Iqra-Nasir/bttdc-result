import { useParams } from "react-router-dom";
import SingleRowResult from "./SingleRowResult";

const ResultCard = ({ data }) => {
  const { id: reg } = useParams();
  console.log(data);
  return (
    <div className="max-w-3xl border border-blue-500 rounded-xl shadow-md mx-auto my p-2 ">
      <div className="max-w-3xl mx-auto mb-5">
        <img src="/assets/banner3.png" alt="" />
      </div>
      <h1 className="text-center font-bold text-lg">
        Equivalent Result Publication
      </h1>
      <hr className="w-full bg-black" />
      <div className="space-y-[1px] mt-5 lg:mt-10">
        <SingleRowResult
          data1="Roll No"
          data2={data?.student?.student_roll}
          data3="Name"
          data4={data?.student?.student_name}
        />
        <SingleRowResult
          data1="Board"
          data2={data?.student?.admission_type}
          data3="Father's Name"
          data4={data?.student?.student_father_name}
        />
        <SingleRowResult
          data1="Group"
          data2="Science"
          data3="Mother's Name"
          data4={data?.student?.student_mother_name}
        />
        <SingleRowResult
          data1="Session"
          data2="2023-2024"
          data3="Registration No"
          data4={reg}
        />
        <SingleRowResult
          data1="Type"
          data2="Regular"
          data3="Date of Birth"
          data4={data?.student?.student_birth_date}
        />
        <SingleRowResult
          data1="Result"
          data2={data?.student?.failed ? 'Failed' : 'Passed'}
          data3="Institution"
          data4={data?.student?.institute_name}
        />
        <div className="w-full grid grid-cols-10 gap-[1px]">
          <div className="col-span-1 bg-[#EEEEEE] px-1 font-semibold text-[10px] md:text-[12px] lg:text-base">
            GPA
          </div>
          <div className="col-span-9 bg-[#EEEEEE] px-1 font-bold text-[10px] md:text-[12px] lg:text-base">
            {data?.gpa}
          </div>
        </div>
      </div>
      <h1 className="text-center font-bold text-lg mt-5">
        Subject-Wise Grade / Mark Sheet
      </h1>
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 border-b text-xs lg:text-base">
              <th className="px-1 border-r">Code</th>
              <th className="px-1 border-r">Subject</th>
              <th className="px-1 border-r">Grade</th>
            </tr>
          </thead>
          <tbody>
            
          {data?.results?.map((item, index) => (
            <tr className="border-b hover:bg-gray-50 text-xs lg:text-base" key={index}>
              <td className="px-1 border-r text-start font-normal ">{item.subject_code}</td>
              <td className="px-1 border-r text-start font-normal">{item.subject}</td>
              <td className="px-1 border-r text-start font-normal">{item.grade}</td>
            </tr>
          ))}
          
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <footer className="bg-[#0D1022] h-6 flex justify-center items-center text-xs  text-white mt-2">

        © সর্বস্বত্ব সংরক্ষিত বিটিটিডিসি দ্বারা
      </footer>
    </div>
  );
};

export default ResultCard;
