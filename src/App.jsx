import { useState } from "react";
import sidebarBg from "./assets/images/bg-sidebar-desktop.svg";

import PersonalInfo from "./components/personalInfo";
import SelectPlan from "./components/selectPlan";
import AddOns from "./components/addOns";
import FinishingUp from "./components/finishingUp";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <main className="min-h-screen bg-amber-50 flex justify-center items-center p-4">
      <div className="w-full max-w-235 h-150 bg-white rounded-2xl p-3 flex">
        <aside className="relative w-68.75 min-h-142.5 rounded-xl overflow-hidden">
          <img
            src={sidebarBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 p-8 space-y-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentStep(1)}
                className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                  currentStep === 1
                    ? "bg-[#bee2ff] text-[#12345b] border-[#bee2ff]"
                    : "border-white text-white"
                }`}
              >
                1
              </button>
              <div>
                <p className="text-white text-xs">STEP 1</p>
                <p className="text-sm font-bold text-white">YOUR INFO</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentStep(2)}
                className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                  currentStep === 2
                    ? "bg-[#bee2ff] text-[#12345b] border-[#bee2ff]"
                    : "border-white text-white"
                }`}
              >
                2
              </button>
              <div>
                <p className="text-white text-xs">STEP 2</p>
                <p className="text-sm font-bold text-white">SELECT PLAN</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentStep(3)}
                className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                  currentStep === 3
                    ? "bg-[#bee2ff] text-[#12345b] border-[#bee2ff]"
                    : "border-white text-white"
                }`}
              >
                3
              </button>
              <div>
                <p className="text-white text-xs">STEP 3</p>
                <p className="text-sm font-bold text-white">ADD-ONS</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentStep(4)}
                className={`w-9 h-9 rounded-full border flex items-center justify-center ${
                  currentStep === 4
                    ? "bg-[#bee2ff] text-[#12345b] border-[#bee2ff]"
                    : "border-white text-white"
                }`}
              >
                4
              </button>
              <div>
                <p className="text-white text-xs">STEP 4</p>
                <p className="text-sm font-bold text-white">SUMMARY</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 flex flex-col">
          <div className="flex-1">
            {currentStep === 1 && (
              <PersonalInfo
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
              />
            )}

            {currentStep === 2 && <SelectPlan />}

            {currentStep === 3 && <AddOns />}

            {currentStep === 4 && <FinishingUp />}
          </div>

          <div className="flex justify-between items-center px-12 pb-8">
            {currentStep > 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-gray-500 font-medium cursor-pointer"
              >
                Go Back
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-blue-950 text-white px-6 py-3 rounded-lg cursor-pointer"
              >
                Next Step
              </button>
            ) : (
              <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg cursor-pointer">
                Confirm
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
