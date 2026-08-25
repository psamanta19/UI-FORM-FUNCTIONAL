import { useState } from "react";
import sidebarBg from "./assets/images/bg-sidebar-desktop.svg";

import PersonalInfo from "./components/personalInfo";
import SelectPlan from "./components/selectPlan";
import AddOns from "./components/addOns";
import FinishingUp from "./components/finishingUp";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="min-h-screen bg-amber-50 flex justify-center items-center p-4">
      <div className="w-full max-w-235 bg-white rounded-2xl p-3 flex">
        <aside className="relative w-68.75 min-h-142.5 rounded-xl overflow-hidden">
          <img
            src={sidebarBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 p-8 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white">
                1
              </div>
              <div>
                <p className="text-white text-xs">STEP 1</p>
                <p className="text-sm font-bold text-white">YOUR INFO</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white">
                2
              </div>
              <div>
                <p className="text-white text-xs">STEP 2</p>
                <p className="text-sm font-bold text-white">SELECT PLAN</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white">
                3
              </div>
              <div>
                <p className="text-white text-xs">STEP 3</p>
                <p className="text-sm font-bold text-white">ADD-ONS</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-white flex items-center justify-center text-white">
                4
              </div>
              <div>
                <p className="text-white text-xs">STEP 4</p>
                <p className="text-sm font-bold text-white">SUMMARY</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 p-12">
          {currentStep === 1 && <PersonalInfo />}
          {currentStep === 2 && <SelectPlan />}
          {currentStep === 3 && <AddOns />}
          {currentStep === 4 && <FinishingUp />}

          <button
            onClick={() => setCurrentStep(2)}
            className="mt-8 bg-blue-900 text-white px-5 py-3 rounded-lg"
          >
            Test Step 2
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;