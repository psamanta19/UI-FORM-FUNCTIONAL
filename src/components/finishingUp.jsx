function FinishingUp({
  billing,
  selectedPlan,
  selectedAddOns,
  setCurrentStep
}) {
  const plans = {
    Arcade: {
      monthly: 9,
      yearly: 90
    },
    Advanced: {
      monthly: 12,
      yearly: 120
    },
    Pro: {
      monthly: 15,
      yearly: 150
    }
  };

  const addOns = {
    "Online service": {
      monthly: 1,
      yearly: 10
    },
    "Larger storage": {
      monthly: 2,
      yearly: 20
    },
    "Customizable profile": {
      monthly: 2,
      yearly: 20
    }
  };

  const isYearly = billing === "yearly";

  const planPrice = isYearly
    ? plans[selectedPlan].yearly
    : plans[selectedPlan].monthly;

  const addOnTotal = selectedAddOns.reduce(
    (total, name) => {
      return (
        total +
        (isYearly
          ? addOns[name].yearly
          : addOns[name].monthly)
      );
    },
    0
  );

  const total = planPrice + addOnTotal;

  return (
    <div className="px-6 py-8 md:px-12 md:pt-12">

      <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
        Finishing up
      </h1>

      <p className="text-gray-400 mt-2 leading-6">
        Double-check everything looks OK before confirming.
      </p>

      <div className="mt-6 bg-[#f7f8fc] rounded-lg p-4">

        <div className="flex justify-between items-center pb-4 border-b border-gray-300">

          <div>
            <p className="font-bold text-blue-950 text-sm">
              {selectedPlan} ({isYearly ? "Yearly" : "Monthly"})
            </p>

            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="text-gray-400 underline text-sm cursor-pointer"
            >
              Change
            </button>
          </div>

          <p className="font-bold text-blue-950">
            ${planPrice}/{isYearly ? "yr" : "mo"}
          </p>

        </div>

        <div className="mt-4 space-y-3">

          {selectedAddOns.map((name) => {
            const price = isYearly
              ? addOns[name].yearly
              : addOns[name].monthly;

            return (
              <div
                key={name}
                className="flex justify-between text-sm"
              >
                <p className="text-gray-400">
                  {name}
                </p>

                <p className="text-blue-950">
                  +${price}/{isYearly ? "yr" : "mo"}
                </p>
              </div>
            );
          })}

        </div>

      </div>

      <div className="flex justify-between items-center px-4 mt-6">

        <p className="text-gray-400 text-sm">
          Total (per {isYearly ? "year" : "month"})
        </p>

        <p className="text-indigo-600 font-bold text-lg">
          +${total}/{isYearly ? "yr" : "mo"}
        </p>

      </div>

    </div>
  );
}

export default FinishingUp;