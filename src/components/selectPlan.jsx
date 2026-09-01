import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

function SelectPlan({
  billing,
  setBilling,
  selectedPlan,
  setSelectedPlan
}) {
  const plans = [
    {
      name: "Arcade",
      monthly: 9,
      yearly: 90,
      icon: arcadeIcon
    },
    {
      name: "Advanced",
      monthly: 12,
      yearly: 120,
      icon: advancedIcon
    },
    {
      name: "Pro",
      monthly: 15,
      yearly: 150,
      icon: proIcon
    }
  ];

  return (
    <div className="px-6 py-8 md:px-12 md:pt-12">

      <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
        Select your plan
      </h1>

      <p className="text-gray-400 mt-2 leading-6">
        You have the option of monthly or yearly billing.
      </p>

      <div className="grid md:grid-cols-3 gap-3 mt-6 md:mt-8">

        {plans.map((plan) => {
          const price =
            billing === "monthly"
              ? plan.monthly
              : plan.yearly;

          const selected = selectedPlan === plan.name;

          return (
            <button
              key={plan.name}
              type="button"
              onClick={() => setSelectedPlan(plan.name)}
              className={`text-left border rounded-lg p-4 md:h-[170px] ${
                selected
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-gray-300"
              }`}
            >
              <img
                src={plan.icon}
                alt=""
                className="w-10 h-10 mb-4"
              />

              <p className="font-bold text-blue-950">
                {plan.name}
              </p>

              <p className="text-gray-400 text-sm">
                ${price}/{billing === "monthly" ? "mo" : "yr"}
              </p>

              {billing === "yearly" && (
                <p className="text-blue-950 text-xs mt-1">
                  2 months free
                </p>
              )}
            </button>
          );
        })}

      </div>

      <div className="mt-6 bg-[#f7f8fc] rounded-lg p-3 flex justify-center items-center gap-4">

        <span
          className={`font-medium ${
            billing === "monthly"
              ? "text-blue-950"
              : "text-gray-400"
          }`}
        >
          Monthly
        </span>

        <button
          type="button"
          onClick={() =>
            setBilling(
              billing === "monthly"
                ? "yearly"
                : "monthly"
            )
          }
          className="w-10 h-5 bg-blue-950 rounded-full p-1 flex items-center"
        >
          <span
            className={`w-3 h-3 bg-white rounded-full transition-transform ${
              billing === "yearly"
                ? "translate-x-5"
                : ""
            }`}
          />
        </button>

        <span
          className={`font-medium ${
            billing === "yearly"
              ? "text-blue-950"
              : "text-gray-400"
          }`}
        >
          Yearly
        </span>

      </div>
    </div>
  );
}

export default SelectPlan;