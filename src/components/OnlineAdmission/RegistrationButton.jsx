const RegistrationButton = ({name}) => {
  return (
    <div className="relative w-60 h-16 hover:scale-105">
      <div className="bg-[#2D7DCE] absolute top-0 left-0 h-[93%] w-[97%] rounded-2xl flex justify-center items-center text-white shadow-md hover:shadow-lg hover:scale-102 transition-shadow duration-200 ease-in-out z-10">
        {name}
      </div>
      <div className="bg-[#1e5389] absolute bottom-0 left-0 h-[96%] w-[98%] rounded-2xl flex justify-center items-center text-white shadow-md hover:shadow-lg hover:scale-102 transition-shadow duration-200 ease-in-out"></div>
    </div>
  );
};

export default RegistrationButton;
