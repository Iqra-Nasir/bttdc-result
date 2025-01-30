import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../utils/url_config";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver'; // Import FileSaver.js



const SingleVDoctor = () => {
  const [singleVDoctorbgLayout, setSingleVDoctorbgLayout] = useState({});
  const printRef = useRef();

  // Function to handle printing
  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload the page to restore the original content
  };

  const downloadIdCard = async () => {
    if (printRef.current) {
      try {
        // Capture the printRef element as an image using html2canvas
        const canvas = await html2canvas(printRef.current, { useCORS: false, scale: 2 });
        // Convert the canvas to a data URL
        const dataUrl = canvas.toDataURL("image/png");
        // Download the image
        saveAs(dataUrl, "ID_Card.png");
      } catch (error) {
        console.error("Error capturing the ID card:", error);
      }
    }
  };


  const { registrationNumber } = useParams();
  console.log(registrationNumber, "registration number");
  const [singleVDoctor, setSingleVDoctor] = useState({});

  useEffect(() => {
    const getSingleVDoctor = async () => {
      const response = await fetch(`${API_URL}/api/village-filter-by-registration/${registrationNumber}`);
      const data = await response.json();
      setSingleVDoctor(data);
    };
    getSingleVDoctor();
  }, [registrationNumber]);

  useEffect(() => {
    const getSingleVDoctorbglayout = async () => {
      const response = await fetch(`${API_URL}/api/v-doctor-id-card-design`);
      const data = await response.json();
      setSingleVDoctorbgLayout(data);
    };
    getSingleVDoctorbglayout();
  }, []);

  const downloadTxtFile = () => {
    console.log("download logic goes here")
  }

  console.log(singleVDoctor, "singleVDoctorbgLayout");

  return (
    <div className="container mx-auto bg-white rounded-md flex flex-col justify-center items-center py-10">
      <h1 className="text-2xl font-semibold">আইডি কার্ড</h1>
      <div ref={printRef} id="download-id">
        <div className="flex gap-5">
          <div className="front-card-design bg-no-repeat bg-cover w-[350px] h-[500px] relative" style={{ backgroundImage: `url(${API_URL}/uploads/village_doctor_id_card_design/front/${singleVDoctorbgLayout?.data?.design_image_front})` }}>
            <div className="owner-image w-[120px] h-[120px] rounded-full border-2 border-gray-300 overflow-hidden absolute top-[173px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={`${API_URL}/uploads/village_doctor/${singleVDoctor?.data?.member_photo}`} alt="Owner Image" className=" w-full h-full" />
            </div>
            <div className="absolute flex justify-center w-full start-50 translate-middle-x text-[18px] top-[55%]"><span className="text-[#24b04b] font-bold leading-5">{singleVDoctor?.data?.member_name}</span></div>
            <div className="absolute px-1 py-2 bottom-[60px] left-[70px]">
              <div className=" text-[#24b04b] member-name flex items-center gap-2 text-sm w-[200px]">
                <label className="text-[#24b04b] font-semibold">Reg No:</label>
                <span className=" px-2 py-1 leading-5">{singleVDoctor?.data?.registration_no}</span>
              </div>
              <div className="text-[#24b04b] member-phn-no flex items-center gap-2 text-sm mt-4">
                <label className="text-[#24b04b] font-semibold">Phone:</label>
                <span className="">{singleVDoctor?.data?.member_mobile_no}</span>
              </div>
              <div className="text-[#24b04b] member-phn-no flex items-center gap-2 text-sm mt-4">
                <label className="text-[#24b04b] font-semibold">Nationality:</label>
                <span className="">{singleVDoctor?.data?.member_nationality}</span>
              </div>
            </div>
          </div>
          <div className="relative back-card-design bg-no-repeat bg-center bg-cover w-[350px] h-[500px]" style={{ backgroundImage: `url(${API_URL}/uploads/village_doctor_id_card_design/back/${singleVDoctorbgLayout?.data?.design_image_back})` }}>
            <div className="absolute px-1 py-2 top-[50%] left-[42px]">
              <div className="member-name flex items-start gap-2 text-[18px] font-bold">
                <label className="mr-[10px]">DOB</label>
                <span className=" px-2 py-1 leading-5">: {singleVDoctor?.data?.member_birth_date}</span>
              </div>
              <div className="member-name flex items-start gap-2 text-[18px] font-bold">
                <label className="mr-[20px]">NID</label>
                <span className="px-2 py-1 leading-5">: {singleVDoctor?.data?.member_nid_no}</span>
              </div>
              <div className="member-name flex items-start gap-2 text-[18px] font-bold">
                <label className="mr-[-10px]">Religion</label>
                <span className="px-2 py-1 leading-5">: {singleVDoctor?.data?.member_religion}</span>
              </div>
              <div className="member-name flex items-start gap-2 text-[18px] font-bold">
                <label className="mr-[-10px]"> St Date</label>
                <span className="px-2 py-1 leading-5">: {singleVDoctor?.data?.starting_date}</span>
              </div>
              <div className="member-name flex items-start gap-2 text-[18px] font-bold">
                <label className="mr-[-10px]">End Date</label>
                <span className="px-2 py-1 leading-5">: {singleVDoctor?.data?.ending_date}</span>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* Buttons for Download and Print */}
      <div className="flex gap-4 mt-5">
        {/* Download Button */}

        <button
          onClick={downloadIdCard}
          className="bg-green-500 w-32 text-white py-2 rounded-md hover:bg-green-600"
        >
          downoad
        </button>


        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="bg-green-500 w-32 text-white py-2 rounded-md hover:bg-green-600"
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default SingleVDoctor;
