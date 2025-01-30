import { useEffect, useState } from "react";
import { useForm, Controller, set } from "react-hook-form";
import { API_URL } from "../../../utils/url_config";
import division from "../../../public/division.json";
import district from "../../../public/district.json";
const Branch = () => {
  const { handleSubmit, control, watch, reset } = useForm();
  const [institutes, setInstitutes] = useState([]);
  console.log(division);
  


  // Divisions and some districts of Bangladesh
  const divisions = division;
  const districts = district;

  const selectedDivision = watch("division");

  useEffect(() => {
    fetch(`${API_URL}/api/institutes`)
      .then((response) => response.json())
      .then((data) => setInstitutes(data.data))
      .catch((error) => console.error("Error fetching institutes:", error));
  }, []);

  console.log(institutes,'dfghjkl');


  console.log(institutes);
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    let district = data.district;
    setInstitutes(institutes.filter((institute) => institute?.institute_address?.district === district));

  };
  console.log(institutes, 'institutes');

  return (
    <div className="container mx-auto my-10">
      <div className="w-full bg-white pt-20">
        <header className="mb-10 text-center px-5 md:px-0">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            শাখা অনুসন্ধান করুন
          </h1>
          <p className="text-gray-600">
            আপনার প্রয়োজনীয় শাখার অবস্থান খুঁজে বের করতে বিভাগ, জেলা নির্বাচন করুন
          </p>
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto space-y-4 px-5 md:px-0"
        >
          {/* Division Selection */}
          <Controller
            name="division"
            control={control}
            render={({ field }) => (
              <select {...field} className="border p-2 rounded w-full">
                <option value="">বিভাগ নির্বাচন করুন</option>
                {divisions.map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            )}
          />

          {/* District Selection */}
          {selectedDivision && (
            <Controller
              name="district"
              control={control}
              render={({ field }) => (
                <select {...field} className="border p-2 rounded w-full">
                  <option value="">জেলা নির্বাচন করুন</option>
                  {districts[selectedDivision].map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              )}
            />
          )}

          {/* Branch Name Input */}
          {/* <Controller
            name="branchName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="শাখার নাম লিখুন"
                className="border p-2 rounded w-full"
              />
            )}
          /> */}

          {/* Submit Button */}
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            অনুসন্ধান করুন
          </button>
        </form>
      </div>
      {/* Map Display (placeholder) */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {
          institutes?.map((institute) => (
            <div key={institute?.id} className="w-full bg-gray-200 rounded-lg flex flex-col justify-between">

              <img src={`${API_URL}/uploads/institute_image/${institute?.institute_image}`} alt={institute?.institute_name} className="w-full h-60 object-cover rounded-t-lg" />
              <div className="p-2">
                <h3 className="text-lg text-gray-800 font-bold"> {institute?.institute_name}</h3>
                <p className="text-gray-600"><span>Director Name:</span> {institute?.director_name}</p>
                <p className="text-gray-600"><span>Registration Number:</span> {institute?.registration_no}</p>
                <p className="text-gray-600"><span>Phone Number:</span>{institute?.phone_number}</p>
                <p className="text-gray-600"><span>Email:</span>{institute?.email}</p>
                <p className="text-gray-600"><span>Institude Address: </span>{`${institute?.institute_address?.village || ''}, ${institute?.institute_address?.union || ''} , ${institute?.institute_address?.post_office || ''}, ${institute?.institute_addres?.district || ''}`}</p>
              </div>

            </div>
          ))
        }
      </div>
      {
        institutes?.length === 0 && <div className="text-center text-gray-600">এই বিভাগে কোন শাখা পাওয়া যায়নি</div>
      }
    </div>
  );
};

export default Branch;
