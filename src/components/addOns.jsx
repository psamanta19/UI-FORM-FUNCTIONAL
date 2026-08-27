import { useState } from "react";

function AddOns({ setCurrentStep }) {
  const [addOns, setAddOns] = useState([]);

  return (
    <div className="p-12">
      <div>
        <h1 className="text-3xl font-bold text-blue-950">
          Pick add-ons
        </h1>

        <p className="text-gray-400 mt-2">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-4">
          <input
            type="checkbox"
            checked={addOns.includes("Online service")}
            onChange={() => {
              if (addOns.includes("Online service")) {
                setAddOns(
                  addOns.filter((item) => item !== "Online service")
                );
              } else {
                setAddOns([...addOns, "Online service"]);
              }
            }}
            className="w-5 h-5"
          />

          <div className="flex-1">
            <h2 className="font-bold text-blue-950">
              Online service
            </h2>

            <p className="text-sm text-gray-400">
              Access to multiplayer games
            </p>
          </div>

          <span className="text-indigo-500">
            +$1/mo
          </span>
        </div>

        <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-4 mt-4">
          <input
            type="checkbox"
            checked={addOns.includes("Larger storage")}
            onChange={() => {
              if (addOns.includes("Larger storage")) {
                setAddOns(
                  addOns.filter((item) => item !== "Larger storage")
                );
              } else {
                setAddOns([...addOns, "Larger storage"]);
              }
            }}
            className="w-5 h-5"
          />

          <div className="flex-1">
            <h2 className="font-bold text-blue-950">
              Larger storage
            </h2>

            <p className="text-sm text-gray-400">
              Extra 1TB of cloud save
            </p>
          </div>

          <span className="text-indigo-500">
            +$2/mo
          </span>
        </div>

        <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-4 mt-4">
          <input
            type="checkbox"
            checked={addOns.includes("Customizable profile")}
            onChange={() => {
              if (addOns.includes("Customizable profile")) {
                setAddOns(
                  addOns.filter(
                    (item) => item !== "Customizable profile"
                  )
                );
              } else {
                setAddOns([
                  ...addOns,
                  "Customizable profile",
                ]);
              }
            }}
            className="w-5 h-5"
          />

          <div className="flex-1">
            <h2 className="font-bold text-blue-950">
              Customizable profile
            </h2>

            <p className="text-sm text-gray-400">
              Custom theme on your profile
            </p>
          </div>

          <span className="text-indigo-500">
            +$2/mo
          </span>
        </div>
      </div>

    </div>
  );
}

export default AddOns;