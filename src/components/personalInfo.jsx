function PersonalInfo({ setCurrentStep }) {
  return (
    <div>
      <h1>Personal info</h1>

      <p>
        Please provide your name, email address, and phone number.
      </p>

      <button
        onClick={() => setCurrentStep(2)}
        className="bg-blue-900 text-white px-6 py-3 rounded-lg cursor-pointer"
      >
        Next Step
      </button>
    </div>
  );
}

export default PersonalInfo;