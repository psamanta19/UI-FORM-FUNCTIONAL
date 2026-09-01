function AddOns({
  billing,
  selectedAddOns,
  setSelectedAddOns
}) {
  const addOns = [
    {
      name: "Online service",
      description: "Access to multiplayer games",
      monthly: 1,
      yearly: 10
    },
    {
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthly: 2,
      yearly: 20
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      monthly: 2,
      yearly: 20
    }
  ];

  const toggleAddOn = (name) => {
    if (selectedAddOns.includes(name)) {
      setSelectedAddOns(
        selectedAddOns.filter((item) => item !== name)
      );
    } else {
      setSelectedAddOns([...selectedAddOns, name]);
    }
  };

  return (
    <div className="px-6 py-8 md:px-12 md:pt-12">

      <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
        Pick add-ons
      </h1>

      <p className="text-gray-400 mt-2 leading-6">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="mt-6 md:mt-8 space-y-3">

        {addOns.map((addon) => {
          const selected = selectedAddOns.includes(addon.name);

          const price =
            billing === "monthly"
              ? addon.monthly
              : addon.yearly;

          return (
            <button
              key={addon.name}
              type="button"
              onClick={() => toggleAddOn(addon.name)}
              className={`w-full flex items-center gap-4 text-left border rounded-lg p-4 ${
                selected
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-300"
              }`}
            >

              <div
                className={`w-5 h-5 shrink-0 rounded border flex items-center justify-center ${
                  selected
                    ? "bg-indigo-600 border-indigo-600"
                    : "border-gray-300"
                }`}
              >
                {selected && (
                  <span className="text-white text-xs">
                    ✓
                  </span>
                )}
              </div>

              <div className="flex-1">
                <p className="font-bold text-blue-950 text-sm">
                  {addon.name}
                </p>

                <p className="text-gray-400 text-xs">
                  {addon.description}
                </p>
              </div>

              <p className="text-indigo-600 text-sm">
                +${price}/{billing === "monthly" ? "mo" : "yr"}
              </p>

            </button>
          );
        })}

      </div>
    </div>
  );
}

export default AddOns;