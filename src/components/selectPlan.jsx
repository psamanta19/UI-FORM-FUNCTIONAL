function SelectPlan({setCurrentStep}) {
  return (
    <div>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <button
        onClick={() => setCurrentStep(3)}
        className="bg-blue-900 text-white px-6 py-3 rounded-lg cursor-pointer">
        Next Step
      </button>
    </div>
  );
}

export default SelectPlan;
