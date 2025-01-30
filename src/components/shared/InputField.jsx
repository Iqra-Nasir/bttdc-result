const InputField = ({
  name,
  type,
  placeholder,
  register,
  validation,
  error,
}) => {
  return (
    <div className="mb-6">
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className="w-full text-base md:text-lg px-4 py-3 rounded-md focus:outline-none bg-[#F1F5F9] border border-gray-300 focus:border-[#0C7DCE] transition duration-300 ease-in-out"
      />
      {error && <p className="text-red-500 text-sm mt-2">{error.message}</p>}
    </div>
  );
};

export default InputField;
