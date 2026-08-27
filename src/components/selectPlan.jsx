import { useState } from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

function SelectPlan({ setCurrentStep }) {
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="p-12">
      <div>
        <h1 className="text-3xl font-bold text-blue-950">
          Select your plan
        </h1>

        <p className="text-gray-400 mt-2">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <div
          onClick={() => setSelectedPlan("Arcade")}
          className={`flex-1 rounded-lg p-4 cursor-pointer border ${
            selectedPlan === "Arcade"
              ? "border-indigo-500 bg-indigo-50"
              : "border-gray-300"
          }`}
        >
          <img
            src={arcadeIcon}
            alt="Arcade"
            className="w-10 h-10"
          />

          <h2 className="font-bold text-blue-950 mt-10">
            Arcade
          </h2>

          <p className="text-gray-400 mt-1">
            {isYearly ? "$90/yr" : "$9/mo"}
          </p>

          {isYearly && (
            <p className="text-sm text-blue-950 mt-1">
              2 months free
            </p>
          )}
        </div>

        <div
          onClick={() => setSelectedPlan("Advanced")}
          className={`flex-1 rounded-lg p-4 cursor-pointer border ${
            selectedPlan === "Advanced"
              ? "border-indigo-500 bg-indigo-50"
              : "border-gray-300"
          }`}
        >
          <img
            src={advancedIcon}
            alt="Advanced"
            className="w-10 h-10"
          />

          <h2 className="font-bold text-blue-950 mt-10">
            Advanced
          </h2>

          <p className="text-gray-400 mt-1">
            {isYearly ? "$120/yr" : "$12/mo"}
          </p>

          {isYearly && (
            <p className="text-sm text-blue-950 mt-1">
              2 months free
            </p>
          )}
        </div>

        <div
          onClick={() => setSelectedPlan("Pro")}
          className={`flex-1 rounded-lg p-4 cursor-pointer border ${
            selectedPlan === "Pro"
              ? "border-indigo-500 bg-indigo-50"
              : "border-gray-300"
          }`}
        >
          <img
            src={proIcon}
            alt="Pro"
            className="w-10 h-10"
          />

          <h2 className="font-bold text-blue-950 mt-10">
            Pro
          </h2>

          <p className="text-gray-400 mt-1">
            {isYearly ? "$150/yr" : "$15/mo"}
          </p>

          {isYearly && (
            <p className="text-sm text-blue-950 mt-1">
              2 months free
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 bg-gray-100 p-3 mt-8 rounded-lg">
        <span
          className={
            !isYearly
              ? "font-bold text-blue-950"
              : "text-gray-400"
          }
        >
          Monthly
        </span>

        <button
          onClick={() => setIsYearly(!isYearly)}
          className="w-12 h-6 bg-blue-950 rounded-full p-1 cursor-pointer flex items-center"
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transition-transform ${
              isYearly ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>

        <span
          className={
            isYearly
              ? "font-bold text-blue-950"
              : "text-gray-400"
          }
        >
          Yearly
        </span>
      </div>

      <div className="flex justify-between mt-12">
        <button
          onClick={() => setCurrentStep(1)}
          className="text-gray-500 font-medium cursor-pointer"
        >
          Go Back
        </button>

        <button
          onClick={() => setCurrentStep(3)}
          className="bg-blue-950 text-white px-6 py-3 rounded-lg cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default SelectPlan;