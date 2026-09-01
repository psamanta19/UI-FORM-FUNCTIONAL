import { useState } from "react";
import sidebarBg from "./assets/images/bg-sidebar-desktop.svg";
import sidebarMobileBg from "./assets/images/bg-sidebar-mobile.svg";
import thankYouIcon from "./assets/images/icon-thank-you.svg";

import PersonalInfo from "./components/personalInfo";
import SelectPlan from "./components/selectPlan";
import AddOns from "./components/addOns";
import FinishingUp from "./components/finishingUp";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [showErrors, setShowErrors] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [billing, setBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("Arcade");

  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const [isConfirmed, setIsConfirmed] = useState(false);

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleNameChange = (value) => {
    setName(value);
    setNameError("");
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailError("");
  };

  const handlePhoneChange = (value) => {
    setPhone(value);
    setPhoneError("");
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      let valid = true;

      setNameError("");
      setEmailError("");
      setPhoneError("");

      if (!name.trim()) {
        setNameError("This field is required");
        valid = false;
      } else if (!/^[A-Za-z ]+$/.test(name.trim())) {
        setNameError("Name can only contain letters");
        valid = false;
      }

      if (!email.trim()) {
        setEmailError("This field is required");
        valid = false;
      } else if (!emailRegex.test(email.trim())) {
        setEmailError("Enter a valid email address");
        valid = false;
      }

      if (!phone.trim()) {
        setPhoneError("This field is required");
        valid = false;
      } else if (!/^\+?[0-9]+$/.test(phone.trim())) {
        setPhoneError("Phone number can only contain numbers");
        valid = false;
      }

      if (!valid) {
        setShowErrors(true);
        return;
      }

      setShowErrors(false);
    }

    setCompletedSteps((prev) => {
      const updatedSteps = [...prev];

      if (!updatedSteps.includes(currentStep)) {
        updatedSteps.push(currentStep);
      }

      if (
        currentStep < 4 &&
        !updatedSteps.includes(currentStep + 1)
      ) {
        updatedSteps.push(currentStep + 1);
      }

      return updatedSteps;
    });

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleGoBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step) => {
    if (
      step === currentStep ||
      completedSteps.includes(step)
    ) {
      setCurrentStep(step);
    }
  };

  const handleConfirm = () => {
    setCompletedSteps((prev) => {
      if (prev.includes(4)) {
        return prev;
      }

      return [...prev, 4];
    });

    setIsConfirmed(true);
  };

  return (
    <main className="min-h-screen bg-[#eef5ff] md:flex md:items-center md:justify-center md:p-6">

      <div className="relative w-full md:max-w-[940px] md:h-[600px] md:bg-white md:rounded-2xl md:p-3 md:flex">

        <aside className="relative w-full h-[172px] md:w-[274px] md:h-full md:rounded-xl overflow-hidden">

          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={sidebarMobileBg}
            />

            <img
              src={sidebarBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>

          <div className="relative z-10 flex justify-center gap-4 pt-8 md:block md:p-8 md:space-y-8">

            <div
              onClick={() => handleStepClick(1)}
              className={`flex items-center gap-4 ${
                completedSteps.includes(1) || currentStep === 1
                  ? "cursor-pointer"
                  : ""
              }`}
            >
              <div
                className={`w-9 h-9 shrink-0 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 1
                    ? "bg-white text-blue-950"
                    : "text-white"
                }`}
              >
                1
              </div>

              <div className="hidden md:block">
                <p className="text-white text-xs">STEP 1</p>
                <p className="text-sm font-bold text-white">
                  YOUR INFO
                </p>
              </div>
            </div>

            <div
              onClick={() => handleStepClick(2)}
              className={`flex items-center gap-4 ${
                completedSteps.includes(2) || currentStep === 2
                  ? "cursor-pointer"
                  : ""
              }`}
            >
              <div
                className={`w-9 h-9 shrink-0 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 2
                    ? "bg-white text-blue-950"
                    : "text-white"
                }`}
              >
                2
              </div>

              <div className="hidden md:block">
                <p className="text-white text-xs">STEP 2</p>
                <p className="text-sm font-bold text-white">
                  SELECT PLAN
                </p>
              </div>
            </div>

            <div
              onClick={() => handleStepClick(3)}
              className={`flex items-center gap-4 ${
                completedSteps.includes(3) || currentStep === 3
                  ? "cursor-pointer"
                  : ""
              }`}
            >
              <div
                className={`w-9 h-9 shrink-0 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 3
                    ? "bg-white text-blue-950"
                    : "text-white"
                }`}
              >
                3
              </div>

              <div className="hidden md:block">
                <p className="text-white text-xs">STEP 3</p>
                <p className="text-sm font-bold text-white">
                  ADD-ONS
                </p>
              </div>
            </div>

            <div
              onClick={() => handleStepClick(4)}
              className={`flex items-center gap-4 ${
                completedSteps.includes(4) || currentStep === 4
                  ? "cursor-pointer"
                  : ""
              }`}
            >
              <div
                className={`w-9 h-9 shrink-0 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 4
                    ? "bg-white text-blue-950"
                    : "text-white"
                }`}
              >
                4
              </div>

              <div className="hidden md:block">
                <p className="text-white text-xs">STEP 4</p>
                <p className="text-sm font-bold text-white">
                  SUMMARY
                </p>
              </div>
            </div>

          </div>
        </aside>

        <section className="relative z-20 -mt-[73px] mx-4 rounded-xl bg-white md:mt-0 md:mx-0 md:rounded-none md:bg-transparent md:flex-1 md:flex md:flex-col">

          {isConfirmed ? (
            <div className="min-h-[400px] md:h-full flex items-center justify-center px-6 py-12 md:px-12">
              <div className="text-center max-w-[450px]">

                <img
                  src={thankYouIcon}
                  alt=""
                  className="w-14 md:w-20 mx-auto mb-6 md:mb-7"
                />

                <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
                  Thank you!
                </h1>

                <p className="text-gray-400 mt-3 leading-6">
                  Thanks for confirming your subscription! We hope
                  you have fun using our platform. If you ever need
                  support, please feel free to email us at
                  support@loremgaming.com.
                </p>

              </div>
            </div>
          ) : (
            <>
              <div className="md:flex-1">

                {currentStep === 1 && (
                  <PersonalInfo
                    name={name}
                    setName={handleNameChange}
                    email={email}
                    setEmail={handleEmailChange}
                    phone={phone}
                    setPhone={handlePhoneChange}
                    showErrors={showErrors}
                    nameError={nameError}
                    emailError={emailError}
                    phoneError={phoneError}
                  />
                )}

                {currentStep === 2 && (
                  <SelectPlan
                    billing={billing}
                    setBilling={setBilling}
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                  />
                )}

                {currentStep === 3 && (
                  <AddOns
                    billing={billing}
                    selectedAddOns={selectedAddOns}
                    setSelectedAddOns={setSelectedAddOns}
                  />
                )}

                {currentStep === 4 && (
                  <FinishingUp
                    billing={billing}
                    selectedPlan={selectedPlan}
                    selectedAddOns={selectedAddOns}
                    setCurrentStep={setCurrentStep}
                  />
                )}

              </div>

              <div className="flex justify-between items-center px-6 py-5 md:px-12 md:pb-8 md:pt-0">

                {currentStep > 1 ? (
                  <button
                    onClick={handleGoBack}
                    className="text-gray-400 font-medium cursor-pointer hover:text-blue-950"
                  >
                    Go Back
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 4 && (
                  <button
                    onClick={handleNextStep}
                    className="bg-blue-950 text-white px-5 py-3 rounded-lg cursor-pointer"
                  >
                    Next Step
                  </button>
                )}

                {currentStep === 4 && (
                  <button
                    onClick={handleConfirm}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg cursor-pointer"
                  >
                    Confirm
                  </button>
                )}

              </div>
            </>
          )}

        </section>
      </div>
    </main>
  );
}

export default App;