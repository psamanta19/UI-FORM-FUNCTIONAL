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
    <div className="px-6 py-8 md:px-12 md:pt-12">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
        Personal info
      </h1>

      <p className="text-gray-400 mt-2 leading-6">
        Please provide your name, email address, and phone number.
      </p>

      <div className="mt-6 md:mt-8 space-y-5">
        <div>
          <div className="flex justify-between">
            <label className="text-sm font-medium text-blue-950">Name</label>

            {showErrors && nameError && (
              <span className="text-xs font-medium text-red-500">
                {nameError}
              </span>
            )}
          </div>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Stephen King"
            className={`w-full mt-2 px-4 py-3 border rounded-lg outline-none ${
              showErrors && nameError
                ? "border-red-500 bg-red-50"
                : "border-gray-300 focus:border-indigo-500"
            }`}
          />
        </div>

        <div>
          <div className="flex justify-between">
            <label className="text-sm font-medium text-blue-950">
              Email Address
            </label>

            {showErrors && emailError && (
              <span className="text-xs font-medium text-red-500">
                {emailError}
              </span>
            )}
          </div>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. stephenking@lorem.com"
            className={`w-full mt-2 px-4 py-3 border rounded-lg outline-none ${
              showErrors && emailError
                ? "border-red-500 bg-red-50"
                : "border-gray-300 focus:border-indigo-500"
            }`}
          />
        </div>

        <div>
          <div className="flex justify-between">
            <label className="text-sm font-medium text-blue-950">
              Phone Number
            </label>

            {showErrors && phoneError && (
              <span className="text-xs font-medium text-red-500">
                {phoneError}
              </span>
            )}
          </div>

          <input
            type="text"
            value={phone}
            onChange={(e) => {
              const value = e.target.value;

              if (!/^\+?[0-9]*$/.test(value)) {
                return;
              }

              if (value.startsWith("+")) {
                if (value.length <= 13) {
                  setPhone(value);
                }
              } else {
                if (value.length <= 10) {
                  setPhone(value);
                }
              }
            }}
            placeholder="e.g. +91 9876543210"
            className={`w-full mt-2 px-4 py-3 border rounded-lg outline-none ${
              showErrors && phoneError
                ? "border-red-500 bg-red-50"
                : "border-gray-300 focus:border-indigo-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
