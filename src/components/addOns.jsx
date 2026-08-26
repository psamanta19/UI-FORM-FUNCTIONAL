function AddOns({setCurrentStep}) {
  return (
    <div>
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
            <button
        onClick={() => setCurrentStep(4)}
        className="bg-blue-900 text-white px-6 py-3 rounded-lg cursor-pointer">
        Next Step
      </button>
    </div>
  );
}

export default AddOns;