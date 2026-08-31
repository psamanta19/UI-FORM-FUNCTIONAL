function PersonalInfo({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  showErrors,
  nameError,
  emailError,
  phoneError,
}) {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold text-blue-950">
        Personal info
      </h1>

      <p className="text-gray-400 mt-2">
        Please provide your name, email address, and phone number.
      </p>

      <div className="mt-8">
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-blue-950">
            Name
          </label>

          {showErrors && nameError && (
            <span className="text-sm font-medium text-red-500">
              {nameError}
            </span>
          )}
        </div>

        <input
          type="text"
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full h-12 px-4 rounded-lg border outline-none ${
            showErrors && nameError
              ? "border-red-500"
              : "border-gray-300 focus:border-indigo-500"
          }`}
        />
      </div>

      <div className="mt-5">
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-blue-950">
            Email Address
          </label>

          {showErrors && emailError && (
            <span className="text-sm font-medium text-red-500">
              {emailError}
            </span>
          )}
        </div>

        <input
          type="email"
          placeholder="e.g. stephenking@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full h-12 px-4 rounded-lg border outline-none ${
            showErrors && emailError
              ? "border-red-500"
              : "border-gray-300 focus:border-indigo-500"
          }`}
        />
      </div>

      <div className="mt-5">
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium text-blue-950">
            Phone Number
          </label>

          {showErrors && phoneError && (
            <span className="text-sm font-medium text-red-500">
              {phoneError}
            </span>
          )}
        </div>

        <input
          type="tel"
          placeholder="e.g. +1 234 567 890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`w-full h-12 px-4 rounded-lg border outline-none ${
            showErrors && phoneError
              ? "border-red-500"
              : "border-gray-300 focus:border-indigo-500"
          }`}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;