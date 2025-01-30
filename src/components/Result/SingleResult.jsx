import { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../../../utils/url_config";

const SingleResult = () => {
  const { id } = useParams();
  console.log(id);
  const [result, setResult] = useState({});


  useEffect(() => {
    fetch(`${API_URL}/api/student-result/${id}`)
      .then(res => res.json())
      .then(data => setResult(data))
  }, [id])
  const navigate = useNavigate();

  const handlePrint = () => {
    window.print();
  };

  const handleSearchAgain = () => {
    navigate(`/result`);
  };

  return (
    <div>
      <div className="container mx-auto bg-white px-4 py-10 sm:px-6 lg:px-8 no-print">
        {/* Student Profile Section */}
        <ResultCard data={result}/>

        {/* Exam Results Section */}
        <div className="flex justify-center gap-5 mt-4">
          <button
            onClick={handlePrint}
            className="bg-green-500 w-32 text-white font-bold py-2  rounded hover:bg-green-600"
          >
            প্রিন্ট
          </button>
          <button
            onClick={handleSearchAgain}
            className="bg-blue-500 w-32 text-white font-bold py-2  rounded hover:bg-blue-600"
          >
            আবার সার্চ করুন
          </button>
        </div>
      </div>

      <div className="print-only">
        <ResultCard data={result} />
      </div>
    </div>
  );
};

export default SingleResult;
