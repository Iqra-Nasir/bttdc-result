const FormInputGroup = ({
  name,
  label,
  placeholder,
  register,
  validation,
  error,
  className,
  type = "text", // Default type to "text" if not provided
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-base text-black">
        {label} <span className="text-red-600">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type} // Use the type prop here
        placeholder={placeholder}
        {...register(name, validation)}
        className="border border-gray-300 p-2 rounded"
      />
      {error && <p className="text-red-600 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormInputGroup;
