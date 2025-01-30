const FormSelectInput = ({
  name,
  label,
  register,
  validation,
  error,
  className // Default type to "text" if not provided
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name} className="text-base text-black">
        {label} <span className="text-red-600">*</span>
      </label>
      <select
        id={name}
        name={name}
        {...register(name, validation)}
        className="border border-gray-300 p-2 rounded"
      >
        <option value="male">Male</option> {/* Male */}
        <option value="female">Female</option> {/* Female */}
        <option value="other">Other</option> {/* Other */}
      </select>
      {error && <p className="text-red-600 text-sm">{error.message}</p>}
    </div>
  );
};

export default FormSelectInput;
