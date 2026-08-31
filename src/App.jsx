import { useState } from "react";
import sidebarBg from "./assets/images/bg-sidebar-desktop.svg";
import thankYouIcon from "./assets/images/icon-thank-you.svg";

import PersonalInfo from "./components/personalInfo";
import SelectPlan from "./components/selectPlan";
import AddOns from "./components/addOns";
import FinishingUp from "./components/finishingUp";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [showErrors, setShowErrors] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [isConfirmed, setIsConfirmed] = useState(false);

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
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleGoBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="min-h-screen bg-amber-50 flex justify-center items-center p-4">
      <div className="w-full max-w-235 h-150 bg-white rounded-2xl p-3 flex">
        <aside className="relative w-68.75 h-full rounded-xl overflow-hidden">
          <img
            src={sidebarBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 p-8 space-y-8">
            <div className="flex items-center gap-4">
              <div
                className={`w-9 h-9 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 1 ? "bg-white text-blue-950" : "text-white"
                }`}
              >
                1
              </div>

              <div>
                <p className="text-white text-xs">STEP 1</p>
                <p className="text-sm font-bold text-white">YOUR INFO</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`w-9 h-9 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 2 ? "bg-white text-blue-950" : "text-white"
                }`}
              >
                2
              </div>

              <div>
                <p className="text-white text-xs">STEP 2</p>
                <p className="text-sm font-bold text-white">SELECT PLAN</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`w-9 h-9 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 3 ? "bg-white text-blue-950" : "text-white"
                }`}
              >
                3
              </div>

              <div>
                <p className="text-white text-xs">STEP 3</p>
                <p className="text-sm font-bold text-white">ADD-ONS</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`w-9 h-9 rounded-full border border-white flex items-center justify-center ${
                  currentStep === 4 ? "bg-white text-blue-950" : "text-white"
                }`}
              >
                4
              </div>

              <div>
                <p className="text-white text-xs">STEP 4</p>
                <p className="text-sm font-bold text-white">SUMMARY</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 flex flex-col">
  {isConfirmed ? (
    <div className="flex-1 flex items-center justify-center px-12">
      <div className="text-center max-w-125">
        <img
          src={thankYouIcon}
          alt=""
          className="w-20 mx-auto mb-7"
        />

        <h1 className="text-3xl font-bold text-blue-950">
          Thank you!
        </h1>

        <p className="text-gray-400 mt-3 leading-6">
          Thanks for confirming your subscription! We hope you have
          fun using our platform. If you ever need support, please feel
          free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  ) : (
    <>
      <div className="flex-1">
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
          <SelectPlan setCurrentStep={setCurrentStep} />
        )}

        {currentStep === 3 && (
          <AddOns setCurrentStep={setCurrentStep} />
        )}

        {currentStep === 4 && (
          <FinishingUp setCurrentStep={setCurrentStep} />
        )}
      </div>

      <div className="flex justify-between items-center px-12 pb-8">
        {currentStep > 1 ? (
          <button
            onClick={handleGoBack}
            className="text-gray-500 font-medium cursor-pointer"
          >
            Go Back
          </button>
        ) : (
          <div></div>
        )}

        {currentStep < 4 && (
          <button
            onClick={handleNextStep}
            className="bg-blue-950 text-white px-6 py-3 rounded-lg cursor-pointer"
          >
            Next Step
          </button>
        )}

        {currentStep === 4 && (
          <button
            onClick={() => setIsConfirmed(true)}
            className="bg-indigo-600 text-white px-7 py-3 rounded-lg cursor-pointer"
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
